import React from 'react'

function About() {
  return (
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
            <img src="/images/imgpk4.jpg" class="composition_photo composition_photo--p1" alt="" />
            <img src="/images/imgpk1.jpg" class="composition_photo composition_photo--p2" alt="" />
            <img src="/images/imgpk2.jpg" class="composition_photo composition_photo--p3" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
