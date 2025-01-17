import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { slugify } from '../utils/slugify';
import { Framed, Image } from './';

export default function Chapters({ item, next, previous }) {
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
    <section
      id={file}
      className={`${item.dark ? 'bg-black flex-center' : 'flex-center'}`}
      style={{ alignItems: 'center' }}
    >
      {previous && <Framed item={previous} dark={item.dark} />}
      <div className='kapitola'>
        <h3>{item.type}</h3>
        <h2>{item.title}</h2>
        <h4>{item.author}</h4>
        <div className='main-text'>
          <p>
            <Image
              nameClass={`${item.dark ? 'dropcap' : 'dropcap inverted'}`}
              path={`/pismena/${item.text.charAt(0).toLowerCase()}.png`}
            />
            <Markdown>{chapter}</Markdown>
          </p>
        </div>
        <div className='divider'></div>
      </div>
      {next && <Framed item={next} dark={item.dark} />}
    </section>
  );
}
