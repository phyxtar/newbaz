import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import ReactCardSlider from 'react-card-slider-component';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const slides = [
    {
      image:
        'https://iamasocialjunkie.files.wordpress.com/2017/05/20170506_154702.png',
      title: 'My Fav Restaurant',
      description: 'This is a description',
    },
    {
      image:
        'https://res.cloudinary.com/dls5gtxhw/image/upload/v1670864620/my%20images/party1_iftknj.jpg',
      title: 'My Fav Restaurant',
      description: 'This is a second description',
    },
    {
      image:
        'https://res.cloudinary.com/dls5gtxhw/image/upload/v1670864620/my%20images/party2_tozjja.jpg',
      title: 'My Fav Restaurant',
      description: 'This is a third description',
    },
    {
      image:
        'https://res.cloudinary.com/dls5gtxhw/image/upload/v1670864620/my%20images/party3jpg_xorwii.jpg',
      title: 'My Fav Restaurant',
      description: 'This is a fourth description',
    },
    {
      image:
        'https://iamasocialjunkie.files.wordpress.com/2017/05/20170506_154702.png',
      title: 'My Fav Restaurant',
      description: 'This is a fifth description',
    },
    {
      image:
        'https://res.cloudinary.com/dls5gtxhw/image/upload/v1670864620/my%20images/party1_iftknj.jpg',
      title: 'My Fav Restaurant',
      description: 'This is a sixth description',
    },
    {
      image:
        'https://res.cloudinary.com/dls5gtxhw/image/upload/v1670864620/my%20images/party3jpg_xorwii.jpg',
      title: 'My Fav Restaurant',
      description: 'This is a seventh description',
    },
  ];

  const shops = [
    {
      image:
        'https://i.guim.co.uk/img/media/9238eeff9daa3c43e059c7b7ba023d61215d976f/0_179_4803_2882/master/4803.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7b2c293fca4564f208340fff3b2c5460',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a description',
    },
    {
      image:
        'https://imageio.forbes.com/specials-images/imageserve/6177ead1ad8d9747b64813b4/0x0.jpg?format=jpg&width=1200',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a second description',
    },
    {
      image:
        'https://yt3.ggpht.com/ytc/AMLnZu_1-evfw0p0Vv1UeFgsE3b52oq8qy4UIiuBPvI6EnA=s900-c-k-c0x00ffffff-no-rj',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a third description',
    },
    {
      image:
        'https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/Topwear-Store/double_height_hero_card_sobe-TopStore._CB445191053_.jpg',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a fourth description',
    },
    {
      image:
        'https://iamasocialjunkie.files.wordpress.com/2017/05/20170506_154702.png',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a fifth description',
    },
    {
      image:
        'https://yt3.ggpht.com/ytc/AMLnZu_1-evfw0p0Vv1UeFgsE3b52oq8qy4UIiuBPvI6EnA=s900-c-k-c0x00ffffff-no-rj',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a sixth description',
    },
    {
      image:
        'https://imageio.forbes.com/specials-images/imageserve/6177ead1ad8d9747b64813b4/0x0.jpg?format=jpg&width=1200',
      title: 'Top Shop By Bazaar.com',
      description: 'This is a seventh description',
    },
  ];
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Home - Welcome to Bazaar.com' />

          <div className='banner'>
            <p>Welcome to Bazaar.com</p>
            <h1>
              Asli Savings Million + <br />
              Find A <span className='text-danger'>Store Near You...</span>
            </h1>

            <a href='#products'>
              <button>
                Scroll
                <CgMouse />
              </button>
            </a>
          </div>

          <div className='container'>
            <div className='shop-slider'>
              <h2 className='homeHeading'>Where the party tonight</h2>
            </div>
            <ReactCardSlider slides={slides} />
          </div>

          <div className='container'>
            <div className='shop-slider'>
              <h2 className='homeHeading'>Top shops by Bazaar.com</h2>
            </div>
            <ReactCardSlider slides={shops} />
          </div>

          <div className='section'>
            <div className='scroll-image'>
              <div className='banner-text-big'>
                <span>Save 40%</span> on Home Decorative <br />
                Store Available!!
              </div>
              <div className='banner-text-normal'>
                don't miss our weekend specials. <a href='#'>Grab offer now</a>
              </div>
            </div>
          </div>

          <h2 className='homeHeading'>Featured Product</h2>

          <div className='container' id='products'>
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
