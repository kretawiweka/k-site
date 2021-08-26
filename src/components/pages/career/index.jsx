import React from 'react';
import Card from '../../common/Card';

const Career = () => {
  return (
    <div className="career">
      <Card>
        <div className="content">
          <div className="item">
            <div className="item-title">
              <img
                src="/static/images/company/shopee.jpeg"
                className="item-img"
                alt="shopee-logo"
              />
              <div className="title-text">
                <h4 className="job-title">Software Engineer</h4>
                <h4 className="company">Shopee, Jakarta</h4>
                <h4 className="work-time">June 2020 - Present</h4>
              </div>
            </div>
          </div>
          <hr className="divider company-divider" />
          <div className="item">
            <div className="item-title">
              <img
                src="/static/images/company/kitabisa.png"
                className="item-img"
                alt="kitabisa-logo"
              />
              <div className="title-text">
                <h4 className="job-title">Software Engineer</h4>
                <h4 className="company">Kitabisa, Jakarta</h4>
                <h4 className="work-time">August 2018 - May 2020</h4>
              </div>
            </div>
            <div className="item-content">
              <p>
                Assigned to translate the designs provided by UI designers into
                a Web using JavaScript Framework, CSS, Sass, and several
                JavaScript libraries using API. Here are some Tech Stack Details
                :
              </p>
              <ul>
                <li>HTML</li> <li>Vanilla JS</li> <li>ReactJS</li>{' '}
                <li>NextJS</li> <li>JQuery</li> <li> CSS</li>
                <li>Sass</li>
                <li>StyledComponent</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
          <hr className="divider company-divider" />
          <div className="item">
            <div className="item-title">
              <img
                src="/static/images/company/olimpiade.png"
                className="item-img"
                alt="olimpiade-logo"
              />
              <div className="title-text">
                <h4 className="job-title">Software Engineer</h4>
                <h4 className="company">Olimpiade.id, Surabaya</h4>
                <h4 className="work-time">January 2017 - June 2018</h4>
              </div>
            </div>
            <div className="item-content">
              <p>
                Olimpiade.id and Sibiti (formerly Olimpiade.id's online test
                platform) is an event management and online test platform,
                deliver their benefits and conveniences to our clients. Under PT
                Surabaya Digital Indie, we provide cloud platform modules those
                can help people manages their event registration and held online
                test and examination easily in one click
              </p>
            </div>
          </div>
          <hr className="divider company-divider" />
          <div className="item">
            <div className="item-title">
              <img
                src="/static/images/company/haiunair.png"
                className="item-img"
                alt="haiunair-logo"
              />
              <div className="title-text">
                <h4 className="job-title">Software Engineer</h4>
                <h4 className="company">Hai Unair, Surabaya</h4>
                <h4 className="work-time">September 2016 - January 2017</h4>
              </div>
            </div>
            <div className="item-content">
              <p>
                Hai Unair is a student information portal of Universitas
                Airlangga
              </p>
            </div>
          </div>
          <hr className="divider company-divider" />
        </div>
      </Card>
    </div>
  );
};

export default Career;
