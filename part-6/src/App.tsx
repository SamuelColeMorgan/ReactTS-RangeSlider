import { useCallback } from 'react';
import { RangeSlider } from './components/RangeSlider';

import styles from './styles/App.module.css';

function App() {
  // react ecosystem variables

  const rangeSliderCallback = useCallback((rangeStart: number, rangeEnd: number) => {
    console.log(rangeStart, rangeEnd);
  }, []);

  // -------------------------------------

  return (
    <div className={styles['flex-center']}>
      <RangeSlider min={500} max={1000} handleUpdate={rangeSliderCallback}/>
    </div>
  );
}

export default App;
