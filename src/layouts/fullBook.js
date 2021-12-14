import React from 'react';
import chapters from '../chapters.json';
import { Heading, Chapters } from '../components/';
import Dictionary from '../components/dictonary.js';

export default function FullBook() {
  return (
    <>
      <section className='bg-white'>
        <Heading
          text={'pražská panelová sídliště jako místa protikladů'}
          color='black'
          background='white'
        />
      </section>

      {chapters.map((item, index) => (
        <Chapters
          item={item}
          next={chapters[index + 1]}
          previous={index > 0 ? chapters[index - 1] : chapters[8]}
          key={index}
        />
      ))}

      <Dictionary />
    </>
  );
}
