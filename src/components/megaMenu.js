import React from 'react';
import Image from './image';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

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
          <Link
            to={`/chapter/${slugify(text.type)}`}
            onClick={() => handleChapter(index)}
          >
            <h6>{text.author}</h6>
            <Image path={`/kapitoly/${text.image}`} />
            <h5>{text.title}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
}
