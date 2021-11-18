import React, { useState } from 'react';
import chapters from '../chapters.json';
import AnimatedCursor from 'react-animated-cursor';
import { ProgressBar, Chapters, MegaMenu, MenuItems } from './';

function App() {
  const [chapter, setChapter] = useState(1);
  const [open, setOpen] = useState(false);
  const target = React.createRef();

  return (
    <>
      <ProgressBar target={target} />
      <AnimatedCursor
        outerSize={16}
        innerSize={4}
        innerScale={0.8}
        outerScale={3}
        color='193, 11, 111'
      />
      <div class='side'>
        <div className='side-inner'>
          <div>
            <div className='animated menu-box' onClick={() => setOpen(true)}>
              <div className='line short'></div>
              <div className='line supershort'></div>
              <div className='line long'></div>
            </div>
            <div className='vertical'>
              <div
                className='page-name visible'
                dangerouslySetInnerHTML={{ __html: chapters[chapter].name }}
              ></div>
            </div>
          </div>

          <MenuItems
            chapters={chapters}
            chapter={chapter}
            handleChapter={(ch) => setChapter(ch)}
          />
        </div>
      </div>
      <div className='content' ref={target}>
        <section className='bg-black'>
          <img src='images/panorama.png' />
          <h1>
            <span className='purple bolded'>Pražská panelová sídliště </span>
            jako místa protikladů
          </h1>
        </section>
        <img src='images/panorama.png' />
        {chapters.map((item) => (
          <Chapters item={item} />
        ))}
      </div>

      <MegaMenu
        chapters={chapters}
        handleOpen={() => setOpen(false)}
        open={open}
        handleChapter={(ch) => setChapter(ch)}
      />
    </>
  );
}

export default App;
