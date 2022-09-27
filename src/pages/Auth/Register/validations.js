import { object, string, ref } from "yup";

const validations = object({
  name: string().required("Lütfen adınızı giriniz."),
  lastname: string().required("Lütfen soyadınızı giriniz."),
  email: string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Lütfen e-posta adresinizi giriniz."),
  phone: string()
    .min(5, "Telefon numaranız 10 karakter olmalıdır.")
    .required("Cep telefonu numarasını yazmalısınız."),
  date: string().required("Doğum tarihini girmelisiniz."),
  password: string()
    .min(8, "Şifreniz 8 karakterden oluşmalıdır.")
    .required("Lütfen şifrenizi giriniz."),
  passwordConfirm: string()
    .oneOf([ref("password")], "Girilen şifreler aynı değil!")
    .required("Lütfen şifrenizi tekrar giriniz"),
});

export default validations;
