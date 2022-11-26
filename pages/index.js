import { Fragment } from 'react';
import Profile from '../src/components/pages/profile';
import SocialMedia from '../src/components/pages/social-media';
import Career from '../src/components/pages/career';
// import Article from '../src/components/pages/article';

const HomePage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="section row">
          <div className="item-section profil-section">
            <Profile />
          </div>
          <div className="item-section">
            <SocialMedia />
          </div>
        </div>
        <div className="section row">
          <div className="item-section ">
            <Career />
          </div>
          {/*
          <div className="item-section ">
            <Article />
          </div>
          */}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
