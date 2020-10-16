import TransakSDK, { TransakSDKConfig } from '@transak/transak-sdk'
import stringify from 'json-stable-stringify'
import { useMemo } from 'react'

export function useTransak(config?: Partial<TransakSDKConfig>) {
    const transak = useMemo(
        () =>
            new TransakSDK({
                apiKey: '',
                environment: 'STAGING',
                defaultCryptoCurrency: 'ETH',
                email: '',
                fiatCurrency: 'CNY',
                hostURL: '',
                redirectURL: '',
                themeColor: '',
                walletAddress: '',
                widgetWidth: '300px',
                widgetHeight: '300px',
                ...config,
            }),
        [stringify(config)],
    )

    return transak
}
