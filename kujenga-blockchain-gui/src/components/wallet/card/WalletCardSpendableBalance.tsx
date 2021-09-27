import React from 'react';
import { Trans } from '@lingui/macro';
import FarmCard from '../../farm/card/FarmCard';
import useWallet from '../../../hooks/useWallet';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import { dogo_to_kujenga_string } from '../../../util/kujenga';

type Props = {
  wallet_id: number;
};

export default function WalletCardSpendableBalance(props: Props) {
  const { wallet_id } = props;

  const { wallet, loading } = useWallet(wallet_id);
  const currencyCode = useCurrencyCode();

  const value = wallet?.wallet_balance?.spendable_balance;

  return (
    <FarmCard
      loading={loading}
      valueColor="secondary"
      title={<Trans>Spendable Balance</Trans>}
      tooltip={
        <Trans>
          This is the amount of Kujenga that you can currently use to make
          transactions. It does not include pending farming rewards, pending
          incoming transactions, and Kujenga that you have just spent but is not
          yet in the blockchain.
        </Trans>
      }
      value={
        <>
          {dogo_to_kujenga_string(value)} {currencyCode}
        </>
      }
    />
  );
}
