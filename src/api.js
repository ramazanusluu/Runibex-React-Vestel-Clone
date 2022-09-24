// Tüm api call işlemleri burda gerçekleştirilecek.
import axios from "axios";

export const fetchCategoryList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/mbProduct/CategoryList`
  );
  return data;
};
