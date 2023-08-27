import React from 'react';

import styles from './CardImage.module.scss';

import bridgeImage from '../../../../../public/assets/wide_ggbridge_bg_teneax.jpg';
import tile from '../../../../../public/assets/darktiles_bg_gike55.jpg';
import placeholder from '../../../../../public/assets/placeholder.png';

export default function CardImage({ showBridge = false } = {}) {
  return (
    <div
      className={`${styles['card-image']} ${!showBridge && `${styles['with-placeholder']}`}`}
      style={{ backgroundImage: `url("${showBridge ? bridgeImage : tile}")` }}
      data-testid="card-image"
    >
      {!showBridge && (
        <img className={styles.placeholderImg} src={placeholder} alt="placeholder" />
      )}
    </div>
  );
}
