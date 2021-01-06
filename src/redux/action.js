import axios from "axios";
import * as types from "./constants";

// Product List
export function fetchApiProductData() {
  return async function (dispatch) {
    let results = axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments`,
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.FETCH_DATA,
        item: response.data,
      });
    }
  };
}
// Fetch SingleProduct Data

export function fetchSingleProductList(id) {
  return async function (dispatch) {
    let results = axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments/` + id,
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.FETCH_SINGLE_DATA,
        item: response.data,
      });
    }
  };
}

// ToDo List
export function fetchUserTaskData() {
  return async function (dispatch) {
    let data = axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/todos`,
    });

    let taskData = await data;
    if (taskData.status === 200) {
      dispatch({
        type: types.TODO_LIST_DATA,
        item: taskData.data,
      });
      console.log(taskData);
    }
  };
}

//  Single Todo List

export function SingleTaskData(iD) {
  console.log(iD);
  return async function (dispatch) {
    let data = axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/todos/` + iD,
    });

    let response = await data;
    if (response.status === 200) {
      dispatch({
        type: types.TODO_SINGLE_LIST_DATA,
        item: response.data,
      });
      console.log(response.data);
    }
  };
}

// fetch user

export function ListOfAccountUsers() {
  return async function (dispatch) {
    let data = axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users`,
    });

    let response = await data;
    if (response.status === 200) {
      dispatch({
        type: types.ACCOUNT_LIST_USERS,
        item: response.data,
      });
      console.log(response);
    }
  };
}

// Delete User

export function DeleteUserFromList(id) {
  console.log(id);

  return async function (dispatch) {
    let data = axios({
      method: "delete",
      url: `https://jsonplaceholder.typicode.com/users/` + id,
    });

    let response = await data;
    if (response.status === 200) {
      dispatch({
        type: types.DELETE_USER_FROM_LIST,
        id,
      });
      console.log(id);
    }
  };
}

// LogIn User

export function PrivateLoginUser(item) {
  console.log(item);
  return async function (dispatch) {
    let user = axios({
      method: "post",
      data: {
        email: item.email,
        password: item.password,
      },
      url: `https://api.jsonapi.co/rest/v1/user/login`,
    });
    let response = await user;
    if (response.status === 200) {
      dispatch({
        type: types.SINGLE_USER_LOGIN,
        item: response.data.success,
      });
      console.log(response.data.success);
    }
  };
}
// Add New Product

export function AddProductInList(names) {
  console.log(names);
  return async function (dispatch) {
    let data = axios({
      method: "post",
      data: {
        name: names.name,
        username: names.username,
        email: names.email,
        website: names.website,
      },
      url: `https://jsonplaceholder.typicode.com/users`,
    });

    let response = await data;
    if (response.status === 201) {
      dispatch({
        type: types.ADD_NEW_PRODUCT_IN_LIST,
        item: response.data,
      });
      console.log(response);
    }
  };
}
