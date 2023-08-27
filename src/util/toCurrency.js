const formatter = ({
  locale = 'en-US',
  currency = 'USD',
  trailingZeroDisplay = 'stripIfInteger',
} = {}) => new Intl.NumberFormat(locale, {
  style: 'currency',
  currency,
  trailingZeroDisplay,
});

const toCurrency = (amount, ...options) => formatter(...options).format(amount);

export default toCurrency;
