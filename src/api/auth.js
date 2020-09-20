// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('v1/auth/signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('v1/auth/login', userData);
}

//회원정보관리 API
function fetchUserInfo(userId) {
  return instance.get(`v1/owner/owner_info/${userId}`);
}

function updateUser(userData) {
  return instance.patch('v1/owner/update_owner_info', userData);
}

function updateUserPassword(userData) {
  return instance.patch('v1/owner/update_owner_password', userData);
}

//회원탈퇴 API
function deleteUser(userId) {
  return instance.delete(`v1/owner/delete_owner/${userId}`);
}

export {
  registerUser,
  loginUser,
  fetchUserInfo,
  updateUser,
  updateUserPassword,
  deleteUser,
};
