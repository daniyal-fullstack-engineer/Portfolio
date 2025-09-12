// Updated to use our custom toast system
const successMessges = (msg) => {
  if (window.showToast) {
    window.showToast(msg, 'success', 4000);
  } else {
    console.log('Success:', msg);
  }
};

const errorMessges = (msg) => {
  if (window.showToast) {
    window.showToast(msg, 'error', 4000);
  } else {
    console.log('Error:', msg);
  }
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
