import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './cycle-tracking.css'

const CycleTracking = (props) => {
  return (
    <div className="cycle-tracking-container">
      <Helmet>
        <title>Cycle-tracking - Character NFT template</title>
        <meta
          property="og:title"
          content="Cycle-tracking - Character NFT template"
        />
      </Helmet>
      <section className="cycle-tracking-project">
        <header data-thq="thq-navbar" className="cycle-tracking-navbar">
          <span className="cycle-tracking-logo">Naari</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="cycle-tracking-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="cycle-tracking-nav"
            >
              <Link
                to="/product-page"
                className="cycle-tracking-navlink button-clean button"
              >
                Product
              </Link>
              <Link
                to="/cycle-tracking"
                className="cycle-tracking-navlink1 button-clean button"
              >
                Cycle Tracking
              </Link>
              <button className="cycle-tracking-button button-clean button">
                Blog
              </button>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="cycle-tracking-btn-group"
          >
            <div className="cycle-tracking-socials">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="cycle-tracking-image"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="cycle-tracking-image1"
                />
              </button>
            </div>
            <Link
              to="/subscription-page"
              className="cycle-tracking-view button"
            >
              Subscription
            </Link>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="cycle-tracking-burger-menu"
          >
            <button className="button cycle-tracking-button1">
              <svg viewBox="0 0 1024 1024" className="cycle-tracking-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="cycle-tracking-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="cycle-tracking-nav1"
            >
              <div className="cycle-tracking-container1">
                <span className="cycle-tracking-logo1">Character</span>
                <div
                  data-thq="thq-close-menu"
                  className="cycle-tracking-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="cycle-tracking-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="cycle-tracking-nav2"
              >
                <span className="cycle-tracking-text">About</span>
                <span className="cycle-tracking-text1">Features</span>
                <span className="cycle-tracking-text2">Pricing</span>
                <span className="cycle-tracking-text3">Team</span>
                <span className="cycle-tracking-text4">Blog</span>
              </nav>
              <div className="cycle-tracking-container2">
                <button className="cycle-tracking-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="cycle-tracking-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="cycle-tracking-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="cycle-tracking-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="cycle-tracking-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="cycle-tracking-content">
          <span className="cycle-tracking-caption">NAARI</span>
          <div className="cycle-tracking-heading">
            <h2 className="cycle-tracking-header">Your Period Is Due on</h2>
            <div className="cycle-tracking-container3">
              <div className="cycle-tracking-container4">
                <Script
                  html={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ovulation Calculator</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #ffe0f0; /* Pink background */
        margin: 0;
        padding: 40px; /* Increased padding */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h1 {
        text-align: center;
        color: #ff1e56; /* Pink text color */
        margin-bottom: 20px;
    }
    label {
        font-weight: bold;
        color: #ff1e56; /* Pink text color */
        margin-bottom: 10px; /* Increased margin-bottom */
    }
    input[type="date"] {
        width: 100%;
        padding: 12px;
        margin-bottom: 20px; /* Increased margin-bottom */
        border: 2px solid #ff1e56; /* Pink border */
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
    }
    button {
        width: 100%;
        padding: 12px;
        background-color: #ff4386; /* Pink button color */
        color:#a60a12;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 16px;
    }
    button:hover {
        background-color: #ff0055; /* Darker pink on hover */
    }
    #result {
        margin-top: 20px;
    }
    #result p {
        margin-bottom: 10px;
    }
</style>
</head>
<body>
    <h1>Ovulation Calculator</h1>
    <label for="lastPeriodDate">Enter the date of your last period:</label>
    <input type="date" id="lastPeriodDate">
    <br>
    <button onclick="calculate()">Calculate</button>
    <br><br>
    <div id="result"></div>

    <script>
        function calculate() {
            var lastPeriodDate = new Date(document.getElementById('lastPeriodDate').value);
            var ovulationDate = new Date(lastPeriodDate.getTime() + 14 * 24 * 60 * 60 * 1000); // Adding 14 days
            var duePeriodDate = new Date(lastPeriodDate.getTime() + 28 * 24 * 60 * 60 * 1000); // Adding 28 days
            var fertileStartDate = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1000); // Subtracting 5 days
            var fertileEndDate = new Date(ovulationDate.getTime() + 4 * 24 * 60 * 60 * 1000); // Adding 4 days

            document.getElementById('result').innerHTML = \`
                <h2>Result:</h2>
                <p>Ovulation Date: \${ovulationDate.toDateString()}</p>
                <p>Due Period Date: \${duePeriodDate.toDateString()}</p>
                <p>Fertile Period: From \${fertileStartDate.toDateString()} to \${fertileEndDate.toDateString()}</p>
            \`;
        }
    </script>
</body>
</html>

`}
                ></Script>
              </div>
            </div>
          </div>
          <button className="cycle-tracking-view1 button-link button">
            <span>Learn More</span>
            <img
              alt="image"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12048b86-96fc-4485-a0ea-b27913f312e6/47e7120a-28e4-45b7-b7fb-410d281d194c?org_if_sml=1338&amp;force_format=original"
              className="cycle-tracking-image2"
            />
          </button>
        </div>
        <div className="cycle-tracking-understand"></div>
        <div className="cycle-tracking-mining"></div>
        <footer className="cycle-tracking-footer">
          <div className="cycle-tracking-main">
            <div className="cycle-tracking-branding">
              <div className="cycle-tracking-heading1">
                <h2 className="cycle-tracking-logo2">NAARI</h2>
                <p className="cycle-tracking-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="cycle-tracking-socials1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cycle-tracking-twitter1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="cycle-tracking-image3"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cycle-tracking-discord1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="cycle-tracking-image4"
                  />
                </a>
              </div>
            </div>
            <div className="cycle-tracking-links">
              <div className="cycle-tracking-list">
                <h3 className="cycle-tracking-heading2">Site</h3>
                <div className="cycle-tracking-items">
                  <button className="cycle-tracking-link button-clean button">
                    About
                  </button>
                  <button className="cycle-tracking-link1 button-clean button">
                    Collection
                  </button>
                  <button className="cycle-tracking-link2 button-clean button">
                    Roadmap
                  </button>
                  <button className="cycle-tracking-link3 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="cycle-tracking-list1">
                <h3 className="cycle-tracking-heading3">Company</h3>
                <div className="cycle-tracking-items1">
                  <button className="cycle-tracking-link4 button-clean button">
                    Team
                  </button>
                  <button className="cycle-tracking-link5 button-clean button">
                    Press
                  </button>
                  <button className="cycle-tracking-link6 button-clean button">
                    Terms
                  </button>
                  <button className="cycle-tracking-link7 button-clean button">
                    Limitations
                  </button>
                  <button className="cycle-tracking-link8 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="cycle-tracking-socials2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="cycle-tracking-twitter2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="cycle-tracking-image5"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="cycle-tracking-discord2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="cycle-tracking-image6"
                />
              </a>
            </div>
          </div>
          <span className="cycle-tracking-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </footer>
      </section>
    </div>
  )
}

export default CycleTracking
