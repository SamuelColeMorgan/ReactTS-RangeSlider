import styles from '../styles/RangeSliderPopup.module.css';

interface RangeSliderPopupProps {
    value: number,
    isVisible: boolean
}

function RangeSliderPopup({ value, isVisible }: RangeSliderPopupProps) {
    return (
        <div 
            className={styles['popup']}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div className={styles['value']}>{value}</div>
            <div className={styles['triangle']}></div>
        </div>
    );
}

export { RangeSliderPopup };
