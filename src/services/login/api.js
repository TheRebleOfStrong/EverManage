import http from '@/utils/http';
import config from '@/services/config';

const {gateway} = config;

//登录接口
export async function loginApi(options) {
  return http.post(`${gateway}/loginInfoRes.php`,options);
};

//获取权限接口
export async function getRoleApi(options) {
  return http.post(`${gateway}/getRoleType.php`,options);
};