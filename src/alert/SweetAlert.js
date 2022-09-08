import Swal from "sweetalert2";

export const successAlert = (title) => {
  Swal.fire({
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const errorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title,
    text,
  });
};