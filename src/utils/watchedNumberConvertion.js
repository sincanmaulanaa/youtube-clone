const convertWatchedNumberHandler = (number) => {
  if (number >= 1000000) {
    const formatted = (number / 1000000).toFixed(1) + ' jt';
    return formatted;
  } else if (number >= 1000 && number < 1000000) {
    const formatted = (number / 1000).toFixed(1) + ' rb';
    return formatted;
  } else {
    const parts = number.toString().split('.');
    if (parts.length === 2) {
      const integerPart = parts[0];
      return `${integerPart}`;
    } else {
      return number.toString();
    }
  }
};

export default convertWatchedNumberHandler;
