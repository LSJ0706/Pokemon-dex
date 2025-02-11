import { toast } from "react-toastify";

// toastAlert 기본 옵션
const defaultOptions = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "light",
};

// toastAlert 로직
export const toastAlert = (message, type) => {
  switch (type) {
    // 에러 alert
    case "error":
      return toast.error(message, defaultOptions);
    // 성공 alert
    case "success":
      return toast.success(message, defaultOptions);
    // 경고 alert
    case "warn":
      return toast.warn(message, defaultOptions);
    default:
      return;
  }
};
