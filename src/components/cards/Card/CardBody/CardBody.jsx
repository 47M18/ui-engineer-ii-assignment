import React from 'react';

import styles from './CardBody.module.scss';
import toCurrency from '../../../../util/toCurrency';

export default function CardBody({ heading, subHeading, price }) {
  return (
    <div className={styles['card-body']}>
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>
      <div className={styles['card-price']}>
        <span>{toCurrency(price)}</span>
      </div>
    </div>
  );
}
