/* eslint-disable */
import React from 'react';

const Project = (props) => {
  const { title, content, className } = props;
  return (
    <div class='col-sm-4 col-md-4 text-center'>
      <div class={className}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div class='row'>
          <div class='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
            <div class='project-more-info'>
              <a class='btn btn-default btn-border' href='#'>
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
