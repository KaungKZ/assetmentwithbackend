import SHA256 from 'crypto-js/sha256';

export const hashValue = async (value, isEmail = true) => {
  if (isEmail) {
    return SHA256(value.toLowerCase().trim()).toString();
  } else {
    return SHA256(value.replace(/\D/g, '')).toString();
  }
};
