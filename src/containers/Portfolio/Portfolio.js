/* eslint-disable */
import React, { useEffect } from 'react';
import Project from '../../components/Project/Project';
import $ from 'jquery';

const Portfolio = () => {
  useEffect(() => {
    function projects() {
      $('.luvtalk-project').css('height', $('.luvtalk-project').width());
      $('.luvtalk-project h3').css(
        'padding-top',
        ($('.luvtalk-project').height() -
          $('.luvtalk-project h3').height() -
          $('.luvtalk-project .row').outerHeight()) /
          2
      );
      $('.personal-website-project').css(
        'height',
        $('.personal-website-project').width()
      );
      $('.personal-website-project h3').css(
        'padding-top',
        ($('.personal-website-project').height() -
          $('.personal-website-project h3').height() -
          $('.personal-website-project .row').outerHeight()) /
          2
      );
      $('.strike-zone-project').css(
        'height',
        $('.strike-zone-project').width()
      );
      $('.strike-zone-project h3').css(
        'padding-top',
        ($('.strike-zone-project').height() -
          $('.strike-zone-project h3').height() -
          $('.strike-zone-project .row').outerHeight()) /
          2
      );
      var doit;
      $(window).resize(function () {
        clearTimeout(doit);
        doit = setTimeout(projects, 500);
      });
    }
    projects();
  }, []);
  return (
    <div class='projects' id='projects'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-sm-12 col-md-12 text-center'>
            <div class='projects-header'>
              <h1>Projects and Portfolio</h1>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='col-sm-12 col-md-12 text-center'>
            <div class='projects-header-quote'>
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>
        </div>

        <div class='row'>
          <Project
            title='LUV TALK Website'
            content='Website, created during my first internship, which utilized
                HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.'
            className='luvtalk-project'
          />
          <Project
            title='Personal Website'
            content='Enjoyable side project that was created to experiment with more
            HTML and CSS, but also provided an outlet to showcase my
            abilities and interests.'
            className='personal-website-project'
          />

          <Project
            title='Strike Zone Analysis'
            content='Data analytics project completed during my time at the Illinois
                Math and Science Academy which studied the baseball strike zone
                based on the state of the game.'
            className='strike-zone-project'
          />
        </div>

        <div class='row'>
          <div class='col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5'>
            <div class='see-more-button'>
              <a class='btn btn-default btn-border' href='#'>
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
