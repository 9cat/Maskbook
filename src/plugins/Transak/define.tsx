import React from 'react'
import type { PluginConfig } from '../plugin'
import { PLUGIN_IDENTIFIER } from '../Wallet/constants'
import { TransakBuyTokenDialog } from './UI/TransakBuyTokenDialog'

export const TransakPluginDefine: PluginConfig = {
    pluginName: 'Transak',
    identifier: PLUGIN_IDENTIFIER,
    pageInspector() {
        return <TransakBuyTokenDialog />
    },
    dashboardInspector() {
        return <TransakBuyTokenDialog />
    },
}
