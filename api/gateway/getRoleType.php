<?php
header('Content-Type:text/html;charset=utf-8');
//允许跨域
header("Access-Control-Allow-Origin: *");
require_once('../func/common.func.php');

$data = array(
  'code'=>200,
  'message'=>'获取用户权限失败',
  'result'=>null,
  'success'=>false
);

//模拟两组数据
$users[] = array(
  'userName'=>'wangzheng',
  'password'=>'MTIzNDU2',
  'userId'=>md5('wangzhengMTIzNDU2'),
  'authority'=>'user'
);
$users[] = array(
  'userName'=>'admin',
  'password'=>'MTIzNDU2',
  'userId'=>md5('adminMTIzNDU2'),
  'authority'=>'admin'
);

//获取post的参数
$postdata = getPostData();
$userId = isset($postdata['userId']) ? $postdata['userId'] : null;

if($userId == null){
  $data['code'] = 400;
  $data['message'] = '传参错误';
  exit(json_encode($data));
};

$issetUserId = false;
foreach($users as $user){
  if($user['userId'] == $userId){
    $issetUserId = true;
    $currentUser = $user;
  };
};

if($issetUserId == false){
  $data['code'] = 400;
  $data['message'] = '该用户不存在';
  exit(json_encode($data));
};

$data['message'] = 'success';
$data['result'] = array(
  'authority'=>$currentUser['authority']
);
$data['success'] = true;

//更新token
$token = md5($currentUser['userName'].$currentUser['password'].time());
header('token:'.$token);

echo json_encode($data);

?>