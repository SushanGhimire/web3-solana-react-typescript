import { toast } from "react-toastify";

export const successToast = (message: string) => {
  const success = toast.success(message, {
    position: "bottom-right",
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
    position: "bottom-right",
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

export const waitingToast = (message: string, time: number) => {
  const success = toast.success(message, {
    position: "bottom-right",
    autoClose: time,
    hideProgressBar: false,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
  return success;
};
