import React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import Card from '../../common/Card';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <Card>
        <div className="content">
          <div className="item">
            <GitHub color="#5374ff" size="21" />
            <a
              target="__blank"
              href="http://github.com/kretawiweka"
              className="link-item"
            >
              Github
            </a>
          </div>
          <div className="item">
            <Linkedin color="#5374ff" size="21" />
            <a
              target="__blank"
              href="https://www.linkedin.com/in/kretawiweka/"
              className="link-item"
            >
              LinkedIn
            </a>
          </div>
          <div className="item">
            <img
              className="icon-item"
              src="/static/images/icon/medium-icon.svg"
              alt="medium-icon"
            />
            <a
              target="__blank"
              href="https://medium.com/@kretawiweka"
              className="link-item"
            >
              Medium
            </a>
          </div>
          <div className="item">
            <img
              className="icon-item"
              src="/static/images/icon/gatsbyjs-icon.svg"
              alt="medium-icon"
            />
            <a
              target="__blank"
              href="https://justblog.kretawiweka.site/"
              className="link-item"
            >
              Blog
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SocialMedia;
