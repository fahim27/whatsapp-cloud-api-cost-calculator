const FALLBACK_RATES = {
    BDT: 110.50,
    INR: 83.20,
    GBP: 0.79,
    EUR: 0.92,
    PKR: 278.50,
    BRL: 4.95,
    IDR: 15600,
    MXN: 17.10,
    EGP: 30.90,
    SAR: 3.75,
    TRY: 31.20,
    RUB: 92.50,
    USD: 1,
};

export async function fetchExchangeRates() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!response.ok) throw new Error('Failed to fetch rates');
        const data = await response.json();
        return data.rates;
    } catch (error) {
        console.error('Currency API Error, using fallback rates:', error);
        return FALLBACK_RATES;
    }
}

export function formatCurrency(amount, currency = 'USD', rates = FALLBACK_RATES) {
    const rate = rates[currency] || 1;
    const converted = amount * rate;

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    }).format(converted);
}
