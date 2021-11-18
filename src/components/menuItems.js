import React from 'react';
import { Link } from 'react-scroll';
import { slugify } from '../utils/slugify';

export default function MenuItems({ chapters, chapter, handleChapter }) {
  return (
    <div className='side-bottom'>
      {chapters.map((text, index) => (
        <Link to={slugify(text.type)} smooth={true} duration={1000}>
          <div
            className={`side-item flex-center-hor ${
              chapter === index ? 'animation' : ''
            }`}
            onClick={() => handleChapter(index)}
          >
            <div className='menu-image'>
              <img
                className={`${text.dark && 'inverted'}`}
                src={`images/kapitoly/${text.image}`}
              />
            </div>
            <div className='dot dot-outside'>
              <div className='dot dot-inside'></div>
            </div>
            <div className='hidden'>
              <div className='hidden-in'>
                <p dangerouslySetInnerHTML={{ __html: text.name }}></p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
