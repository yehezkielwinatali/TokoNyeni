import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

function Contact() {
  const navbarRef = useRef(null);

  const openNavbar = () => {
    navbarRef.current.classList.add("active");
  };
  const closeNavbar = () => {
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <section id="header">
        <Link to="/" className="logo">
          <img src="/img/logo.png" alt="logo" style={{ width: "90px" }} />
        </Link>
        <div>
          <ul id="navbar" ref={navbarRef}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="active">
                Contact
              </Link>
            </li>
            <a href="#" id="close" onClick={closeNavbar}>
              <i className="far fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart" id="cart-icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          <i id="bar" className="fas fa-outdent" onClick={openNavbar}></i>
        </div>
      </section>

      <section id="page-header" className="blog-header">
        <h2>#let's talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2> Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <i className="fal fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fal fa-phone-alt"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fal fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.00pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2509566453436!2d127.07493969999999!3d37.5491508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4d0720eecc1%3A0x1a7ad975c6b5e4eb!2sSejong%20University!5e0!3m2!1sen!2skr!4v1748940456351!5m2!1sen!2skr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button>Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="img/people/1.png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Manager
              <br /> Phone: + 000 123 000 77 88
              <br /> Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="img/people/2.png" alt="" />
            <p>
              <span>William Smith</span> Senior Marketing Manager
              <br /> Phone: + 000 123 000 77 88
              <br /> Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="img/people/3.png" alt="" />
            <p>
              <span>Emma Stone</span> Senior Marketing Manager
              <br /> Phone: + 000 123 000 77 88
              <br /> Email: contact@example.com
            </p>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-Mail Updates About Our Latest Update And
            <span>Special Offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your E-Mail Address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img
            className="logo"
            style={{ width: "150px" }}
            src="/img/logo.png"
            alt=""
          />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> Sejong University
          </p>
          <p>
            <strong>Phone: </strong> +82 9242 3343 / +62 8345 2423
          </p>
          <p>
            <strong>Hours: </strong>09:00 - 21:00, Monday - Sunday
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Chart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Orders</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store / Google Play</p>
          <div className="row">
            <img src="/img/pay/app.jpg" alt="" />
            <img src="/img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="/img/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p>© 2025. Wong Liyo Ngerti Opo Corporation</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;
