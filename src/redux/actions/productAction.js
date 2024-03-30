import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    // let url = `https://my-json-server.typicode.com/sjh709/react-study-hnm-redux-toolkit/products?q=${searchQuery}`;
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    // let url = `https://my-json-server.typicode.com/sjh709/react-study-hnm-redux-toolkit/products/${id}`;
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getSingleProduct({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
