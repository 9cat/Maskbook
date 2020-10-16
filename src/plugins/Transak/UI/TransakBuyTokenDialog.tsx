import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { useStylesExtends } from '../../../components/custom-ui-helper'
import { useRemoteControlledDialog } from '../../../utils/hooks/useRemoteControlledDialog'
import { useI18N } from '../../../utils/i18n-next-ui'
import { MaskbookTransakMessages, TransakMessageCenter } from '../messages'
import { Transak } from './Transak'

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            width: '370px !important',
        },
    }),
)

export interface TransakBuyTokenDialogProps extends withClasses<KeysInferFromUseStyles<typeof useStyles> | 'root'> {}

export function TransakBuyTokenDialog(props: TransakBuyTokenDialogProps) {
    const { t } = useI18N()
    const classes = useStylesExtends(useStyles(), props)

    //#region remote controlled buy token dialog
    const [open] = useRemoteControlledDialog<MaskbookTransakMessages, 'buyTokenDialogUpdated'>(
        TransakMessageCenter,
        'buyTokenDialogUpdated',
    )
    //#endregion

    return (
        <div className={classes.root}>
            <Transak open={open} />
        </div>
    )
}
