import React from 'react';
import { Image, MenuItems } from '.';
import { HashLink as Link } from 'react-router-hash-link';

const SideMenu = ({ handleOpen, chapters, handleChapter, chapter }) => {
  return (
    <div class='side'>
      <div className='side-inner'>
        <div className='inner-top'>
          <Link to='/#kapitoly'>
            <div className='menu-image'>
              <Image nameClass={`'menu-image'`} path={`/kapitoly/01.png`} />
            </div>
          </Link>
          <div className='animated menu-box' onClick={() => handleOpen(true)}>
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
          handleChapter={handleChapter}
        />
      </div>
    </div>
  );
};
export default SideMenu;
