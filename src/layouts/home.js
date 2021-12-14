import React from 'react';
import chapters from '../chapters.json';
import dictionary from '../dictionary.json';
import { Link } from 'react-router-dom';
import { Heading, Image } from '../components';
import { slugify } from '../utils/slugify';

export default function Home() {
  return (
    <>
      <section className='bg-white center'>
        <Heading
          text={'pražská panelová sídliště jako místa protikladů'}
          color='black'
          background='white'
        />
        <br />
        <br />
        <a href='mailto:prodej@soc.cas.cz'>
          <button>Objednat zdarma</button>
        </a>
        <Link to='/#kapitoly'>
          <button>Text</button>
        </Link>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={'/bg3.png'} />
      <section className='bg-black'>
        <div className='kapitola center'>
          <Heading text={'o projektu'} color='white' background='black' />
          <div className='main-text'>
            <p>
              Pražská panelová sídliště jsou místa, kde se protíná mnoho
              protikladů: na jednu stranu jsou ceněna pro to, že zajistila
              praktické a relativně málo nákladné bydlení pro velký počet
              obyvatel, na druhou stranu byla často kritizována pro mnoho
              dílčích nedostatků i pro svůj celkový urbanistický koncept. Pro
              své obyvatele se mohou zdát jako místa, která se příliš nemění,
              místa, která jsou v jistém smyslu známá a obyčejná.
            </p>
          </div>
          <div className='divider center'></div>
        </div>
      </section>
      <Image nameClass={`panorama bg-black`} path={'/bg3.png'} />
      <section className='bg-white' id='kapitoly'>
        <div className='kapitola'>
          <Heading text={'obsah publikace'} color='black' background='white' />
          <div className='divider center'></div>
        </div>
        <div className={`menu-full flex-center-hor static`}>
          {chapters.map((text) => (
            <Link to={`/chapter/${slugify(text.type)}`}>
              <h6>{text.author}</h6>
              <Image path={`/kapitoly/${text.image}`} />
              <h5>{text.title}</h5>
            </Link>
          ))}
        </div>
        <div className='divider center'></div>
        <div className='kapitola center'>
          <h2>užitečné pojmy</h2>
          {dictionary.map((word) => (
            <Link to={`/pojem/${slugify(word)}`}>
              <button>{word}</button>
            </Link>
          ))}
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={'/bg3.png'} />
      <section className='bg-black'>
        <div className='kapitola center'>
          <Heading
            text={'video a fotodokumentace'}
            color='white'
            background='black'
          />

          <div className='divider center'></div>
        </div>
      </section>
    </>
  );
}
