import { MessageCategory, CalculationResult } from './types';
import { COUNTRIES } from './whatsapp-data';

const CURRENCY_API_URL = 'https://api.frankfurter.dev/v1/latest';

export async function fetchExchangeRate(to: string): Promise<number> {
    if (to === 'USD') return 1;
    try {
        const res = await fetch(`${CURRENCY_API_URL}?from=USD&to=${to}`);
        if (!res.ok) throw new Error('Failed to fetch exchange rate');
        const data = await res.json();
        return data.rates[to] || 1;
    } catch (error) {
        console.error('Currency API Error:', error);
        return 1; // Fallback to 1
    }
}

export function calculateCost(
    countryCode: string,
    category: MessageCategory,
    count: number,
    exchangeRate: number
): CalculationResult {
    const country = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES.find(c => c.code === 'GLOBAL')!;
    const pricePerConversation = country.rates[category];
    const totalUSD = pricePerConversation * count;
    const totalLocal = totalUSD * exchangeRate;

    return {
        pricePerConversation,
        totalUSD,
        totalLocal,
        currencyCode: country.currency,
        exchangeRate
    };
}
