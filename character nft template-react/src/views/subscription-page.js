import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './subscription-page.css'

const SubscriptionPage = (props) => {
  return (
    <div className="subscription-page-container">
      <Helmet>
        <title>Subscription-page - Character NFT template</title>
        <meta
          property="og:title"
          content="Subscription-page - Character NFT template"
        />
      </Helmet>
      <section className="subscription-page-project">
        <header data-thq="thq-navbar" className="subscription-page-navbar">
          <span className="subscription-page-logo">Naari</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="subscription-page-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="subscription-page-nav"
            >
              <button className="subscription-page-button button-clean button">
                Product
              </button>
              <button className="subscription-page-button1 button-clean button">
                Cycle Tracking
              </button>
              <button className="subscription-page-button2 button-clean button">
                Blog
              </button>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="subscription-page-btn-group"
          >
            <div className="subscription-page-socials">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="subscription-page-image"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="subscription-page-image1"
                />
              </button>
            </div>
            <button className="button">Subscription</button>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="subscription-page-burger-menu"
          >
            <button className="button subscription-page-button3">
              <svg viewBox="0 0 1024 1024" className="subscription-page-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="subscription-page-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="subscription-page-nav1"
            >
              <div className="subscription-page-container1">
                <span className="subscription-page-logo1">Character</span>
                <div
                  data-thq="thq-close-menu"
                  className="subscription-page-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="subscription-page-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="subscription-page-nav2"
              >
                <span className="subscription-page-text">About</span>
                <span className="subscription-page-text1">Features</span>
                <span className="subscription-page-text2">Pricing</span>
                <span className="subscription-page-text3">Team</span>
                <span className="subscription-page-text4">Blog</span>
              </nav>
              <div className="subscription-page-container2">
                <button className="subscription-page-login button">
                  Login
                </button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="subscription-page-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="subscription-page-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="subscription-page-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="subscription-page-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="subscription-page-container3">
          <div className="subscription-page-content">
            <span className="subscription-page-caption">NAARI</span>
            <div className="subscription-page-heading">
              <h2 className="subscription-page-header">Sign In</h2>
              <div className="subscription-page-container4">
                <div className="subscription-page-container5">
                  <Script
                    html={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sign In</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .container {
        background-color: #fff;
        padding: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        width: 100%;
    }
    h2 {
        text-align: center;
    }
    input[type="text"],
    input[type="password"],
    input[type="email"],
    input[type="tel"],
    select {
        width: calc(100% - 20px);
        padding: 12px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
    }
    select {
        width: calc(100% - 22px); /* Adjusted to match other input fields */
    }
    button[type="submit"] {
        width: 100%;
        padding: 12px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button[type="submit"]:hover {
        background-color: #0056b3;
    }
    .message {
        text-align: center;
        margin-top: 10px;
        color: red;
    }
</style>
</head>
<body>
    <div class="container">
        <h2>Sign In</h2>
        <form id="signInForm">
            <input type="text" id="username" placeholder="Username" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="tel" id="phone" placeholder="Phone Number" required>
            <select id="gender" required>
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input type="password" id="password" placeholder="Password" required>
            <input type="password" id="confirmPassword" placeholder="Confirm Password" required>
            <button type="submit">Sign In</button>
        </form>
        <div class="message" id="message"></div>
    </div>

    <script>
        document.getElementById('signInForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var gender = document.getElementById('gender').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation, checking if required fields are not empty
            if (username.trim() === '' || email.trim() === '' || phone.trim() === '' || gender === '' || password.trim() === '' || confirmPassword.trim() === '') {
                document.getElementById('message').innerHTML = "Please fill in all fields.";
            } else if (password !== confirmPassword) {
                document.getElementById('message').innerHTML = "Passwords do not match.";
            } else {
                document.getElementById('message').innerHTML = "Sign in successful!";
                // Here you can redirect the user to another page or perform other actions
            }
        });
    </script>
</body>
</html>

`}
                  ></Script>
                </div>
              </div>
              <button type="button" className="button">
                Premium Plans-
              </button>
            </div>
            <button className="subscription-page-view1 button-link button">
              <Link to="/product-page" className="subscription-page-navlink">
                Learn More
              </Link>
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12048b86-96fc-4485-a0ea-b27913f312e6/47e7120a-28e4-45b7-b7fb-410d281d194c?org_if_sml=1338&amp;force_format=original"
                className="subscription-page-image2"
              />
            </button>
          </div>
        </div>
        <div className="subscription-page-understand"></div>
        <div className="subscription-page-mining"></div>
        <footer className="subscription-page-footer">
          <div className="subscription-page-main">
            <div className="subscription-page-branding">
              <div className="subscription-page-heading1">
                <h2 className="subscription-page-logo2">NAARI</h2>
                <p className="subscription-page-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="subscription-page-socials1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="subscription-page-twitter1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="subscription-page-image3"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="subscription-page-discord1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="subscription-page-image4"
                  />
                </a>
              </div>
            </div>
            <div className="subscription-page-links">
              <div className="subscription-page-list">
                <h3 className="subscription-page-heading2">Site</h3>
                <div className="subscription-page-items">
                  <button className="subscription-page-link button-clean button">
                    About
                  </button>
                  <button className="subscription-page-link1 button-clean button">
                    Collection
                  </button>
                  <button className="subscription-page-link2 button-clean button">
                    Roadmap
                  </button>
                  <button className="subscription-page-link3 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="subscription-page-list1">
                <h3 className="subscription-page-heading3">Company</h3>
                <div className="subscription-page-items1">
                  <button className="subscription-page-link4 button-clean button">
                    Team
                  </button>
                  <button className="subscription-page-link5 button-clean button">
                    Press
                  </button>
                  <button className="subscription-page-link6 button-clean button">
                    Terms
                  </button>
                  <button className="subscription-page-link7 button-clean button">
                    Limitations
                  </button>
                  <button className="subscription-page-link8 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="subscription-page-socials2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="subscription-page-twitter2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="subscription-page-image5"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="subscription-page-discord2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="subscription-page-image6"
                />
              </a>
            </div>
          </div>
          <span className="subscription-page-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </footer>
      </section>
    </div>
  )
}

export default SubscriptionPage
