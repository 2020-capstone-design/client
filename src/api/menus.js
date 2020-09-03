import { posts } from './index';

function fetchMenus(restaurant_num) {
  return posts.get(`/v1/menu/list_menu/${restaurant_num}`);
}

export { fetchMenus };
