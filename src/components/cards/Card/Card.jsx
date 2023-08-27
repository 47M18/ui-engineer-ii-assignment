import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

import Image from './CardImage/CardImage';
import Body from './CardBody/CardBody';

// /**
//  * Component that renders a card which contains an image, body and price at the bottom.
//  * @param {object} props - configuration object
//  * @param {string} props.heading - card heading
//  * @param {string} props.subHeading - card subheading
//  * @param {number} props.price - price to display at the bottom of the card
//  * @param {boolean} props.showBridge - whether to show the bridge image at the top
//  * @returns {HTMLDivElement}
//  */
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
