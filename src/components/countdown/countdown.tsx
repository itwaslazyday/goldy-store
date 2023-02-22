import { useState } from 'react';
import './countdown.css';

type SizeNoteProps = {
  block: string;
};

function CountDown ({block}: SizeNoteProps): JSX.Element {
  const [sizeNoteState, setSizeNoteState] = useState<boolean>(false);

  return (
    <div className={`${block}__countdown countdown`}>
      <p className='countdown__field'>
        <span className='countdown__hours countdown__value'>12</span>
        <span>часов</span>
      </p>
      <span>:</span>
      <p className='countdown__field'>
        <span className='countdown__minutes countdown__value'>46</span>
        <span>минут</span>
      </p>
      <span>:</span>
      <p className='countdown__field'>
        <span className='countdown__seconds countdown__value'>51</span>
        <span>секунд</span>
      </p>
    </div>
  );
}

export default CountDown;
