interface LocalizedPrice {
  symbol: string;
  amount: string;
  formatted: string;
  period: string;
}

export function getLocalizedPrice(): LocalizedPrice {
  const locale =
    typeof navigator !== 'undefined' ? navigator.language : 'en-GB';
  const timezone =
    typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : 'Europe/London';

  // US
  if (locale.startsWith('en-US') || timezone.startsWith('America/')) {
    return { symbol: '$', amount: '49.99', formatted: '$49.99', period: '/mo' };
  }

  // UK
  const isUK = locale.includes('GB') || timezone === 'Europe/London';
  if (isUK) {
    return { symbol: '£', amount: '49.99', formatted: '£49.99', period: '/mo' };
  }

  // Europe (non-UK)
  if (timezone.startsWith('Europe/')) {
    return { symbol: '€', amount: '49.99', formatted: '€49.99', period: '/mo' };
  }

  // Default GBP
  return { symbol: '£', amount: '49.99', formatted: '£49.99', period: '/mo' };
}
