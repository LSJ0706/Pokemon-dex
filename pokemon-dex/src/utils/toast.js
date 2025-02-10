import { toast } from "react-toastify";
export const toastAlert = ({ message }) => {
  return toast.success(`${message}`, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "light",
  });
};
