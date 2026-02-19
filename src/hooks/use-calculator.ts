'use client';

import { useState, useEffect, useMemo } from 'react';
import { MessageCategory, CalculationResult } from '@/lib/types';
import { COUNTRIES } from '@/lib/whatsapp-data';
import { fetchExchangeRate, calculateCost } from '@/lib/pricing-engine';

export function useCalculator() {
    const [countryCode, setCountryCode] = useState('IN');
    const [category, setCategory] = useState<MessageCategory>('marketing');
    const [count, setCount] = useState(1000);
    const [exchangeRate, setExchangeRate] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isMonthly, setIsMonthly] = useState(true);

    const country = useMemo(() =>
        COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0],
        [countryCode]);

    useEffect(() => {
        async function updateRate() {
            setIsLoading(true);
            const rate = await fetchExchangeRate(country.currency);
            setExchangeRate(rate);
            setIsLoading(false);
        }
        updateRate();
    }, [country.currency]);

    const results = useMemo(() => {
        const multiplier = isMonthly ? 1 : 1 / 30;
        const adjustedCount = count * multiplier;
        return calculateCost(countryCode, category, count, exchangeRate);
    }, [countryCode, category, count, exchangeRate, isMonthly]);

    return {
        countryCode,
        setCountryCode,
        category,
        setCategory,
        count,
        setCount,
        isMonthly,
        setIsMonthly,
        results,
        isLoading,
        country,
        countries: COUNTRIES
    };
}
