// WhatsApp Cloud API Pricing Data (Approximate rates in USD)
// These rates vary significantly by region. This is a representative sample.
// Ref: https://developers.facebook.com/docs/whatsapp/pricing

export const COUNTRIES = [
    { code: 'BD', name: 'Bangladesh', currency: 'BDT', flag: '🇧🇩' },
    { code: 'IN', name: 'India', currency: 'INR', flag: '🇮🇳' },
    { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
    { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
    { code: 'PK', name: 'Pakistan', currency: 'PKR', flag: '🇵🇰' },
    { code: 'BR', name: 'Brazil', currency: 'BRL', flag: '🇧🇷' },
    { code: 'ID', name: 'Indonesia', currency: 'IDR', flag: '🇮🇩' },
    { code: 'MX', name: 'Mexico', currency: 'MXN', flag: '🇲🇽' },
    { code: 'EG', name: 'Egypt', currency: 'EGP', flag: '🇪🇬' },
    { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', flag: '🇸🇦' },
    { code: 'TR', name: 'Turkey', currency: 'TRY', flag: '🇹🇷' },
    { code: 'DE', name: 'Germany', currency: 'EUR', flag: '🇩🇪' },
    { code: 'FR', name: 'France', currency: 'EUR', flag: '🇫🇷' },
    { code: 'RU', name: 'Russia', currency: 'RUB', flag: '🇷🇺' },
];

export const CONVERSATION_TYPES = [
    { id: 'business', name: 'Business Unified', description: 'Business-initiated messages (Marketing, Utility, Auth)' },
    { id: 'customer', name: 'Customer Unified', description: 'User-initiated messages (Service/Support)' },
];

export const CATEGORIES = [
    { id: 'marketing', name: 'Marketing', type: 'business' },
    { id: 'utility', name: 'Utility', type: 'business' },
    { id: 'authentication', name: 'Authentication', type: 'business' },
    { id: 'service', name: 'Service', type: 'customer' },
];

export const PRICING_DATA = {
    BD: { marketing: 0.0528, utility: 0.0245, authentication: 0.0165, service: 0.0264 },
    IN: { marketing: 0.0099, utility: 0.0042, authentication: 0.0035, service: 0.0040 },
    GB: { marketing: 0.0712, utility: 0.0381, authentication: 0.0344, service: 0.0381 },
    US: { marketing: 0.0200, utility: 0.0120, authentication: 0.0100, service: 0.0100 },
    PK: { marketing: 0.0450, utility: 0.0200, authentication: 0.0150, service: 0.0200 },
    BR: { marketing: 0.0625, utility: 0.0350, authentication: 0.0315, service: 0.0482 },
    ID: { marketing: 0.0415, utility: 0.0200, authentication: 0.0185, service: 0.0249 },
    MX: { marketing: 0.0434, utility: 0.0250, authentication: 0.0227, service: 0.0298 },
    EG: { marketing: 0.0625, utility: 0.0350, authentication: 0.0315, service: 0.0482 },
    SA: { marketing: 0.0425, utility: 0.0210, authentication: 0.0195, service: 0.0254 },
    TR: { marketing: 0.0625, utility: 0.0350, authentication: 0.0315, service: 0.0482 },
    DE: { marketing: 0.1254, utility: 0.0815, authentication: 0.0734, service: 0.0815 },
    FR: { marketing: 0.1425, utility: 0.0925, authentication: 0.0835, service: 0.0925 },
    RU: { marketing: 0.0570, utility: 0.0315, authentication: 0.0285, service: 0.0315 },
    DEFAULT: { marketing: 0.0500, utility: 0.0300, authentication: 0.0200, service: 0.0300 }
};

export const FREE_TIER_LIMIT = 1000; // Free service conversations per month
