/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export class Splitter extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
    clone(): Splitter
    methods: {
        splitTransfer(
            toFirst: string,
            toSecond: string,
            valueFirst: number | string,
            valueSecond: number | string,
            tokenAddress: string,
        ): TransactionObject<void>
    }
    events: {
        allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
    }
}