import { useState } from 'react';
import './help-note.css';

type SizeNoteProps = {
  block: string;
  noteText: string;
};

function HelpNote ({block, noteText}: SizeNoteProps): JSX.Element {
  const [sizeNoteState, setSizeNoteState] = useState<boolean>(false);

  return (
    <>
      <span
        className={`${block}__help help`}
        onMouseEnter={() => setSizeNoteState(!sizeNoteState)}
        onMouseLeave={() => setSizeNoteState(!sizeNoteState)}
      >
        ?
      </span>
      <span className={`help-note help-note--${!sizeNoteState ? 'hidden' : ''}`}>
        {noteText}
      </span>
    </>
  );
}

export default HelpNote;
