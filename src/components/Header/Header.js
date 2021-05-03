/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
  useEffect(() => {
    function navigation() {
      $('.primary-nav').css('height', $('.logo').height());
      $('.primary-nav li').css(
        'margin-top',
        ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
      );

      $(window).resize(function () {
        setTimeout(navigation, 500);
      });
    }
    navigation();
  }, []);

  return (
    <div class='navigation'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
            <div class='logo'>
              <a href='index.html'>
                <img src='images/logo.svg' />
              </a>
            </div>
          </div>

          <div class='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
            <div class='primary-nav'>
              <ul>
                <li>
                  <Link
                    to='/'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/portfolio'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
