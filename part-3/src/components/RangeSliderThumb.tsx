import { useState, useEffect } from 'react';

import styles from '../styles/RangeSliderThumb.module.css';

function RangeSliderThumb() {
    // react ecosystem variables

    const [isDragging, setIsDragging] = useState(false);

    // -------------------------------------

    // handle pointerDown event

    function handlePointerDown() {
        console.log('pointer down');
        setIsDragging(true);
    }

    // -------------------------------------

    // effect hook to run when isDragging changes

    useEffect(() => {
        if(!isDragging) return;
        
        function handlePointerMove() {
            console.log('pointer move');
        }

        function handlePointerUp() {
            console.log('pointer up');
            setIsDragging(false);
        }

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);

        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        }
    }, [isDragging]);

    // -------------------------------------

    return (
        <div className={styles['thumb']} onPointerDown={handlePointerDown}></div>
    )
}

export { RangeSliderThumb };
