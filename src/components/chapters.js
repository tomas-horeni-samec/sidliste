import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { slugify } from '../utils/slugify';

export default function Chapters({ item }) {
  const file = slugify(item.type);
  console.log(file);
  const [chapter, setChapter] = useState('');

  useEffect(() => {
    import(`../chapters/${file}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setChapter(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <section id={file} className={`${item.dark ? 'bg-black' : ''}`}>
      <div className='kapitola'>
        <h3>{item.type}</h3>
        <h2>{item.title}</h2>
        <h4>{item.author}</h4>
        <div className='main-text'>
          <p>
            <img
              className={`${item.dark ? 'dropcap' : 'dropcap inverted'}`}
              src='images/pismena/p.png'
            />

            <Markdown>{chapter}</Markdown>
          </p>
        </div>
      </div>
      <div className='divider'></div>
    </section>
  );
}
