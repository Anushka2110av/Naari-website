import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <span className="home-logo">Naari</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <Link
              to="/product-page"
              className="home-navlink button-clean button"
            >
              Product
            </Link>
            <button className="home-button button-clean button">Pricing</button>
            <Link
              to="/cycle-tracking"
              className="home-navlink1 button-clean button"
            >
              Cycle Tracking
            </Link>
            <button className="home-button1 button-clean button">Blog</button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image01"
              />
            </button>
          </div>
          <button className="button">Subscription</button>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button2">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo1">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">
            <span>
              Recycle Sanitary Waste with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text06">Naari</span>
          </h1>
          <p className="home-caption">
            One step towards a period-friendly journey
          </p>
        </div>
        <div className="home-buttons">
          <Link to="/product-page" className="home-view1 button">
            Recycle Pads Now
          </Link>
          <Link to="/product-page" className="home-learn button-clean button">
            Learn more
          </Link>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="image"
          src="/beige_minimalist_creative_agency_website_desktop_prototype-removebg-preview-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container3">
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                At Naari, we create a system where we collect menstrual waste,
                disinfect it and generate reusable products.
              </p>
              <p className="home-paragraph1">
                It&apos;s a place where women share their first-period stories,
                feelings, and emotions through blogs and Mood calendars.
              </p>
            </div>
            <div className="home-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content1">
                <h2 className="home-header1">
                  8 signs of &quot;pregnancy&quot; that are actually PMS
                </h2>
                <p className="home-description2">
                  Do you ever get the feeling Mother Nature is the ultimate
                  prankster? Case in point: many of the early signs of pregnancy
                  are the same as symptoms you might get when your period is on
                  its way.
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text09">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image02"
                />
              </button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="home-avatar3"
              />
            </div>
            <div className="home-main1">
              <div className="home-content2">
                <h2 className="home-header2">Concerned about Cramps?</h2>
                <p className="home-description3">
                  Lets explore some possible reasons for lower abdominal pain-
                  and what to do next.
                </p>
              </div>
              <button className="home-learn2 button">
                <span className="home-text10">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content3">
                <h2 className="home-header3">
                  <span className="home-text11">Your Daily Insights-</span>
                  <br></br>
                  <span>Track your Cycle</span>
                  <br></br>
                </h2>
                <p className="home-description4">
                  Understand your cycle and feel your best. If you want to know
                  more about your body and how your cycle can affect everything
                  from your mood to your energy levels, tracking your periods
                  and ovulation is a great place to start.
                </p>
              </div>
              <button className="home-learn3 button">
                <Link to="/cycle-tracking" className="home-navlink2">
                  Learn more
                </Link>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </button>
            </div>
            <img alt="image" src="/group%202262.svg" className="home-image05" />
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content4">
          <div className="home-main3">
            <div className="home-heading1">
              <h2 className="home-header4">
                Talk To Naari.Ai and get your questions answered!
              </h2>
              <p className="home-caption1">Confused? We are here for you.</p>
            </div>
            <button className="home-view2 button">Send a message</button>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image06" />
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header5">We have all the answers</h2>
        <div className="home-accordion"></div>
      </section>
      <footer className="home-footer">
        <div className="home-main4">
          <div className="home-branding">
            <div className="home-heading2">
              <h2 className="home-logo2">Character</h2>
              <p className="home-caption2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="home-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image07"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image08"
                />
              </a>
            </div>
          </div>
          <div className="home-links1">
            <div className="home-list">
              <h3 className="home-heading3">Site</h3>
              <div className="home-items">
                <button className="home-link02 button-clean button">
                  About
                </button>
                <button className="home-link03 button-clean button">
                  Collection
                </button>
                <button className="home-link04 button-clean button">
                  Roadmap
                </button>
                <button className="home-link05 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="home-list1">
              <h3 className="home-heading4">Company</h3>
              <div className="home-items1">
                <button className="home-link06 button-clean button">
                  Team
                </button>
                <button className="home-link07 button-clean button">
                  Press
                </button>
                <button className="home-link08 button-clean button">
                  Terms
                </button>
                <button className="home-link09 button-clean button">
                  Limitations
                </button>
                <button className="home-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="home-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image09"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image10"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
