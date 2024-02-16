import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './product-page.css'

const ProductPage = (props) => {
  return (
    <div className="product-page-container">
      <Helmet>
        <title>Product-page - Character NFT template</title>
        <meta
          property="og:title"
          content="Product-page - Character NFT template"
        />
      </Helmet>
      <section className="product-page-project">
        <header data-thq="thq-navbar" className="product-page-navbar">
          <span className="product-page-logo">Naari</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="product-page-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="product-page-nav"
            >
              <Link
                to="/product-page"
                className="product-page-navlink button-clean button"
              >
                Product
              </Link>
              <Link
                to="/cycle-tracking"
                className="product-page-navlink1 button-clean button"
              >
                Cycle Tracking
              </Link>
              <button className="product-page-button button-clean button">
                Blog
              </button>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="product-page-btn-group"
          >
            <div className="product-page-socials">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="product-page-image"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="product-page-image1"
                />
              </button>
            </div>
            <Link to="/subscription-page" className="product-page-view button">
              Subscription
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="product-page-burger-menu">
            <button className="button product-page-button1">
              <svg viewBox="0 0 1024 1024" className="product-page-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="product-page-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="product-page-nav1"
            >
              <div className="product-page-container1">
                <span className="product-page-logo1">Character</span>
                <div
                  data-thq="thq-close-menu"
                  className="product-page-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="product-page-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="product-page-nav2"
              >
                <span className="product-page-text">About</span>
                <span className="product-page-text01">Features</span>
                <span className="product-page-text02">Pricing</span>
                <span className="product-page-text03">Team</span>
                <span className="product-page-text04">Blog</span>
              </nav>
              <div className="product-page-container2">
                <button className="product-page-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="product-page-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="product-page-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="product-page-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="product-page-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="product-page-understand">
          <div className="product-page-content">
            <span className="product-page-caption">NAARI</span>
            <div className="product-page-heading">
              <h2 className="product-page-header">
                Understand our Pad Recycler
              </h2>
              <p className="product-page-header1">
                Take a minute and see how our pad recyclers work!
              </p>
            </div>
            <button className="product-page-view1 button-link button">
              <Link to="/product-page" className="product-page-navlink2">
                Learn More
              </Link>
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12048b86-96fc-4485-a0ea-b27913f312e6/47e7120a-28e4-45b7-b7fb-410d281d194c?org_if_sml=1338&amp;force_format=original"
                className="product-page-image2"
              />
            </button>
          </div>
          <img
            alt="image"
            src="/external/group%202415.svg"
            className="product-page-image3"
          />
        </div>
        <div className="product-page-container3">
          <span className="product-page-text05">
                                                                               
                                 Imagine a delicate dance of                   
                                                                               
                                        transformation, where the once-used     
                                                                               
                                      sanitary pads gracefully enter the realm
            of                                                                 
                                      recycling machine. With a gentle touch,
            the                                                                 
                                    machine embraces the pads, swiftly         
                                                                               
                                      shredding them into tiny fragments, akin
            to                                                                 
                                  the delicate petals of a flower drifting in
            the                                                                 
                                  wind. This intricate process ensures the     
                                                                               
                                    reduction of the waste into minuscule       
                                                                               
                                    crumbles, paving the way for further       
                                                                               
                                       exploration and extraction of the
            valuable                                                           
                                             hydrogel within.
          </span>
          <span>
                                                                               
                                            
          </span>
        </div>
        <div className="product-page-container4">
          <span>
            <span className="product-page-text08">
              Once the crumbles of shredded they embark
            </span>
            <br className="product-page-text09"></br>
            <span className="product-page-text10">
              {' '}
              on a journey of purification. Through meticulous
            </span>
            <br className="product-page-text11"></br>
            <span className="product-page-text12">
              {' '}
              steps of disinfection, the remnants of the pads
            </span>
            <br className="product-page-text13"></br>
            <span className="product-page-text14">
              {' '}
              are cleansed, ensuring the removal of any
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="product-page-text15"></br>
            <span className="product-page-text16">
              impurities. This purification process sets
            </span>
            <br className="product-page-text17"></br>
            <span className="product-page-text18">
              {' '}
              the stage for the next act, where the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="product-page-text19"></br>
            <span className="product-page-text20">
              hydrogel, now pristine and ready,
            </span>
            <br className="product-page-text21"></br>
            <span className="product-page-text22">
              {' '}
              takes center stage.With skilled hands
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="product-page-text23"></br>
            <span className="product-page-text24">
              and innovative techniques, the hydrogel
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="product-page-text25"></br>
            <span className="product-page-text26">
              is transformed into a diverse array of
            </span>
            <br className="product-page-text27"></br>
            <span className="product-page-text28">
              {' '}
              plastic products, each with its
            </span>
            <br className="product-page-text29"></br>
            <span className="product-page-text30"> own purpose and</span>
            <br className="product-page-text31"></br>
            <span className="product-page-text32"> potential</span>
            <span className="product-page-text33">.</span>
            <span className="product-page-text34">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="product-page-text35"></br>
            <br className="product-page-text36"></br>
            <br className="product-page-text37"></br>
            <br className="product-page-text38"></br>
            <br className="product-page-text39"></br>
            <span className="product-page-text40">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="product-page-mining"></div>
        <footer className="product-page-footer">
          <div className="product-page-main">
            <div className="product-page-branding">
              <div className="product-page-heading1">
                <h2 className="product-page-logo2">NAARI</h2>
                <p className="product-page-caption1">
                  A step towards an easy period journey
                </p>
              </div>
              <div className="product-page-socials1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="product-page-twitter1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="product-page-image4"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="product-page-discord1 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="product-page-image5"
                  />
                </a>
              </div>
            </div>
            <div className="product-page-links">
              <div className="product-page-list">
                <h3 className="product-page-heading2">Site</h3>
                <div className="product-page-items">
                  <button className="product-page-link button-clean button">
                    About
                  </button>
                  <button className="product-page-link1 button-clean button">
                    Collection
                  </button>
                  <button className="product-page-link2 button-clean button">
                    Roadmap
                  </button>
                  <button className="product-page-link3 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="product-page-list1">
                <h3 className="product-page-heading3">Company</h3>
                <div className="product-page-items1">
                  <button className="product-page-link4 button-clean button">
                    Team
                  </button>
                  <button className="product-page-link5 button-clean button">
                    Press
                  </button>
                  <button className="product-page-link6 button-clean button">
                    Terms
                  </button>
                  <button className="product-page-link7 button-clean button">
                    Limitations
                  </button>
                  <button className="product-page-link8 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="product-page-socials2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="product-page-twitter2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="product-page-image6"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="product-page-discord2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="product-page-image7"
                />
              </a>
            </div>
          </div>
          <span className="product-page-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </footer>
        <div className="product-page-container5">
          <span>
            <span>
                                                                               
                                                
            </span>
            <span className="product-page-text47">
               Imagine a delicate dance of                                     
                                 transformation, where the once-used           
                                                           sanitary pads
              gracefully enter the                                             
                                  of the recycling machine. With a gentle       
                                                             touch, the machine
              embraces the pads,                                               
                       swiftly shredding them into tiny                         
                                                                   fragments,
              akin to the delicate                                             
                                         petals of a flower drifting in the     
                                                                               
                    wind. This intricate process                               
                                                               ensures the
              reduction of the                                                 
                                          waste into minuscule                 
                                                                               
                     paving the way for further                                 
                                                           exploration and
              extraction of the                                                 
                                     valuable hydrogel within.
            </span>
          </span>
        </div>
        <div className="product-page-container6">
          <span>
            <span>
                                                                               
                                                
            </span>
            <span className="product-page-text50">
               Imagine a delicate dance of                                     
                                 transformation, where the once-used           
                                                           sanitary pads
              gracefully enter the                                             
                                  of the recycling machine. With a gentle       
                                                             touch, the machine
              embraces the pads,                                               
                       swiftly shredding them into tiny                         
                                                                   fragments,
              akin to the delicate                                             
                                         petals of a flower drifting in the     
                                                                               
                    wind. This intricate process                               
                                                               ensures the
              reduction of the                                                 
                                          waste into minuscule                 
                                                                               
                     paving the way for further                                 
                                                           exploration and
              extraction of the                                                 
                                     valuable hydrogel within.
            </span>
          </span>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
