import React, { useState, useEffect } from 'react';
import dictionary from '../dictionary.json';
import { Framed, Heading, Image, Kapitola } from '../components';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

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
    <>
      <section className={`${item.dark ? 'bg-white' : 'bg-black'}`}>
        <Heading
          text={item.type.toLowerCase()}
          color={`${item.dark ? 'black' : 'white'}`}
          background={`${item.dark ? 'white' : 'black'}`}
        />
      </section>
      <Image
        nameClass={`panorama ${item.dark ? 'inverted' : ''} bg-black`}
        path={'/bg3.png'}
      />
      <section
        id={file}
        className={`flex-center ${item.dark ? 'bg-black' : 'bg-grad-gray'}`}
        style={{ alignItems: 'center' }}
      >
        {previous && <Framed item={previous} dark={item.dark} right />}
        <Kapitola item={item} chapter={chapter} />
        {next && <Framed item={next} dark={item.dark} />}
      </section>
    </>
  );
}
