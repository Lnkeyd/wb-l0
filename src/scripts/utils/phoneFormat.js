import { phoneRegExp } from "./regularExp.js";

export const checkValid = (input) => {
  if (input.length === 16) {
    return phoneRegExp.test(input);
  } else {
    return "";
  }
};

export function phoneFormat(phone) {
  const l = phone.length;
  switch (l) {
    case 1:
      phone = "+" + phone + " ";
      break;
    case 6:
      phone = phone + " ";
      break;
    case 10:
      phone = phone + " ";
      break;
    case 13:
      phone = phone + " ";
      break;
  }
  return phone;
}