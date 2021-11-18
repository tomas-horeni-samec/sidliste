import React from 'react';

export default function MegaMenu({
  chapters,
  open,
  handleOpen,
  handleChapter,
}) {
  return (
    <div onClick={() => handleOpen(false)}>
      <div className={`${open && 'open'} menu-full flex-center-hor`}>
        {chapters.map((text, index) => (
          <a class='image colorful' onClick={() => handleChapter(index)}>
            <h6>{text.author}</h6>
            <img src={`images/kapitoly/${text.image}`} />
            <h5>{text.title}</h5>
          </a>
        ))}
      </div>
    </div>
  );
}
