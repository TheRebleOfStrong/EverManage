<?php
header('content-type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin: *");

date_default_timezone_set("PRC");

require_once '../func/common.func.php';

//获取body请求体
$postData = getPostData();

$name = isset($postData['name']) ? $postData['name'] : null;
$password = isset($postData['password']) ? $postData['password'] : null;

$data = array(
  'code'=>200,
  'message'=>'登录成功',
  'result'=>null,
  'success'=>false
);

if($name == null || $password == null){
  $data['message'] = '用户名/密码错误';
}else{
  //登录时间
  $loginTime = time();
  $data['success'] = true;
  $data['result'] = array(
    'token'=>md5($name.$password.$loginTime),
    'userId'=>md5($name.$password)
  );
};

echo json_encode($data);

?>
