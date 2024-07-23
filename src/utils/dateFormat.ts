const dateFormat = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  const today = year + '0' + month + date;
  return today;
};

export default dateFormat;
