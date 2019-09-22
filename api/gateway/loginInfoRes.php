<?php
header('Content-Type:text/html;charset=utf-8');
//允许跨域
header("Access-Control-Allow-Origin: *");
require_once('../func/common.func.php');

$data = array(
  'code'=>200,
  'message'=>'登录成功',
  'result'=>null,
  'success'=>false
);

//模拟两组数据
$users[] = array(
  'userName'=>'wangzheng',
  'password'=>'MTIzNDU2',
);
$users[] = array(
  'userName'=>'admin',
  'password'=>'MTIzNDU2',
);

//获取post的参数
$postdata = getPostData();
$userName = isset($postdata['userName']) ? $postdata['userName'] : null;
$password = isset($postdata['password']) ? $postdata['password'] : null;

//判断参数是否都有值
if($userName == null || $password == null){
  $data['code'] = 400;
  $data['message'] = '请完善用户名/密码';
  exit(json_encode($data));
};

//判断参数是否与源数据匹配
$issetUserName = false;
$issetPassword = false;
foreach($users as $user){
  if($userName == $user['userName']){
    $issetUserName = true;
    if($password == $user['password']){
      $issetPassword = true;
    };
  };
};
if($issetUserName == false){
  $data['code'] = 400;
  $data['message'] = '用户名不存在';
  exit(json_encode($data));
};
if($issetPassword == false){
  $data['code'] = 400;
  $data['message'] = '密码错误';
  exit(json_encode($data));
};

//返回userId和用户名
$result = array(
  'userId'=>md5($userName.$password),
  'username'=>$userName,
);
$data['result'] = $result;
$data['success'] = true;
$token = md5($userName.$password.time());
header('token:'.$token);
echo json_encode($data);

?>