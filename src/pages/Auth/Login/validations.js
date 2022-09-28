import { object, string } from "yup";

const validations = object({
  Email: string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Bu alanın doldurulması zorunludur."),
  Password: string().required("Bu alanın doldurulması zorunludur."),
});

export default validations;
