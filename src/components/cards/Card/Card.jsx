import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

import Image from './CardImage/CardImage';
import Body from './CardBody/CardBody';

export default function Card({
  heading,
  subHeading,
  price,
  showBridge,
} = {}) {
  return (
    <div className={styles.card}>
      <Image showBridge={showBridge} />
      <Body heading={heading} subHeading={subHeading} price={price} />
    </div>
  );
}

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  showBridge: PropTypes.bool,
};

Card.defaultProps = {
  showBridge: false,
};
