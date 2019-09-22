<?php
header('content-type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin: *");

$headers = getallheaders();

$data['headers'] = $headers;

$pageNum = isset($_POST['pageNum']) ? $_POST['pageNum'] : 1;
$pageSize = isset($_POST['pageSize']) ? $_POST['pageSize'] : 10;

$data['code'] = 200;
$data['message'] = '数据请求成功';
$data['success'] = true;

$data['result']['total'] = 80;
$arr = array();
for($i = 0;$i<$pageSize;$i++){
  $arr[$i] = array(
    'id' => md5($i),
    'userName' => 'admin_'.($i+1),
  );
};

$data['result']['rows'] = $arr;

echo json_encode($data);


?>
