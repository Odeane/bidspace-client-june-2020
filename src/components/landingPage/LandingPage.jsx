import React, { Fragment } from "react";
import { connect } from "react-redux";
import '../../sass/main.scss'
import Navbar from "../nav/Navbar";


const LandingPage = (props) => {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">BidSpace</span>
            <span className="heading-primary--sub">Everything You Need. All Right Here.</span>
          </h1>
        </div>
      </div>
      <section className='section-about'>
        <div class="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            We will help you to find your space.
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Warm Up with Our Hot Specials</h3>
            <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos tempore aliquid voluptatibus aut voluptates omnis nihil error pariatur repellendus, cupiditate, consectetur quibusdam? Recusandae magnam distinctio adipisci iste, iure quia.</p>
            <h3 className="heading-tertiary  u-margin-bottom-small">Because location really is everything!</h3>
            <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos tempore aliquid voluptatibus aut voluptates omnis nihil error pariatur repellendus, cupiditate, consectetur quibusdam? Recusandae magnam distinctio adipisci iste, iure quia.</p>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src="/images/imgpk1.jpg" class="composition_photo composition_photo--p1" alt=""/>
              <img src="/images/imgpk2.jpg" class="composition_photo composition_photo--p2" alt=""/>
              <img src="/images/imgpk4.jpg" class="composition_photo composition_photo--p3" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    renderLoginForm: state.auth.renderLoginForm,
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(LandingPage);
