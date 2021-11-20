import React, { useState } from 'react';
import chapters from '../chapters.json';
import AnimatedCursor from 'react-animated-cursor';
import {
  ProgressBar,
  Heading,
  Image,
  Chapters,
  MegaMenu,
  MenuItems,
  SideMenu,
} from './';

function App() {
  const [chapter, setChapter] = useState(1);
  const [open, setOpen] = useState(false);
  const target = React.createRef();

  return (
    <>
      {/*<ProgressBar target={target} />*/}
      <AnimatedCursor
        outerSize={16}
        innerSize={4}
        innerScale={0.8}
        outerScale={3}
        color='193, 11, 111'
      />
      <SideMenu
        chapters={chapters}
        chapter={chapter}
        handleOpen={(s) => setOpen(s)}
        handleChapter={(ch) => setChapter(ch)}
      />
      <div className='content' ref={target}>
        <Heading
          lines={['pražskáxpanelová', 'sídlištěxjako', 'místaxprotikladů']}
        />
        <Image nameClass='inverted panorama' path={'/bg3.png'} />
        {chapters.map((item, index) => (
          <Chapters
            item={item}
            next={chapters[index + 1]}
            previous={index > 0 ? chapters[index - 1] : chapters[8]}
          />
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
