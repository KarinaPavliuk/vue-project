import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com/products";

export const getAllProducts = async () => {
  try {
    const response = await axios(``);
    console.log(response);
    // return response;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProduct = async (productId) => {
  const response = await axios(`/${productId}`);
  console.log(response);
  return response;
};

export const searchProducts = async (productName) => {
  const response = await axios(`/search?q=${productName}`);
  console.log(response);
  return response;
};

export const limitAndSkipProducts = async (
  { limit },
  { skip },
  { typeOfInformation }
) => {
  const response = await axios(
    `?limit=${limit}&skip=${skip}&select=${typeOfInformation}`
  );
  console.log(response);
  return response;
};

export const getAllCategories = async () => {
  const response = await axios(`/categories`);
  console.log(response);
  return response;
};

export const getProductsOfCategory = async (category) => {
  const response = await axios(`/category/${category}`);
  console.log(response);
  return response;
};

export const addNewProduct = async (newProduct) => {
  //newProduct must be object
  const response = await axios.post(`/add`, newProduct, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response;
};

export const updateProduct = async (productId, updateProduct) => {
  //updateProduct must be object
  const response = await axios.put(`/${productId}`, updateProduct, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  return response;
};

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`/${productId}`);
  console.log(response);
  return response;
};
