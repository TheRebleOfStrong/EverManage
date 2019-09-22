<?php

/* 获取Headers中数据 */
function getHeadersData () {
  return getallheaders();

};
/* 获取POST中body数据 */
function getPostData () {
  $postData = @file_get_contents("php://input");
  $postData = urldecode($postData);
  $postRes = json_decode($postData,true);
  return $postRes;
};

?>