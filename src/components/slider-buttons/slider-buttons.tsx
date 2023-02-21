import './slider-buttons.css';

type SliderButtonsProps = {
  block: string;
};

function SliderButtons ({block}: SliderButtonsProps): JSX.Element {

  return (
    <div className={`${block}__buttons sl`}>
      <button className='sl__btn-prev' aria-label='Предыдущий слайд'>
        <svg width='17' height='8'>
          <use xlinkHref='img/sprite.svg#slide-prev'/>
        </svg>
      </button>
      <button className='sl__btn-next' aria-label='Следующий слайд'>
        <svg width='17' height='8'>
          <use xlinkHref='img/sprite.svg#slide-next'/>
        </svg>
      </button>
    </div>
  );
}

export default SliderButtons;
