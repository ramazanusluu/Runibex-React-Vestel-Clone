import { object, string } from "yup";

const validations = object({
  Main: object({
    FirstName: string().required("Lütfen adınızı giriniz."),
    LastName: string().required("Lütfen soyadınızı giriniz."),
  }),
});

export default validations;
