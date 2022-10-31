import { useState } from 'react';

import { RangeSliderProgress } from './RangeSliderProgress';
import { RangeSliderThumb } from './RangeSliderThumb';

import styles from '../styles/RangeSlider.module.css';

function RangeSlider() {
    // react ecosystem variables

    const [thumbOneLeft, setThumbOneLeft] = useState(0);
    const [thumbTwoLeft, setThumbTwoLeft] = useState(0);

    // -------------------------------------


    return (
        <div className={styles['wrapper']}>
            <RangeSliderProgress
                left={Math.min(thumbOneLeft, thumbTwoLeft)}
                width={Math.abs(thumbOneLeft - thumbTwoLeft)}
            />
            <RangeSliderThumb left={thumbOneLeft} updateLeft={setThumbOneLeft}/>
            <RangeSliderThumb left={thumbTwoLeft} updateLeft={setThumbTwoLeft}/>
        </div>
    );
}

export { RangeSlider }