import React from "react";
import { Link } from 'react-router-dom';
import '../css/s.css';
import '../css/icons.css';
import '../css/contact.css'; 
import logo from '../images/lo.jpg';
import f1 from '../images/drinks.png';
import f2 from '../images/D.jpg';
import f3 from '../images/sal.png';
import f4 from '../images/ll.jpg';
import c1 from '../images/sher.png';
import c2 from '../images/tr.jpg';
import c3 from '../images/ana.jpg';
import c4 from '../images/henry.png';



function Main() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg sticky-top text-center" id="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand logo">
              <img src={logo} alt="lo.jpg" height="40 rem" width="50rem" className="rounded-5" />
              <h4 className="mb-0 dark"> Delicacy</h4>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">Menu</Link>
                </li>
                <li className="nav-item">
                  <a href="#review" className="nav-link">Reviews</a>
                </li>
              </ul>
              <Link to="#signup" className="btn btn-brand ms-lg-3 rounded-1">Sign-up</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="homepage" id="home">
        <div className="home-text">
          <h1>Welcome to Sherish Delicacy</h1>
          <p>Where your health is our top priority.</p>
          <span>Delicacy serves the most finest and delicious recipes. </span>
        </div>
      </section>

      <section className="about" id="about">
        <img src={logo} alt="lo.jpg" />
        <div className="about-text">
          <span>About Us</span>
          <p>Sherish menu is all organic and aims to inspire people to continue living a healthy lifestyle.</p>
          <p>Through this site, we aim to reach thousands of people and inspire them to live a healthier lifestyle.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="heading">
          <h1>Best Features </h1>
          <Link to="/menu" className="btn">Order Now</Link>
        </div>

        <div className="menu-img">
          <div className="gallery">
            <a href="drinks.png" target="_blank">
              <img src={f1} alt="Sweetened Lemonade" />
            </a>
            <div className="desc">Sweetened Lemoberry </div>
          </div>
        </div>

        <div className="menu-img">
          <div className="gallery">
            <a href="D.jpg" target="_blank">
              <img src={f2} alt="Black Widow Forest" />
            </a>
            <div className="desc">Black Widow Forest</div>
          </div>
        </div>

        <div className="menu-img">
          <div className="gallery">
            <a href="sal.png" target="_blank">
              <img src={f3} alt="Saladine" />
            </a>
            <div className="desc">Saladine</div>
          </div>
        </div>

        <div className="menu-img">
          <div className="gallery">
            <a href="ll.jpg" target="_blank">
              <img src={f4} alt="Vegieballs" />
            </a>
            <div className="desc">Vegieballs</div>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h2>Why Customers Love Us?</h2>
        <div className="reviews-container">
          <div className="box">
            <i className='bx bxs-quote-alt-left' ></i>
            <div className="stars">
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star-half' ></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
            <div className="review-profile">
              <img src={c1} alt="sher.png" />
              <h3>Sherly Atillo</h3>
            </div>
          </div>

          <div className="box">
            <i className='bx bxs-quote-alt-left' ></i>
            <div className="stars">
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star-half' ></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
            <div className="review-profile">
              <img src={c2} alt="tr.jpg" />
              <h3>Trisha Boneo</h3>
            </div>
          </div>

          <div className="box">
            <i className='bx bxs-quote-alt-left' ></i>
            <div className="stars">
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star-half' ></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
            <div className="review-profile">
              <img src={c3} alt="ana.jpg" />
              <h3>Ana Marie</h3>
            </div>
          </div>

          <div className="box">
            <i className='bx bxs-quote-alt-left' ></i>
            <div className="stars">
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star' ></i>
              <i className='bx bxs-star-half' ></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
            <div className="review-profile">
              <img src={c4} alt="henry.png" />
              <h3>Henry</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="signup" id="signup">
        <form action="/action_page.php">
          <h2>Register Form</h2>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input className="input-field" type="text" placeholder="Username" name="usrnm" />
          </div>
          <div className="input-container">
            <i className="fas fa-envelope icon"></i>
            <input className="input-field" type="text" placeholder="Email" name="email" />
          </div>
          <div className="input-container">
            <i className="fa fa-key icon"></i>
            <input className="input-field" type="password" placeholder="Password" name="psw" />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      </section>

      <section className="footer" id="footer">
        <div className="footer-box">
          <p>Cagayan, Barangay 25 <br />Bldg 2</p>
          <div className="social">
            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
            <a href="https://www.facebook.com/" className="fa fa-twitter"></a>
            <a href="https://www.facebook.com/" className="fa fa-youtube"></a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Useful Links</h2>
          <a href="/About">Payment & Tax</a>
          <a href="/About">Terms Of Use</a>
          <a href="/About">My Blog</a>
          <a href="/About">Return Policy</a>
        </div>

        <div className="footer-box">
          <h2>Newsletter</h2>
          <p>Get 10% Discount with Email Newsletter</p>
          <form action="">
            <i className='bx bxs-envelope-open'></i>
            <input type="email" name="" id="" placeholder="Enter your Email" />
            <i className='bx bx-arrow-back bx-rotate-180'></i>
          </form>
        </div>
      </section>

      <div className="copyright">
        <p>&#169; SheTrish All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Main;