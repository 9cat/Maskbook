import { BatchedMessageCenter } from '../../utils/messages'

type BuyTokenDialogEvent =
    | {
          open: true
      }
    | {
          open: false
      }

export interface MaskbookTransakMessages {
    buyTokenDialogUpdated: BuyTokenDialogEvent
}

export const TransakMessageCenter = new BatchedMessageCenter<MaskbookTransakMessages>(true, 'maskbook-transak-events')
