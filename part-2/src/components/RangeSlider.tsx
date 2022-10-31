import { RangeSliderProgress } from './RangeSliderProgress';
import { RangeSliderThumb } from './RangeSliderThumb';

import styles from '../styles/RangeSlider.module.css';

function RangeSlider() {
    return (
        <div className={styles['wrapper']}>
            <RangeSliderProgress/>
            <RangeSliderThumb/>
        </div>
    );
}

export { RangeSlider }