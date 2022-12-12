import React from 'react';
import './Contact.css';
import { Button } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contactContainer'>
      {/* <a className='mailBtn' href='mailto:info@m-bazaar.com'>
        <Button>Contact: info@m-bazaar.com</Button>
      </a> */}
      <div className='container'>
        <Row>
          <Col md={6}>
            <iframe
              className='map-iframe'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117698.66911470062!2d86.06299265708725!3d22.79937301815665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e56c1a362441%3A0x6c0f14064bbb64e7!2sBazaar.com!5e0!3m2!1sen!2sin!4v1668682639947!5m2!1sen!2sin'
              width='600'
              height='450'
              style={{ Border: 0 }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            <h1>
              <span className='underline--magical'>Or Reach us Via -</span>
            </h1>
            <p>
              <strong>Call us:</strong> TollFree -
              <span className='blink'> 18003094131</span>{' '}
            </p>
            <p>
              <strong>Email:</strong>support@m-bazaar.com
            </p>
          </Col>
          <Col md={6}>
            <h3>Contact Form</h3>
            <form>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Your Name</label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <Row>
                <Col md={6}>
                  <div class='form-group mt-4'>
                    <label for='exampleInputEmail1'>Your Email</label>
                    <input
                      type='email'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </Col>
                <Col md={6}>
                  <div class='form-group mt-4'>
                    <label for='exampleInputEmail1'>Your Phone No.</label>
                    <input
                      type='number'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter Mobile Number'
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      We'll never share your number with anyone else.
                    </small>
                  </div>
                </Col>
              </Row>
              <div class='form-group mt-4'>
                <label for='exampleInputEmail1'>Subject</label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Subject'
                />
              </div>

              <div class='form-group mt-4'>
                <label for='exampleFormControlTextarea1'>
                  Your message(optional)
                </label>
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <button type='submit' class='btn btn-primary cont-btn mt-4'>
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
