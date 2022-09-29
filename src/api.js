// Tüm api call işlemleri burda gerçekleştirilecek.
import axios from "axios";

export const fetchCategoryList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/mbProduct/CategoryList`
  );
  return data;
};

export const fetchSubCategories = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/mbProduct/ProductList?CategoryID=${id}`
  );
  return data;
};

export const fetchProducts = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/mbProduct/ProductList?CategoryID=${id}`
  );
  return data;
};

export const fetchProductDetail = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/mbProduct/ProductDetail?productId=${id}`
  );
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `https://www.vestel.com.tr/mobile2/mbUser/RegisterUser/?`,
    input
  );
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.get(
    "https://www.vestel.com.tr/mobile2/mbUser/Logout"
  );
  return data;
};
