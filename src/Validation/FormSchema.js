import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters").required(),
  size: yup.string().required(),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  special: yup.string(),
});

export default formSchema;
