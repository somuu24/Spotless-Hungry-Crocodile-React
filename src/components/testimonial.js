import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  heading1: 'Testimonials',
  author2Position: 'Music Producer',
  content1:
    "I love the variety of music genres available on this website. It's my go-to place for discovering new artists and songs.",
  author3Name: 'Emily Davis',
  author4Name: 'David Lee',
  author2Alt: 'Image of Michael Smith',
  author1Position: 'Music Enthusiast',
  review2:
    'The quality of the audio files is top-notch. As a producer, I appreciate the attention to detail in the sound engineering.',
  author4Alt: 'Image of David Lee',
  author1Src:
    'https://images.unsplash.com/photo-1681802992384-3df9b2b52eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU5Njg5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1: '5 stars - Amazing platform!',
  review4:
    'This website has become my favorite resource for staying updated on the latest music trends and releases.',
  author3Alt: 'Image of Emily Davis',
  author1Name: 'Sarah Johnson',
  author3Position: 'Singer-Songwriter',
  author1Alt: 'Image of Sarah Johnson',
  author4Position: 'Music Blogger',
  author4Src:
    'https://images.unsplash.com/photo-1545828751-0a3b3a1da949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU5Njg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Michael Smith',
  author2Src:
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU5Njg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTU5Njg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    "I've found great inspiration for my own music by listening to the talented artists featured here. Highly recommended!",
}

Testimonial.propTypes = {
  heading1: PropTypes.string,
  author2Position: PropTypes.string,
  content1: PropTypes.string,
  author3Name: PropTypes.string,
  author4Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
  author2Name: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  review3: PropTypes.string,
}

export default Testimonial
