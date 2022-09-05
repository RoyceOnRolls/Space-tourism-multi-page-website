import React from "react";

export default function Navbar() {
  return (
    <div>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <header className="primary-header flex">
        <div>
          <img
            src="./assets/shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            className="primary-navigation underline-indicators flex"
          >
            <li className="active">
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="index.html"
              >
                <span aria-hidden="true">00</span>Home
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="destination.html"
              >
                <span aria-hidden="true">01</span>Destination
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="crew.html"
              >
                <span aria-hidden="true">02</span>Crew
              </a>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase text-white letter-spacing-2"
                href="technology.html"
              >
                <span aria-hidden="true">03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
