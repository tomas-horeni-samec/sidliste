import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Heading, Image } from './';

export default function Dictionary() {
  const [chapter, setChapter] = useState('');

  useEffect(() => {
    import(`../chapters/dictionary.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setChapter(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Image nameClass={`panorama bg-black`} path={'/bg3.png'} />
      <section
        id='dictionary'
        className={`flex-center bg-white`}
        style={{ alignItems: 'center' }}
      >
        <div className='kapitola'>
          <div className='main-text'>
            <Heading
              text={'o autorkách a autorech'}
              background='white'
              color='black'
            />
            <p>
              <Markdown>{chapter}</Markdown>
            </p>
          </div>
          <div className='divider'></div>
        </div>
      </section>
    </>
  );
}
