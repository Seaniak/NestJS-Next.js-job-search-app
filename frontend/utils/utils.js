export const getCurrencySymbol = countryCode => {
  const currencies = {
    gb: '£',
    us: '$',
    au: '$',
    ca: '$',
    sv: 'kr'
  };
  return currencies[countryCode]
};