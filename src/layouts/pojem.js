import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import dictionary from "../dictionary.json";
import chapters from "../chapters.json";

import { slugify } from "../utils/slugify";
import { Link } from "react-router-dom";
import { Heading, Image } from "../components";

export default function Chapters({ item }) {
  const file = slugify(item);
  console.log(file);
  const [chapter, setChapter] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    import(`../dictionary/${file}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setChapter(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <section className="bg-black">
        <div className="kapitola center">
          <Heading text={item.toLowerCase()} color="white" background="black" />
        </div>
      </section>
      <Image nameClass={`panorama bg-black`} path={"/bg3.png"} />
      <section id={file} className={`bg-grad-gray`}>
        <div className="kapitola">
          <div className="main-text">
            <p>
              <Markdown>{chapter}</Markdown>
            </p>
          </div>
          <div className="divider"></div>
          <h2>Související kapitoly</h2>
          <div
            className={`menu-full flex-center-hor static`}
            style={{ justifyContent: "flex-start", margin: "auto -16px" }}
          >
            {chapters.map(
              (item, index) =>
                index < 3 && (
                  <Link to={`/chapter/${slugify(item.type)}`} key={index}>
                    <h6>{item.author}</h6>
                    <Image path={`/kapitoly/${item.image}`} />
                    <h5>{item.title}</h5>
                  </Link>
                )
            )}
          </div>

          <div className="divider"></div>
          <h2>Další pojmy</h2>
          <div style={{ margin: "auto -6px" }}>
            {dictionary.map((word) => (
              <Link to={`/pojem/${slugify(word)}`}>
                <button>{word}</button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
