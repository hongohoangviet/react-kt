import React from 'react'
import anh1 from '../../images/category-img-1.jpg'
import anh2 from '../../images/lighting-upgrades-thumb-G3.jpg'
import anh3 from '../../images/electrical-repairs-thumb-G1.jpg'
import anh4 from '../../images/surge-protection-thumb-G4.jpg'

export default function Page() {
  return (
    <div>
          <main>
      <section>
        <div className="sections section_one flex">
          <div className="section_one_img flex-full">
            <img src={anh1} alt="category img" />
          </div>
          <div className="section_one_content flex-full">
            <div className="section_subtitle">Our Services</div>
            <h2 className="section_title">Responsive & Professional</h2>
            <p className="section_desc">
              We go the extra mile on every project. The value we provide
              clients comes from our level of skill and performance, as well as
              our knowledge and professionalism. Rest assured, we put the same
              level of energy into every project we take on.
            </p>
            <div className="section_about_hotline">
              <strong className="hotline_title">Call us today</strong>
              <strong className="hotline_number"
                ><i className="fa fa-phone"></i> 1900-111000</strong
              >
              <p className="section_desc">We're available 24/7, 365 days a year.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section_two_wrapper">
        <div className="sections section_two">
          <h2 className="section_title text-center">What We Offer</h2>
          <ul className="homeproduct clearfix" id="_loadList">
            <li>
              <img
                className="photo"
                alt="Lighting Upgrades"
                src={anh2}
              />
              <div className="content">
                <h3>
                  <a href="lighting-upgrades" title="Lighting Upgrades"
                    >Lighting Upgrades</a
                  >
                </h3>
                <p className="section_desc">
                  Electrical panel maintenance, therefore, should be part of
                  your regular routine.
                </p>
                <div className="section_btn">
                  <a
                    className="readmore"
                    href="lighting-upgrades"
                    title="Lighting Upgrades"
                    >Read more</a
                  >
                </div>
              </div>
            </li>
            <li>
              <img
                className="photo"
                alt="Electrical repairs"
                src={anh3}
              />
              <div className="content">
                <h3>
                  <a href="electrical-repairs" title="Electrical repairs"
                    >Electrical repairs</a
                  >
                </h3>
                <p className="section_desc">
                  Electrical repairs should always be handled by a professional
                  electrician
                </p>
                <div className="section_btn">
                  <a
                    className="readmore"
                    href="electrical-repairs"
                    title="Electrical repairs"
                    >Read more</a
                  >
                </div>
              </div>
            </li>
            <li>
              <img
                className="photo ls-is-cached lazyloaded"
                alt="Surge Protection"
                src={anh4}
              />
              <div className="content">
                <h3>
                  <a href="surge-protection" title="Surge Protection"
                    >Surge Protection</a
                  >
                </h3>
                <p className="section_desc">
                  An electrical surge can happen for a number of reasons,
                  including lightning strikes.
                </p>
                <div className="section_btn">
                  <a
                    className="readmore"
                    href="surge-protection"
                    title="Surge Protection"
                    >Read more</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="sections section_form">
          <h2 className="section_title text-center">Subscribe to Our Newsletter</h2>
          <p className="section_desc text-center">
            Do not want to miss news, updates, note and any offer on our
            products, then please subscriber to our mailling list.
          </p>
          <form className="subscribe_form flex" action="" method="GET">
            <input required type="text" placeholder="Your name" name="name" />
            <input required type="text" placeholder="Your Mobile phone" name="mobile" />
            <input
            required
              type="email"
              placeholder="Your email address"
              name="email"
              className="input"
            />
            <button type="submit" className="button">
              <i className="fa fa-envelope-o"></i> Subscribe email list
            </button>
          </form>
        </div>
      </section>
    </main>
    </div>
  )
}
