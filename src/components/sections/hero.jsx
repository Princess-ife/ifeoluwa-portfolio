"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="lui-section lui-section-hero lui-gradient-top"
      id="started-section"
    >
      <div className="container">
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div class="v-line-block">
              <span></span>
            </div>
            <div
              className="content scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    {" "}
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <h1
                  className="title splitting-text-anim-1 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>
                    <b>Iféoluwa</b> Oluwafemi{" "}
                  </span>
                </h1>
                <div className="label lui-subtitle">
                  {" "}
                  I am <strong>Data Scientist</strong>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>
                    From Nigeria, Lagos. I have rich experience in data science,
                    also I am good at python. I love to talk with you about our
                    unique.
                  </p>
                </div>
                <div className="social-links">
                  <Link href={"#"}>
                    <i aria-hidden="true" className="fab fa-twitter" />
                  </Link>
                  <Link target="_blank" rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-dribbble" />
                  </Link>
                  <Link target="_blank" rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-behance" />
                  </Link>
                </div>
              </div>
              <div className="bts">
                <Link
                  target="_blank"
                  href="https://drive.google.com/"
                  className="btn"
                >
                  <span>Download CV</span>
                </Link>
                <Link href="#skills-section" className="btn-lnk">
                  {" "}
                  My Skills{" "}
                </Link>
              </div>
            </div>
            <div
              className="slide scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Image
                decoding="async"
                src="/images/prifea.jpg"
                fill
                alt="<b>Ifé</b>"
              />
              <span className="circle circle-1" />
              <span
                className="circle img-1 z-10"
                style={{
                  backgroundImage: "url(/images/pat-1.png)",
                }}
              />
              <span
                className="circle img-2"
                style={{
                  backgroundImage: "url(/images/pat-2.png)",
                }}
              />
              <span
                className="circle img-3"
                style={{
                  backgroundImage: "url(/images/pat-2.png)",
                }}
              />
              <div className="info-list">
                <ul>
                  <li>
                    <span className="num">
                      12 <strong>+</strong>
                    </span>
                    <span className="value">
                      Years of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num">330</span>
                    <span className="value">
                      Completed <strong>Projects</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Data Scientist</span>
          </div>
        </div>
      </div>
    </section>
  );
}
