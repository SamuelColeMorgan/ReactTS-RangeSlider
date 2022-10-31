import styles from '../styles/RangeSliderProgress.module.css';

interface RangeSliderProgressProps {
    left: number,
    width: number
}

function RangeSliderProgress({ left, width }: RangeSliderProgressProps) {
    return (
        <div 
            className={styles['progress']}
            style={{ left: `${left}%`, width: `${width}%` }}
        ></div>
    )
}

export { RangeSliderProgress };
