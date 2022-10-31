import { useState, useEffect, useRef } from 'react';

import { 
    clampNumberBetweenAMinAndMax, 
    getNumberAsPercentageOfAnother 
} from '../utils/helper-functions';

import { RangeSliderPopup } from './RangeSliderPopup';

import styles from '../styles/RangeSliderThumb.module.css';

interface RangeSliderThumbProps {
    left: number,
    updateLeft: (left: number) => void
}

function RangeSliderThumb({ left, updateLeft }: RangeSliderThumbProps) {
    // react ecosystem variables

    const [isDragging, setIsDragging] = useState(false);
    const thumbRef = useRef<HTMLDivElement | null>(null);

    // -------------------------------------

    // handle pointerDown event

    function handlePointerDown() {
        setIsDragging(true);
    }

    // -------------------------------------

    // effect hook to run when isDragging changes

    useEffect(() => {
        if(!isDragging) return;
        
        function handlePointerMove(e: PointerEvent) {
            const thumbElement = thumbRef.current as HTMLDivElement;
            const thumbParent = thumbElement.parentElement as HTMLDivElement;

            const thumbLeft = e.clientX - thumbParent.offsetLeft;
            const parentWidth = thumbParent.clientWidth;

            const thumbLeftAsPercentage = getNumberAsPercentageOfAnother(thumbLeft, parentWidth);
            const thumbLeftClamped = clampNumberBetweenAMinAndMax(thumbLeftAsPercentage, 0, 100);

            updateLeft(thumbLeftClamped);
        }

        function handlePointerUp() {
            setIsDragging(false);
        }

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);

        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        }
    }, [isDragging, updateLeft]);

    // -------------------------------------

    return (
        <div 
            className={styles['thumb']} 
            onPointerDown={handlePointerDown}
            ref={thumbRef}
            style={{ left: `${left}%` }}
        >
            <RangeSliderPopup value={left} isVisible={isDragging}/>
        </div>
    )
}

export { RangeSliderThumb };
