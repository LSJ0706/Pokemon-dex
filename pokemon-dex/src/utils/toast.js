import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "light",
};
export const toastAlert = (message, type) => {
  switch (type) {
    case "error":
      return toast.error(message, defaultOptions);
    case "success":
      return toast.success(message, defaultOptions);
    case "warn":
      return toast.warn(message, defaultOptions);
    default:
      console.log("defalut");
      return;
  }
};
