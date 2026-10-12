/** Convertit une période « MM/AAAA — MM/AAAA » (ou « Actuel ») en années décimales. */
export function parsePeriod(period: string, now = new Date()) {
  const [startToken, endToken = startToken] = period
    .split("—")
    .map((token) => token.trim());
  const ongoing = /actuel/i.test(endToken);

  return {
    start: toYear(startToken),
    end: ongoing
      ? now.getFullYear() + now.getMonth() / 12
      : toYear(endToken) + 1 / 12,
    ongoing,
  };
}

function toYear(token: string) {
  const [month, year] = token.split("/").map(Number);
  return year + (month - 1) / 12;
}
