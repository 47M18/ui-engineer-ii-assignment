import React from 'react';

import styles from './CardPrice.module.scss';

import toCurrency from '../../../../util/toCurrency';

export default function CardPrice({ amount }) {
  return (
    <div className={styles['card-price']}>
      <span>{toCurrency(amount)}</span>
    </div>
  );
}
