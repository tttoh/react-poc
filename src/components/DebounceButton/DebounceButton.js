import React from 'react';
import styles from './DebounceButton-styles';

const DebounceButton = value => (
    <button type="button" style={styles.container}>
        {value}
    </button>
);

export default DebounceButton;
