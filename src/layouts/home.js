import React from "react";
import chapters from "../chapters.json";
import dictionary from "../dictionary.json";
import { Link } from "react-router-dom";
import { Heading, Image } from "../components";
import { slugify } from "../utils/slugify";

export default function Home() {
  return (
    <>
      <section className="bg-white center">
        <div style={{ padding: "80px 160px" }}>
          <Heading
            text={"pražská panelová sídliště jako místa protikladů"}
            color="black"
            background="white"
          />
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} />
      <section className="bg-black">
        <div className="kapitola center">
          <Heading text={"o projektu"} color="white" background="black" />
        </div>
        <div className="divider center"></div>
        <div className="flex-center" style={{ flexWrap: "wrap" }}>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ix2svQ1M_sU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jh_ukt8g53c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ padding: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jh_ukt8g53c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <Image nameClass={`panorama bg-black`} path={"/bg3.png"} />
      <section className="bg-white" id="kapitoly">
        <div className="kapitola">
          <Heading text={"obsah publikace"} color="black" background="white" />
          <div className="divider center"></div>
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
        <div className="divider center"></div>
        <div className="kapitola center">
          <h2>Slovník pojmů</h2>
          {dictionary.map((word) => (
            <Link to={`/pojem/${slugify(word)}`}>
              <button>{word}</button>
            </Link>
          ))}
        </div>
      </section>
      <Image nameClass={`panorama inverted bg-black`} path={"/bg3.png"} />
      <section className="bg-black">
        <div className="kapitola center"></div>
      </section>
    </>
  );
}
