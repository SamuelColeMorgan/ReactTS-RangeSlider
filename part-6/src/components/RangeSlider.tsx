import { useState, useEffect } from 'react';

import { RangeSliderProgress } from './RangeSliderProgress';
import { RangeSliderThumb } from './RangeSliderThumb';

import { getPercentageOfANumber } from '../utils/helper-functions';

import styles from '../styles/RangeSlider.module.css';

interface RangeSliderProps {
    min: number,
    max: number,
    handleUpdate: (rangeStart: number, rangeEnd: number) => void
}

function RangeSlider({ min, max, handleUpdate }: RangeSliderProps) {
    // react ecosystem variables

    const [thumbOneLeft, setThumbOneLeft] = useState(0);
    const [thumbTwoLeft, setThumbTwoLeft] = useState(0);

    // -------------------------------------

    // variables

    const thumbOneValue = getPercentageOfANumber(thumbOneLeft, max - min) + min;
    const thumbTwoValue = getPercentageOfANumber(thumbTwoLeft, max - min) + min;

    // -------------------------------------

    // effect hook to run the handleUpdate function

    useEffect(() => {
        const thumbOneValue = getPercentageOfANumber(thumbOneLeft, max - min) + min;
        const thumbTwoValue = getPercentageOfANumber(thumbTwoLeft, max - min) + min;

        const rangeStart = Math.min(thumbOneValue, thumbTwoValue);
        const rangeEnd = Math.max(thumbOneValue, thumbTwoValue);

        handleUpdate(rangeStart, rangeEnd);
    }, [thumbOneLeft, thumbTwoLeft, min, max, handleUpdate]);

    // -------------------------------------

    if(min >= max) {
        throw new Error('The min prop must be less than the max prop in RangeSlider');
    }

    return (
        <div className={styles['wrapper']}>
            <RangeSliderProgress
                left={Math.min(thumbOneLeft, thumbTwoLeft)}
                width={Math.abs(thumbOneLeft - thumbTwoLeft)}
            />
            <RangeSliderThumb left={thumbOneLeft} value={thumbOneValue} updateLeft={setThumbOneLeft}/>
            <RangeSliderThumb left={thumbTwoLeft} value={thumbTwoValue} updateLeft={setThumbTwoLeft}/>
        </div>
    );
}

export { RangeSlider }