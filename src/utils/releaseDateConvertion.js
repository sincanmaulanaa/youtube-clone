const convertReleaseDateHandler = (dateString) => {
  const releaseDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate - releaseDate;
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} detik yang lalu`;
  } else if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} menit yang lalu`;
  } else if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours} jam yang lalu`;
  } else if (secondsDifference < 2592000) {
    const days = Math.floor(secondsDifference / 86400);
    return `${days} hari yang lalu`;
  } else if (secondsDifference < 31536000) {
    const months = Math.floor(secondsDifference / 2592000);
    return `${months} bulan yang lalu`;
  } else {
    const years = Math.floor(secondsDifference / 31536000);
    return `${years} tahun yang lalu`;
  }
};

export default convertReleaseDateHandler;
