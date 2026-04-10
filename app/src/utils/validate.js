import { object, string, ref } from "yup";

export const registerSchema = object({
  firstname: string()
    .required("Họ là bắt buộc")
    .min(1, "Họ không được để trống"),
  lastname: string()
    .required("Tên là bắt buộc")
    .min(1, "Tên không được để trống"),
  username: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Tối thiểu là 2 kí tự")
    .max(20, "Tên người dùng tối đa 20 ký tự"),
  email: string().required("Email là bắt buộc").email("Sai định dạng email"),
  password: string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
  password_confirmation: string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([ref("password")], "Mật khẩu không khớp"),
});
export const loginSchema = object({
  email: string().required("Email là bắt buộc").email("Sai định dạng email"),
  password: string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu ít nhất 8 kí tự"),
});

export const checkoutSchema = object({
  receiverName: string()
    .required("Vui lòng nhập họ và tên")
    .min(2, "Họ và tên ít nhất 2 ký tự"),
  receiverPhone: string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
  email: string().required("Vui lòng nhập email").email("Sai định dạng email"),
  city: string().required("Vui lòng nhập tỉnh/thành phố"),
  district: string().required("Vui lòng nhập quận/huyện"),
  ward: string().required("Vui lòng nhập xã/phường/thị trấn"),
  address: string().optional(),
  note: string().optional(),
});
