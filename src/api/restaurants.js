// 가게와 관련된 CRUD API 함수 파일
import { posts } from './index';

// 가게 목록을 조회하는 API
function fetchRestaurants(username) {
  return posts.get(`/restaurant/list_restaurants/${username}`);
}

// 특정 가게를 조회하는 API
function fetchRestaurant(restaurant_num) {
  return posts.get(`/restaurant/list_restaurant/${restaurant_num}`);
}

// 가게 데이터를 생성하는 API
function createRestaurant(postData) {
  return posts.post('/restaurant/insert_restaurant', postData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

// 가게 데이터를 삭제하는 API
function deleteRestaurant(restaurant_num) {
  return posts.delete(`/restaurant/delete_restaurant/${restaurant_num}`);
}

// 가게 데이터를 수정하는 API
function editRestaurant(restaurant_num, postData) {
  return posts.put(`/restaurant/update_restaurant/${restaurant_num}`, postData);
}

//가게 로고 변경 API
function editLogo(logoData) {
  return posts.patch('/v1/restaurant/update_restaurant_logo', logoData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function editOusideImage(oustsideImageData) {
  return posts.patch(
    '/v1/restaurant/update_restaurant_outside_image',
    oustsideImageData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

function editMenuImage1(menuImage1) {
  return posts.patch(
    '/v1/restaurant/update_restaurant_menu_image1',
    menuImage1,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

function editMenuImage2(menuImage2) {
  return posts.patch(
    '/v1/restaurant/update_restaurant_menu_image2',
    menuImage2,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

//가게 오픈/마감 정보 수정 API
function setOnOff(restaurant_num, isOpen) {
  return posts.patch('/v1/restaurant/update_restaurant_isOpen', {
    restaurant_num,
    isOpen,
  });
}

export {
  fetchRestaurants,
  fetchRestaurant,
  createRestaurant,
  deleteRestaurant,
  editRestaurant,
  editLogo,
  editOusideImage,
  editMenuImage1,
  editMenuImage2,
  setOnOff,
};
