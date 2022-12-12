import React from 'react';
import './aboutSection.css';
import director from '../../../images/director.png';
import { Button, Typography, Avatar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
const About = () => {
  const visitInstagram = () => {
    // window.location = 'https://instagram.com/meabhisingh';
  };
  return (
    <div className='aboutSection'>
      <div></div>
      <div className='aboutSectionGradient'></div>
      <div className='aboutSectionContainer'>
        <Typography component='h1'>About Bazaar.com</Typography>

        <div>
          <div>
            <Avatar
              src={director}
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              alt=''
            />
            <Typography component='h4'>Director’s Pen</Typography>
            <Button onClick={visitInstagram} color='primary'>
              Visit Instagram
            </Button>
            <span>
              <span className='ft-bold'> Mr. Rahul Pathak</span> is The Director
              of Bazaar.com, A Brand of Ra Ba Super Mart Pvt Ltd. Widely
              credited as the pioneer of modern E-Retail industry in India, Mr.
              Rahul Pathak will be a mentor and role model for many new Indian
              entrepreneurs and a thought leader in Indian Business. over the
              past two decades he has created and leads some of Events Company
              in India. As well as he has a good Knowledge of Restaurant &
              Catering Industry, he started an Own Restaurant in Jamshedpur. he
              Believes in value of time, hard work, Focus and dedication to
              work, and Now he Start an E-Commerce Company Bazaar.com, A BRAND
              OF Ra Ba SuperMart Pvt. Ltd. he is Very fortunate in his Business
              Career & he have Future stick thought. future is always giving
              Knowledge and full of thought, And he has Dreams that to Get &
              Give together in every business. He is Very Spiritual, and Believe
              in God, believes in True Life and Respect every relation. He Says,
              Decision is Very Important in your life so think carefully and
              decide what would you be Become for you?
            </span>
          </div>

          <div className='aboutSectionContainer2'>
            <Typography component='h2'>MISSION & VISION</Typography>
            <p className='bazaar-p'>
              We’re committed to deliver to our customers that homegrown comfort
              online shopping on local level can be not only enjoyable but also
              wealthy & healthy. <br />
              "हम अपने ग्राहकों को यह डिलीवर करने के लिए प्रतिबद्ध हैं कि
              स्थानीय स्तर पर ऑनलाइन खरीदारी न केवल आनंददायक हो सकती है बल्कि
              समृद्ध और स्वस्थ भी हो सकती है।"
            </p>
            <p className='bazaar-p mt-5'>
              Our vision is to make more comfortable and easy Shopping with
              fastest delivery to our valuable customers at their local level.{' '}
              <br />
              "हमारा दृष्टिकोण अपने मूल्यवान ग्राहकों को उनके स्थानीय स्तर पर
              सबसे तेज़ डिलीवरी के साथ खरीदारी को अधिक आरामदायक और आसान बनाना
              है।"
            </p>
            <Typography component='h2'>Our Brands</Typography>
            <a
              href='https://www.youtube.com/@user-pn6oc3yd7z/featured'
              target='blank'
            >
              <YouTubeIcon className='youtubeSvgIcon' />
            </a>

            <a href='https://www.instagram.com/bazaarcom7/' target='blank'>
              <InstagramIcon className='instagramSvgIcon' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100085530316914'
              target='blank'
            >
              <FacebookIcon className='facebookSvgIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
