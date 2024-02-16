import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './blog-page.css'

const BlogPage = (props) => {
  return (
    <div className="blog-page-container">
      <Helmet>
        <title>blog-page - Character NFT template</title>
        <meta
          property="og:title"
          content="blog-page - Character NFT template"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="blog-page-navbar">
        <span className="blog-page-logo">Naari</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="blog-page-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="blog-page-nav"
          >
            <Link
              to="/product-page"
              className="blog-page-navlink button-clean button"
            >
              Product
            </Link>
            <button className="blog-page-button button-clean button">
              Pricing
            </button>
            <Link
              to="/cycle-tracking"
              className="blog-page-navlink1 button-clean button"
            >
              Cycle Tracking
            </Link>
            <button className="blog-page-button1 button-clean button">
              Blog
            </button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="blog-page-btn-group">
          <div className="blog-page-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="blog-page-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="blog-page-image01"
              />
            </button>
          </div>
          <button className="button">Subscription</button>
        </div>
        <div data-thq="thq-burger-menu" className="blog-page-burger-menu">
          <button className="button blog-page-button2">
            <svg viewBox="0 0 1024 1024" className="blog-page-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="blog-page-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="blog-page-nav1"
          >
            <div className="blog-page-container1">
              <span className="blog-page-logo1">Character</span>
              <div data-thq="thq-close-menu" className="blog-page-menu-close">
                <svg viewBox="0 0 1024 1024" className="blog-page-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="blog-page-nav2"
            >
              <span className="blog-page-text">About</span>
              <span className="blog-page-text01">Features</span>
              <span className="blog-page-text02">Pricing</span>
              <span className="blog-page-text03">Team</span>
              <span className="blog-page-text04">Blog</span>
            </nav>
            <div className="blog-page-container2">
              <button className="blog-page-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="blog-page-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="blog-page-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="blog-page-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="blog-page-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="blog-page-hero">
        <div className="blog-page-heading">
          <h2 className="blog-page-header">
            <span>
              All time best
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="blog-page-text06">period stories</span>
          </h2>
          <p className="blog-page-caption">
            One step towards a period-friendly journey
          </p>
        </div>
        <div className="blog-page-buttons">
          <Link to="/product-page" className="blog-page-view1 button">
            Recycle Pads Now
          </Link>
          <Link
            to="/product-page"
            className="blog-page-learn button-clean button"
          >
            Learn more
          </Link>
        </div>
      </section>
      <section className="blog-page-description">
        <img
          alt="image"
          src="/beige_minimalist_creative_agency_website_desktop_prototype-removebg-preview-1500w.png"
          className="blog-page-divider-image"
        />
        <div className="blog-page-container3">
          <div className="blog-page-description1">
            <div className="blog-page-content">
              <p className="blog-page-paragraph">
                At Naari, we create a system where we collect menstrual waste,
                disinfect it and generate reusable products.
              </p>
              <p className="blog-page-paragraph1">
                It&apos;s a place where women share their first-period stories,
                feelings, and emotions through blogs and Mood calendars.
              </p>
            </div>
            <div className="blog-page-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-page-link button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="blog-page-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-page-link01 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="blog-page-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-page-main">
        <div className="blog-page-card">
          <div className="blog-page-image02">
            <img
              alt="image"
              src="/external/character-1.svg"
              className="blog-page-image03"
            />
          </div>
          <div className="blog-page-content01">
            <span className="blog-page-caption01">Naina</span>
            <h3 className="blog-page-title">Myths about your Period</h3>
          </div>
        </div>
        <div className="blog-page-card01">
          <div className="blog-page-image04">
            <img
              alt="image"
              src="/external/character-2.svg"
              className="blog-page-image05"
            />
          </div>
          <div className="blog-page-content02">
            <span className="blog-page-caption02">Priyal</span>
            <h3 className="blog-page-title1">
              Reproductive health &amp; Cancer
            </h3>
          </div>
        </div>
        <div className="blog-page-card02">
          <div className="blog-page-image06">
            <img
              alt="image"
              src="/external/character-3.svg"
              className="blog-page-image07"
            />
          </div>
          <div className="blog-page-content03">
            <span className="blog-page-caption03">Anonymous</span>
            <h3 className="blog-page-title2">Mental Health &amp; Periods</h3>
          </div>
        </div>
        <div className="blog-page-card03">
          <div className="blog-page-image08">
            <img
              alt="image"
              src="/external/character-4.svg"
              className="blog-page-image09"
            />
          </div>
          <div className="blog-page-content04">
            <span className="blog-page-caption04">
              <span>Character #4</span>
              <br></br>
            </span>
            <h3 className="blog-page-title3">0.05 ETH</h3>
          </div>
        </div>
        <div className="blog-page-card04">
          <div className="blog-page-image10">
            <img
              alt="image"
              src="/external/character-5.svg"
              className="blog-page-image11"
            />
          </div>
          <div className="blog-page-content05">
            <span className="blog-page-caption05">anushka</span>
            <h3 className="blog-page-title4">
              Women &amp; dealing with stress
            </h3>
          </div>
        </div>
        <div className="blog-page-card05">
          <div className="blog-page-image12">
            <img
              alt="image"
              src="/external/character-6.svg"
              className="blog-page-image13"
            />
          </div>
          <div className="blog-page-content06">
            <span className="blog-page-caption06">Sweta</span>
            <h3 className="blog-page-title5">Menstruation is normal</h3>
          </div>
        </div>
        <div className="blog-page-card06">
          <div className="blog-page-image14">
            <img
              alt="image"
              src="/external/character-7.svg"
              className="blog-page-image15"
            />
          </div>
          <div className="blog-page-content07">
            <span className="blog-page-caption07">Sonam</span>
            <h3 className="blog-page-title6">
              What you missed on your symptoms
            </h3>
          </div>
        </div>
        <div className="blog-page-card07">
          <div className="blog-page-image16">
            <img
              alt="image"
              src="/external/character-8.svg"
              className="blog-page-image17"
            />
          </div>
          <div className="blog-page-content08">
            <span className="blog-page-caption08">Character #8</span>
            <h3 className="blog-page-title7">0.05 ETH</h3>
          </div>
        </div>
      </div>
      <section className="blog-page-cards">
        <div className="blog-page-row">
          <div className="blog-page-card08">
            <div className="blog-page-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="blog-page-avatar1"
              />
            </div>
            <div className="blog-page-main1">
              <div className="blog-page-content09">
                <h2 className="blog-page-header1">
                  8 signs of &quot;pregnancy&quot; that are actually PMS
                </h2>
                <p className="blog-page-description2">
                  Do you ever get the feeling Mother Nature is the ultimate
                  prankster? Case in point: many of the early signs of pregnancy
                  are the same as symptoms you might get when your period is on
                  its way.
                </p>
              </div>
              <button className="blog-page-learn1 button">
                <span className="blog-page-text11">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="blog-page-image18"
                />
              </button>
            </div>
          </div>
          <div className="blog-page-card09">
            <div className="blog-page-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="blog-page-avatar3"
              />
            </div>
            <div className="blog-page-main2">
              <div className="blog-page-content10">
                <h2 className="blog-page-header2">Concerned about Cramps?</h2>
                <p className="blog-page-description3">
                  Lets explore some possible reasons for lower abdominal pain-
                  and what to do next.
                </p>
              </div>
              <button className="blog-page-learn2 button">
                <span className="blog-page-text12">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="blog-page-image19"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="blog-page-card10">
          <div className="blog-page-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="blog-page-avatar5"
            />
          </div>
          <h2 className="blog-page-header3">Concerned about Cramps?</h2>
        </div>
      </section>
      <section className="blog-page-join-us">
        <div className="blog-page-content11">
          <div className="blog-page-main3">
            <div className="blog-page-heading1">
              <h2 className="blog-page-header4">
                Talk To Naari.Ai and get your questions answered!
              </h2>
              <p className="blog-page-caption09">
                Confused? We are here for you.
              </p>
            </div>
            <button className="blog-page-view2 button">Send a message</button>
          </div>
          <img
            alt="image"
            src="/group%202273.svg"
            className="blog-page-image20"
          />
        </div>
      </section>
      <section className="blog-page-faq">
        <h2 className="blog-page-header5">We have all the answers</h2>
        <div className="blog-page-accordion"></div>
      </section>
      <footer className="blog-page-footer">
        <div className="blog-page-main4">
          <div className="blog-page-branding">
            <div className="blog-page-heading2">
              <h2 className="blog-page-logo2">Character</h2>
              <p className="blog-page-caption10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="blog-page-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-page-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="blog-page-image21"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-page-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="blog-page-image22"
                />
              </a>
            </div>
          </div>
          <div className="blog-page-links1">
            <div className="blog-page-list">
              <h3 className="blog-page-heading3">Site</h3>
              <div className="blog-page-items">
                <button className="blog-page-link02 button-clean button">
                  About
                </button>
                <button className="blog-page-link03 button-clean button">
                  Collection
                </button>
                <button className="blog-page-link04 button-clean button">
                  Roadmap
                </button>
                <button className="blog-page-link05 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="blog-page-list1">
              <h3 className="blog-page-heading4">Company</h3>
              <div className="blog-page-items1">
                <button className="blog-page-link06 button-clean button">
                  Team
                </button>
                <button className="blog-page-link07 button-clean button">
                  Press
                </button>
                <button className="blog-page-link08 button-clean button">
                  Terms
                </button>
                <button className="blog-page-link09 button-clean button">
                  Limitations
                </button>
                <button className="blog-page-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="blog-page-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="blog-page-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="blog-page-image23"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="blog-page-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="blog-page-image24"
              />
            </a>
          </div>
        </div>
        <span className="blog-page-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="blog-page-container5">
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

export default BlogPage
