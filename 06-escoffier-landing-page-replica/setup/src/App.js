import React, { useState } from "react";
import { AiOutlineMenu, AiFillCheckCircle } from "react-icons/ai";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <main>
      {/* Mobile nav */}
      <nav className="main-menu-mobile">
        <div className="menu-top">
          <div className="logo">
            <img src="/img/logo.jpg" alt="Logo" />
          </div>
          <div className="menu-trigger">
            <button type="button" onClick={toggleMenu}>
              <AiOutlineMenu size={36} />
            </button>
          </div>
        </div>
        <div className={`menu-items ${mobileMenu ? "isActive" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/sign-in">Sign in</a>
            </li>
            <li>
              <a href="/sign-up">Create account</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Desktop nav */}
      <nav className="main-menu">
        <div className="logo">
          <img src="/img/logo.jpg" alt="Logo" />
        </div>

        <div className="menu-items">
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="menu-end">
          <a className="nav-link" href="#">
            Sign in
          </a>
          <button className="red-button">Create account</button>
        </div>
      </nav>
      <section className="welcome">
        <div className="container">
          <h1>Welcome to EScoffier Connect</h1>
          <p>
            A nationwide culinary and hospitality workforce partner and
            provider.
          </p>
          <div className="special-buttons">
            <button type="button" className="red-button">
              Grow My Workforce
            </button>
            <button type="button" className="red-button">
              Build My Career
            </button>
          </div>
        </div>
      </section>
      <section className="statistics">
        <h1>Education is the foundation for a healthy and dynamic industry</h1>
        <h3>
          Escoffier School of Culinary Arts is dedicated to education and
          life-long culinary careers. As a growing leader in the industry, we
          are able to impact positive change for employers and career seekers
          alike.
        </h3>
        <div className="stat-circles">
          <div className="stat-card">
            <div className="stat-card-logo">
              <img src="/img/largest-in-the-usa-badge 1.png" />
            </div>
            <div className="stat-card-content">
              Largest Culinary Brand in the USA
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-logo">
              <img src="/img/online-icon-2x 1.png" />
            </div>
            <div className="stat-card-content">
              Largest Culinary Brand in the USA
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-logo">
              <img src="/img/chef-hat-gold.png" />
            </div>
            <div className="stat-card-content">
              Largest Culinary Brand in the USA
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-logo">
              <img src="/img/fork 1.png" />
            </div>
            <div className="stat-card-content">
              Largest Culinary Brand in the USA
            </div>
          </div>
        </div>
      </section>

      <section className="industry-insights">
        <div className="container">
          <h1>culinary industry insights</h1>
          <div className="content">
            <div className="subtitle">
              Employment in culinary and hospitality occupation is projected to
              grow 20% by 2030, much faster than the average for all
              occupations.
            </div>
            <div className="special-boxes">
              <div className="box">
                <h4>2.3MIL</h4>
                <p>
                  estimated culinary job growth by 2030, more than any other
                  industry
                </p>
              </div>
              <div className="box">
                <h4>80%</h4>
                <p>
                  of open jobs prefer a candidate with a formal education but
                  only 40% of employees are formally educated
                </p>
              </div>
              <div className="box">
                <h4>85%</h4>
                <p>
                  of culinary professionals are likely to consider forther
                  training or certifications
                </p>
              </div>
              <div className="box">
                <h4>15-29%</h4>
                <p>
                  is the average increse in salary for educated culinary
                  employees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="connect">
        <div className="top-content">
          <div className="left-side">
            <h1>Introducing Escoffier Connect</h1>
            <p className="strong">
              We are tackling industry challenges head on with an innovative
              online career marketplace.
            </p>
            <p>
              Escoffier Connect is built on the premise that education is the
              foundation of a productive and sustained employee-employer
              relationship.
            </p>
          </div>
          <div className="right-side">
            <img src="/img/product-marketing-desktop.png" />
          </div>
        </div>
        <div className="bottom-content">
          <h4>WHAT CAN WE DO FOR YOU?</h4>
          <div className="offers">
            <div className="offer">
              <h6>CAREER SEEKERS</h6>
              <span className="offer-subtitle strong">
                Explore and obtain your professional and educational pathways.
              </span>
              <div className="offer-keys">
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>Recruit commited culinary and hospitality talent</p>
                </div>
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>Retain valued staff with upskilling opportunities</p>
                </div>
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>
                    Enhance your value as an employer through access to
                    education
                  </p>
                </div>
              </div>
              <span>
                <button type="button" className="red-button">
                  Explore partnership options
                </button>
              </span>
            </div>
            <div className="offer">
              <h6>EMPLOYERS</h6>
              <span className="offer-subtitle strong">
                Find career-focused talent aligned with your organization's
                mission, vision and goals.
              </span>
              <div className="offer-keys">
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>Recruit commited culinary and hospitality talent</p>
                </div>
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>Retain valued staff with upskilling opportunities</p>
                </div>
                <div className="key">
                  <div className="icon">
                    <AiFillCheckCircle size={26} />
                  </div>
                  <p>
                    Enhance your value as an employer through access to
                    education
                  </p>
                </div>
              </div>
              <span>
                <button type="button" className="red-button">
                  Explore partnership options
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="crown">
        <img src="/img/crown-vector.png" alt="" />
      </section>
      <section className="partners">
        <h4>Premier partners</h4>
        <div className="container">
          <div className="partner">
            <div className="partner-logo">
              <img
                src="/img/partner-logo-1.png"
                alt=""
              />
            </div>
            <div className="partner-pic">
              <img src="img/partner-pic-1.jpg" alt="" />
            </div>
          </div>

          <div className="partner">
            <div className="partner-logo">
              <img src="/img/partner-logo-2.png" alt="" />
            </div>
            <div className="partner-pic">
              <img src="/img/partner-pic-2.jpg" alt="" />
            </div>
          </div>

          <div className="partner">
            <div className="partner-logo">
              <img src="/img/partner-logo-3.png" alt="" />
            </div>
            <div className="partner-pic">
              <img src="/img/partner-pic-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div class="footer"></div>
    </main>
  );
}

export default App;
