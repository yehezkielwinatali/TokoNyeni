import { Link } from "react-router-dom";
import "../styles/about.css";

function About() {
  return (
    <>
      <section id="header">
        <Link to="/" className="logo">
          <img src="/img/logo.png" alt="logo" style={{ width: "90px" }} />
        </Link>
        <div>
          <ul id="navbar">
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
              <Link to="/about" className="active">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li id="lg-bag">
              <Link to="/cart" id="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="far fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart" id="cart-icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>

      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="/img/blog/b1.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard…
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </a>
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

export default About;
