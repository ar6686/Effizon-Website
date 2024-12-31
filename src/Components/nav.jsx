import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="header" id="header">
          <nav className="navbar container">

            <Link to="/" className="brand">
              <img src="/assets/Offical logo.webp" alt="logo" width="60" />
              <h3>Effizon</h3>
            </Link>

            <div className="navigation">
              <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
              </label>
              <div className="navigation__background">&nbsp;</div>
              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <Link to="/" className="navigation__link" >&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;</Link>

                  </li>
                  <li className="navigation__item">
                    <Link to="/work" className="navigation__link" >&nbsp;&nbsp;&nbsp;Work&nbsp;&nbsp;&nbsp;</Link>
                  </li>
                  <li className="navigation__item">
                    <Link to="/services" className="navigation__link" >&nbsp;&nbsp;&nbsp;Services&nbsp;&nbsp;&nbsp;</Link>
                  </li>

                  <li className="navigation__item">
                    <Link to="/about" className="navigation__link" >&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;</Link>

                  </li>
                  <li className="navigation__item">
                    <Link to="/contact" className="navigation__link" >&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;</Link>
                  </li>
                  <li className="address">
                    <div className="menuaddress">
                      <Link to="/contact" >Message</Link>
                      <p>+923446686206</p>
                      <p>gothenburg sweden</p>

                    </div>
                  </li>
                </ul>
                <div></div>
              </nav>
            </div>
          </nav>
        </header>
  )
}

export default Nav