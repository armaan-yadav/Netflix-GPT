export const isEmailValid = (email) => {
  const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!checkEmail) {
    return "Invalid Email Address";
  }
  return null;
};
export const isPasswordValid = (password) => {
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!checkPassword) {
    return "Password be atleast 8 chrracters long having 1 special , 1 uppercase and 1 lowercase character and 1 number ";
  }
  return null;
};
