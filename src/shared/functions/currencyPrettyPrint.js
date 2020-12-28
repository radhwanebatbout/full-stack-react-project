function currencyPrettyPrint(cents) {
  const dinar = cents / 100;
  return dinar.toLocaleString("en-US", {
    style: "currency",
    currency: "TND"
  });
}

export default currencyPrettyPrint;
