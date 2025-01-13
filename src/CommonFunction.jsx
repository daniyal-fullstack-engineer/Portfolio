import { ToastContainer, toast, Bounce } from "react-toastify";

const successMessges = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
const errorMessges = (msg) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const validateInput = (input) => {
  const { name, email, phone, subject, message } = input;

  // Helper function to check for empty or whitespace-only values
  const isEmptyOrWhitespace = (str) => !str || !str.trim();

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (isEmptyOrWhitespace(name)) {
    errorMessges("Name is required");
    return false;
  }

  if (isEmptyOrWhitespace(email)) {
    errorMessges("Email is required");
    return false;
  }

  if (!isValidEmail(email)) {
    errorMessges("Invalid email format");
    return false;
  }

  if (isEmptyOrWhitespace(phone)) {
    errorMessges("Phone is required ");
    return false;
  }

  if (isEmptyOrWhitespace(subject)) {
    errorMessges("Subject is required ");
    return false;
  }

  if (isEmptyOrWhitespace(message)) {
    errorMessges("Message is required");
    return false;
  }

  return true;
};

export { successMessges, errorMessges, validateInput };
