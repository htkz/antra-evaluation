/* eslint-disable */
import React from 'react';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
  return (
    <div>
      <div class='main'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='entry-banner text-center'>
              <h1 id='hello'>Hello, I'm</h1>
              <h1 id='name'>XXXX</h1>
              <h1 id='person-description'>
                UI Developer. UX Desinger. Problem Solver.
              </h1>
            </div>
          </div>

          <div class='row text-center'>
            <div class='banner-buttons'>
              <div class='col-sm-2 col-md-2 col-sm-offset-4 col-md-offset-4'>
                <a class='btn btn-default btn-border' href='#about'>
                  Info
                </a>
              </div>

              <div class='col-sm-2 col-md-2'>
                <a class='btn btn-default btn-border' href='#projects'>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='about' id='about'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-sm-12 col-md-12 text-center'>
              <div class='about-header'>
                <h1>About Me</h1>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='col-sm-12 col-md-12 text-center'>
              <div class='about-header-quote'>
                <h3>Sharing a little bit of my story...</h3>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='about-general-description '>
              <div class='col-sm-8 col-md-8 '>
                <h2>General Overview</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='statistic-row'>
              <div class='about-statistic-description'>
                <div class='col-sm-8 col-md-8'>
                  <h2>Statistics</h2>
                  <h5>
                    <em>And for those that don't fancy reading:</em>
                  </h5>
                  <br />

                  <p>Male, 200 years old.</p>
                  <p>Five feet 110 inches</p>
                  <p>Favorite fonts:Roboto </p>
                  <p>Loves to learn new things</p>
                </div>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='about-option-buttons'>
              <div class='col-sm-2 col-md-2'>
                <a href='#contact' class='btn btn-default btn-black-border'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='summary'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='development-summary'>
              <div class='col-sm-1 col-md-1'>
                <div class='development-img'>
                  <img
                    class='img-responsive center-block'
                    src='./images/developerdesign.svg'
                  />
                </div>
              </div>

              <div class='col-sm-4 col-md-4'>
                <div class='development-description'>
                  <h3>Development and Design</h3>
                  <p>
                    I aim to put my creativity to the test, designing and
                    building unique, meaningful products for clients or merely
                    for my own interests.
                  </p>
                </div>
              </div>
            </div>

            <div class='responsive-summary'>
              <div class='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
                <div class='responsive-img'>
                  <img
                    class='img-responsive center-block'
                    src='./images/responsivedesign.svg'
                  />
                </div>
              </div>

              <div class='col-sm-4 col-md-4'>
                <div class='responsive-description'>
                  <h3>Responsive Layouts</h3>
                  <p>
                    Development and design isn't merely putting information on
                    the site or preferred media outlet. I organize content and
                    present information in an engaging fashion, driving new and
                    unique layouts in tandem with novel solutions and cool
                    animations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='ideas-summary'>
              <div class='col-sm-1 col-md-1'>
                <div class='idea-img'>
                  <img
                    class='img-responsive center-block'
                    src='./images/innovativesolutions.svg'
                  />
                </div>
              </div>

              <div class='col-sm-4 col-md-4'>
                <div class='idea-description'>
                  <h3>Ideas and Solutions</h3>
                  <p>
                    There are still many problems that exist in today's society,
                    including laziness. Luckily, I hope to combat these issues
                    by innovating, developing easy-to-use programs, solutions,
                    or products.
                  </p>
                </div>
              </div>
            </div>

            <div class='passion-summary'>
              <div class='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
                <img
                  class='img-responsive center-block'
                  src='./images/passion.svg'
                />
              </div>

              <div class='col-sm-4 col-md-4'>
                <div class='passion-description'>
                  <h3>Passion and Dedication</h3>
                  <p>
                    With my profound interest and commitment to my field of
                    study, my projects rarely go unfinished and my problems are
                    never left unresolved.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
