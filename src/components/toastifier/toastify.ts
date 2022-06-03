import { toast } from "react-toastify";

export const successToast = (message: string) => {
  const success = toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return success;
};

export const errorToast = (message: string) => {
  const error = toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return error;
};
