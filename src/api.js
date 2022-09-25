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
