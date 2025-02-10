import { toast } from "react-toastify";
export const toastAlret = (message) => {
  return toast.success(`${message}`, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "light",
  });
};
