import React, { useEffect } from 'react'
import { useTransak } from '../hooks/useTransak'

export interface TransakProps {
    open: boolean
}

export function Transak(props: TransakProps) {
    const { open } = props

    const sdk = useTransak({
        apiKey: '4fcd6904-706b-4aff-bd9d-77422813bbb7', // Your API Key
        environment: 'STAGING', // STAGING/PRODUCTION
        defaultCryptoCurrency: 'ETH',
        walletAddress: '', // Your customer wallet address
        themeColor: '000000', // App theme color in hex
        fiatCurrency: '', // INR/GBP
        redirectURL: '',
        hostURL: window.location.origin,
        widgetHeight: '550px',
        widgetWidth: '100%',
    })

    useEffect(() => {
        if (open) sdk.init()
        else sdk.close()
    }, [open, sdk])
    return null
}
