const numFormatter = (value) =>
  Number.isInteger(value)
    ? value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
    : value;

export default numFormatter;
