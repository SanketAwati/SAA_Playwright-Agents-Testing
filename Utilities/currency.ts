export function currencyToCents(value: string): number {
  const match = /^\$(\d+)\.(\d{2})$/.exec(value);
  if (!match) {
    throw new Error(`Invalid currency value: ${value}`);
  }

  return Number(match[1]) * 100 + Number(match[2]);
}

export function centsToCurrency(cents: number): string {
  if (!Number.isSafeInteger(cents) || cents < 0) {
    throw new RangeError(`Invalid amount in cents: ${cents}`);
  }

  return `$${(cents / 100).toFixed(2)}`;
}
