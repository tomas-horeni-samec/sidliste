import React, { useState } from 'react';
import chapters from '../chapters.json';
import dictionary from '../dictionary.json';

import { slugify } from '../utils/slugify';

import AnimatedCursor from 'react-animated-cursor';
import { Chapter, MegaMenu, Pojem, SideMenu } from './';
import { Switch, Route } from 'react-router-dom';
import Home from '../layouts/home';
import FullBook from '../layouts/fullBook';

function App() {
  const [chapter, setChapter] = useState(1);
  const [open, setOpen] = useState(false);
  const target = React.createRef();

  return (
    <>
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
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/fullbook' component={FullBook} exact />
          {chapters.map((item, index) => (
            <Route
              key={index}
              path={`/chapter/${slugify(item.type)}`}
              render={(props) => (
                <Chapter
                  item={item}
                  next={chapters[index + 1]}
                  previous={index > 0 ? chapters[index - 1] : chapters[8]}
                />
              )}
              exact
            />
          ))}
          {dictionary.map((item, index) => (
            <Route
              key={index}
              path={`/pojem/${slugify(item)}`}
              render={(props) => <Pojem item={item} />}
              exact
            />
          ))}
        </Switch>
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
