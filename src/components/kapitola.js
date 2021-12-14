import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Image } from './';
import { Link } from 'react-router-dom';
import dictionary from '../dictionary.json';
import authors from '../authors.json';
import { slugify } from '../utils/slugify';

export default function Kapitola({ item, chapter }) {
  return (
    <div className='kapitola'>
      <h3>{item.type}</h3>
      <h2>{item.title}</h2>
      <h4>
        {item.author.map((author, index) => (
          <span>
            {author}
            {index + 1 !== item.author.length && ', '}{' '}
          </span>
        ))}
      </h4>
      <div className='main-text'>
        <p>
          <Image
            nameClass={`dropcap ${item.dark ? '' : 'inverted'}`}
            path={`/pismena/${item.text.charAt(0).toLowerCase()}.png`}
          />
          <Markdown>{chapter}</Markdown>
        </p>
      </div>
      <div className='divider'></div>

      {item.author.map((author) => {
        const person = authors.find((person) => person.name === author);
        console.log(person);
        return (
          <p>
            <i>{person.name} </i>
            {person.text}
          </p>
        );
      })}
      <div className='divider'></div>
      <h2>Související pojmy</h2>
      <div style={{ margin: 'auto -6px' }}>
        {dictionary.map((word) => (
          <Link to={`/pojem/${slugify(word)}`}>
            <button>{word}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
