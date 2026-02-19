import { CountryData } from './types';

export const COUNTRIES: CountryData[] = [
    {
        code: 'IN',
        name: 'India',
        currency: 'INR',
        rates: {
            marketing: 0.0106,
            utility: 0.0015,
            authentication: 0.0015,
            service: 0,
        }
    },
    {
        code: 'BR',
        name: 'Brazil',
        currency: 'BRL',
        rates: {
            marketing: 0.0625,
            utility: 0.0350,
            authentication: 0.0315,
            service: 0,
        }
    },
    {
        code: 'ID',
        name: 'Indonesia',
        currency: 'IDR',
        rates: {
            marketing: 0.0410,
            utility: 0.0200,
            authentication: 0.0200,
            service: 0,
        }
    },
    {
        code: 'BD',
        name: 'Bangladesh',
        currency: 'BDT',
        rates: {
            marketing: 0.0250,
            utility: 0.0120,
            authentication: 0.0150,
            service: 0,
        }
    },
    {
        code: 'MX',
        name: 'Mexico',
        currency: 'MXN',
        rates: {
            marketing: 0.0430,
            utility: 0.0085,
            authentication: 0.0400,
            service: 0,
        }
    },
    {
        code: 'GB',
        name: 'United Kingdom',
        currency: 'GBP',
        rates: {
            marketing: 0.0550,
            utility: 0.0320,
            authentication: 0.0350,
            service: 0,
        }
    },
    {
        code: 'US',
        name: 'United States',
        currency: 'USD',
        rates: {
            marketing: 0.0147,
            utility: 0.0075,
            authentication: 0.0135,
            service: 0,
        }
    },
    {
        code: 'DE',
        name: 'Germany',
        currency: 'EUR',
        rates: {
            marketing: 0.1131,
            utility: 0.0707,
            authentication: 0.0642,
            service: 0,
        }
    },
    {
        code: 'NG',
        name: 'Nigeria',
        currency: 'NGN',
        rates: {
            marketing: 0.0510,
            utility: 0.0066,
            authentication: 0.0284,
            service: 0,
        }
    },
    {
        code: 'PK',
        name: 'Pakistan',
        currency: 'PKR',
        rates: {
            marketing: 0.0240,
            utility: 0.0054,
            authentication: 0.0150,
            service: 0,
        }
    },
    {
        code: 'GLOBAL',
        name: 'Rest of World',
        currency: 'USD',
        rates: {
            marketing: 0.0500,
            utility: 0.0250,
            authentication: 0.0300,
            service: 0,
        }
    }
];

export const CATEGORIES = [
    { id: 'marketing', name: 'Marketing', description: 'Promotions, deals, and campaigns' },
    { id: 'utility', name: 'Utility', description: 'Order updates and account management' },
    { id: 'authentication', name: 'Authentication', description: 'One-time passwords and security' },
    { id: 'service', name: 'Service', description: 'Customer support conversations' },
];
