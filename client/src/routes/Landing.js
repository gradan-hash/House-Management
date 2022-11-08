import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { AuthStore } from "../context/Authcontext";

function Landing() {
  const { user } = AuthStore();
  return (
    <main id="main">
      <header>
        <div className="title"> Waka Waka Managers</div>

        <ul className="list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          {!user && (
            <>
              <Link to="/register">
                <li>Register</li>
              </Link>
              <Link to="/Login">
                <li>Log In</li>
              </Link>
            </>
          )}
        </ul>
      </header>

      <section className="description">
        <p>
          {" "}
          Waka Waka Managers helps you find Pocket Friendly Homes in Your
          Desired Location Countrywide.
        </p>
        <p>
          Waka Waka was established in 2019 and since has grown to be a big firm
          that You can trust to manage your home and find a roof over your head
          Don't Sweat it.
        </p>
        <p> What are you doing? Join and connect to Waka Waka Today.</p>
        <p>
          Finding a house is no easy feat. It usually takes a lot of time and a
          lot of effort to find that perfect house.<br></br> with the lack of
          available homes in some parts of the country, it can be very difficult
          to find that perfect house for a price that is within your budget.
          <br></br>Join us today to help you look for a house at an affordable
          price.
        </p>
      </section>

      <section className="finding-work">
        <p>
          Connecting You To an affordable <br></br>Lavish home of your choice.
        </p>

        <button className="btn-house">Find a house </button>
        <button className="btn-work"> Find Work </button>
      </section>

      <section className="trusted">
        <p>
          {" "}
          Waka Waka is trusted by many people all over Kenya. We have Patnered
          with Kenyas best to help you find a home.{" "}
        </p>
        <p>
          Trusted by: 1. Knight Frank Kenya 2. Villa Care Limited 3. Hass
          Consultants 4. Homes Universal
        </p>

        <p> Quality is our Middle Name</p>
      </section>

      <section className="values">
        <div className="workwith">
          <p className="first-p"> Why Work with Us</p>

          <p className="second-p"> &#10004; Trusted Work Partners</p>
          <p className="second-p"> &#10004; Long Term partners</p>
          <p className="second-p"> &#10004; Guiding You towards your Future</p>
        </div>

        <div className="workwith">
          <p className="first-p"> Motto </p>
          <p className="second-p">
            {" "}
            &#10004; Inspiring Africa Through Our Homes.{" "}
          </p>
        </div>

        <div className="workwith">
          <p className="first-p"> Our Mission </p>
          <p className="second-p">
            {" "}
            &#10004; Provide a lavish Home to our Customers at a Cost-Friendly
            Fee.
          </p>
          <p className="second-p">
            {" "}
            &#10004; Reaching Out to you To give you Maximum Comfort.{" "}
          </p>
          <p className="second-p"> &#10004; Making You smile at Your Home.</p>
        </div>

        <div className="workwith">
          <p className="first-p"> Our vision</p>
          <p className="second-p"> Win, Make Give and Do Good </p>
          <p className="second-p">
            {" "}
            We want to win at what we do. <br></br>We do all we can to help our
            customers, agents and employees build wealth.<br></br> We love to
            work with people who are passionate about working hard and also
            giving back to their communities.
          </p>
        </div>
      </section>

      <footer className="sign-off">
        <p className="tt">
          {" "}
          Bringing Like Minds Together, The Future is Here With Us.
        </p>

        <div className="off">
          <div className="inner-off">
            <p className="reach">Reach us on: </p>

            {/* when linking your component to an externl source eg. Youtube, use a href as below but when linking your components internally in react use link to tags */}

            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faYoutube} className="fa" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faGithub} className="fa" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="fa" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="fa" />
            </a>
          </div>

          <div className="Thanks">
            <p className="fw"> Developers </p>

            {/* when react is rendering a link tag it is rendered as an a tag */}

            <p>
              {" "}
              <Link to="/about"> &#9830; Wanjie Ryan </Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; Cornelius Mutuku</Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; Samuel Waithaka</Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; Kelvin Maina</Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; Cheryuiot Kipngetich</Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; Wycliffe Mutisya</Link>
            </p>
          </div>

          <div className="work">
            <p className="fw"> Find Work </p>

            <p> &#9830; As a Developer </p>
            <p> &#9830; As a Surveyer </p>
            <p> &#9830; As a House Manager </p>
            <p> &#9830; As a Consultant </p>
          </div>

          <div className="links">
            <p className="fw"> Useful Links</p>

            <p>
              {" "}
              <Link to="/"> &#9830; Home</Link>
            </p>
            <p>
              {" "}
              <Link to="/about"> &#9830; About</Link>
            </p>
            <p>
              {" "}
              <Link to="/contact"> &#9830; Contact</Link>
            </p>
            <p>
              {" "}
              <Link to="/register"> &#9830; Register</Link>
            </p>
            <p>
              {" "}
              <Link to="/login">&#9830; Login </Link>
            </p>
          </div>

          <div className="others">
            <p> Privacy Policy statement</p>
            <p> Terms and Conditions </p>
            <p>Locate Plots</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Landing;
