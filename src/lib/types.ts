export type MessageCategory = 'marketing' | 'utility' | 'authentication' | 'service';

export interface PricingRate {
    marketing: number;
    utility: number;
    authentication: number;
    service: number; // usually 0
}

export interface CountryData {
    code: string;
    name: string;
    currency: string;
    rates: PricingRate;
}

export interface CalculationResult {
    pricePerConversation: number;
    totalUSD: number;
    totalLocal: number;
    currencyCode: string;
    exchangeRate: number;
}
