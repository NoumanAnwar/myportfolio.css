"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <Image
            src="/mypic.jpg"
            height={250}
            width={300}
            alt="portfolio-image"
            className="portfolio-image bg-yellow-300"
            
          ></Image>

        </div>
        <div className="hero-text-content">
          <p>HEY THERE!</p>
          <h1 className="hero-h1">I AM Muhammad Nouman</h1>
          <p>
            Welcome to my portfolio! I am a passionate frontend developer
            dedicated to building responsive and visually stunning websites.
            Explore my work and skills, and lets create something amazing
            together.
          </p>
          <div className="buttons">
          <button className="hero-btn1">
            <Link href="/contact" className="hero-contact">Contact Me</Link>
            </button>
          <button className="hero-btn2">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
