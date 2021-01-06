import * as types from "./constants";

const initialState = {
  productdata: [],
  singleProductData: [],
  userTaskData: [],
  singleToDo: [],
  accountUserList: [],
  isLoggedIn: false,
  loader: true,
};

export const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.FETCH_DATA: {
      return {
        ...state,
        productdata: action.item,
      };
    }
    case types.FETCH_SINGLE_DATA: {
      return {
        ...state,
        singleProductData: action.item,
      };
    }
    case types.TODO_LIST_DATA: {
      return {
        ...state,
        userTaskData: action.item,
      };
    }
    case types.TODO_SINGLE_LIST_DATA: {
      return {
        ...state,
        singleToDo: action.item,
      };
    }
    case types.ACCOUNT_LIST_USERS: {
      return {
        ...state,
        accountUserList: action.item,
        loader: false,
      };
    }
    case types.DELETE_USER_FROM_LIST: {
      return {
        ...state,
        accountUserList: state.accountUserList.filter(
          (accountUserList) => accountUserList.id !== action.id
        ),
      };
    }
    case types.ADD_NEW_PRODUCT_IN_LIST: {
      return {
        ...state,
        accountUserList: state.accountUserList.concat(action.item),
      };
    }
    case types.SINGLE_USER_LOGIN: {
      return {
        ...state,
        isLoggedIn: action.item,
      };
    }
    default: {
      return state;
    }
  }
};
