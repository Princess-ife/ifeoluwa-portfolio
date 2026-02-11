"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X, Twitter, Dribbble } from "lucide-react";
import Link from "next/link";
import { linkClick, toggleMenu } from "@/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageToggle, setPageToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";

    document.body.classList.remove("dark-skin", "light-skin");
    document.body.classList.add(`${theme}-skin`);

    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const menuItems = [
    { name: "Home", href: "#started-section" },
    { name: "Services", href: "#services-section" },
    { name: "Skills", href: "#skills-section" },
    { name: "Works", href: "#works-section" },
    { name: "Resume", href: "#resume-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "Pricing", href: "#pricing-section" },
    { name: "Blog", href: "#blog-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <Fragment>
      <header className="header">
        <div className="header__builder">
          <div className=" flex justify-between items-center">
            <div className="">
              {/* logo */}
              <div className="logo">
                <Link href="/">
                  <Image
                    width={50}
                    height={28}
                    src="/images/prifea.jpg"
                    className="rounded-full"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="pmenu hidden lg:flex justify-center items-center text-base font-jost text-black">
              {/* pc menu btn */}
              <ul className="flex gap-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="splitting-text-anim-2"
                      data-splitting="chars"
                      onClick={() => linkClick()}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              {/* switcher btn */}
              <Link
                href="#"
                className={`switcher-btn ${!isDarkMode ? "" : "active"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDarkMode(!isDarkMode);
                }}
              >
                {isDarkMode ? (
                  <Sun className="sw-after text-white" />
                ) : (
                  <Moon className="sw-before text-black" />
                )}
              </Link>

              {/* mobile menu btn */}
              <div className="inline-block md:inline-block lg:hidden">
                <Link
                  href="#"
                  className="menu-btn "
                  onClick={(e) => toggleMenu(e)}
                >
                  <span />
                  <span />
                </Link>
              </div>
              {/* Menu Full Overlay */}
              <div className="menu-full-overlay">
                <div className="menu-full-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* menu full */}
                        <div className="menu-full">
                          <ul className="menu-full">
                            {menuItems.map((item, index) => (
                              <li className="menu-item" key={index}>
                                <Link
                                  href={item.href}
                                  className="splitting-text-anim-2"
                                  data-splitting="chars"
                                  onClick={() => linkClick()}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}

                            <li
                              className={`menu-item menu-item-has-children has-children ${
                                pageToggle ? "opened" : "closed"
                              }`}
                            >
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                onClick={() => setPageToggle(!pageToggle)}
                              >
                                Pages
                                <i className="fas fa-chevron-down"></i>
                              </a>

                              <ul
                                className="sub-menu"
                                style={{
                                  marginTop: "1rem",
                                  display: `${pageToggle ? "block" : "none"}`,
                                }}
                              >
                                <li className="menu-item">
                                  <Link legacyBehavior href="/works-list">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Works (List)
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/works">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Works (Grid)
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/work-single">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Work Single Page
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/blog">
                                    <a
                                      className=" splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Blog
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/blog-single">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Single Post
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* social */}
                        <div className="menu-social-links">
                          <a
                            href="http://dribbble.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="dribbble"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                          <a
                            href="http://twitter.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            href="http://behance.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="behance"
                          >
                            <i className="fab fa-behance" />
                          </a>
                        </div>
                        <div className="v-line-block">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
