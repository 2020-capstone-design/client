import { posts } from './index';

function fetchMenus(restaurant_num) {
  return posts.get(`/v1/menu/list_menus/${restaurant_num}`);
}

function fetchMenu(menu_num) {
  return posts.get(`/v1/menu/list_menu/${menu_num}`);
}

function createMenu(menuData) {
  return posts.post('v1/menu/insert_menu', menuData);
}

function editMenu(menuData) {
  return posts.put('v1/menu/update_menu', menuData);
}

function deleteMenu(menu_num) {
  return posts.delete(`v1/menu/delete_menu/${menu_num}`);
}

export { fetchMenus, fetchMenu, createMenu, editMenu, deleteMenu };
