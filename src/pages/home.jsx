import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
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
        <a href="#" className="logo">
          <img src="/img/logo.png" alt="logo" style={{ width: "90px" }} />
        </a>
        <div>
          <ul id="navbar" ref={navbarRef}>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li id="lg-bag">
              <Link to="/cart" id="cart-icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
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

      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>

      <section id="feature" className="section-p1">
        {[
          "freeshipping.png",
          "limited.png",
          "24hourscs.png",
          "original.jpg",
          "discount.png",
        ].map((src, i) => (
          <div className="fe-box" key={i}>
            <img
              src={`/img/features/${src}`}
              alt="pic"
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection 25</p>
        <div className="pro-container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
            <div className="pro" key={`f${i}`}>
              <img src={`/img/products/f${n}.jpg`} alt="" />
              <div className="desc">
                <span>
                  {
                    [
                      "Adinda",
                      "Adinda",
                      "Adios",
                      "Adinda",
                      "Naiki",
                      "M&H",
                      "LuluOrange",
                      "Trasher",
                    ][i]
                  }
                </span>
                <h5>
                  {
                    [
                      "Baju Cah Yapping",
                      "Baju Mbois",
                      "Baju Bali Sangar",
                      "Baju Kembang Desa",
                      "Baju Cah Ganteng",
                      "Outer Penjoget Handal",
                      "Celana Nyeni Berkelas",
                      "Baju Slay",
                    ][i]
                  }
                </h5>
                <div className="star">
                  {"★★★★★".split("").map((s, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>
                  {
                    [`$78`, `$63`, `$95`, `$105`, `$88`, `$59`, `$173`, `$52`][
                      i
                    ]
                  }
                </h4>
              </div>
              <a href="#">
                <i className="fal fa-shopping-cart cart"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - For All Products !
        </h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection 25</p>
        <div className="pro-container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
            <div className="pro" key={`n${i}`}>
              <img src={`/img/products/n${n}.jpg`} alt="" />
              <div className="desc">
                <span>
                  {
                    [
                      "Adinda",
                      "Adinda",
                      "Adios",
                      "Adinda",
                      "Naiki",
                      "M&H",
                      "LuluOrange",
                      "Trasher",
                    ][i]
                  }
                </span>
                <h5>
                  {
                    [
                      "Baju Cah Yapping",
                      "Baju Mbois",
                      "Kemeja Polos Anti Mbolos",
                      "Kemeja Kembang Kembangan",
                      "Kemeja Partai",
                      "Celana Penari Sangar",
                      "Kemeja Nyeni Berkelas",
                      "Kemeja Joh",
                    ][i]
                  }
                </h5>
                <div className="star">
                  {"★★★★★".split("").map((s, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>
                  {
                    [`$78`, `$63`, `$95`, `$105`, `$88`, `$59`, `$173`, `$52`][
                      i
                    ]
                  }
                </h4>
              </div>
              <a href="#">
                <i className="fal fa-shopping-cart cart"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>
            Dress yourself in the best clothes from our Summer Collection 25
          </span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <span>Don't miss out our new collection</span>
          <button className="white">Learn More</button>
        </div>
      </section>

      <section id="banner3">
        {[
          "Seasonal Sale",
          "Toko Nyeni New Collection",
          "New T-Shirts Collection",
        ].map((title, i) => (
          <div key={i} className={`banner-box banner-box${i > 0 ? i + 1 : ""}`}>
            <h2>{title}</h2>
            <h3>
              {
                [
                  "Winter Collection -75% Off",
                  "Spring/Summer 2025",
                  "New Arrivals",
                ][i]
              }
            </h3>
          </div>
        ))}
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-Mail Updates About Our Latest Update And{" "}
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
          <a href="#">
            <img
              className="logo"
              style={{ width: "150px" }}
              src="/img/logo.png"
              alt=""
            />
          </a>
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
              {["facebook", "twitter", "instagram", "pinterest", "youtube"].map(
                (net, i) => (
                  <i key={i} className={`fab fa-${net}`}></i>
                )
              )}
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          {[
            "About us",
            "Delivery Information",
            "Privacy Policy",
            "Terms & Conditions",
            "Contact us",
          ].map((item, i) => (
            <a key={i} href="#">
              {item}
            </a>
          ))}
        </div>

        <div className="col">
          <h4>My Account</h4>
          {[
            "Sign In",
            "View Chart",
            "My Wishlist",
            "Track My Orders",
            "Help",
          ].map((item, i) => (
            <a key={i} href="#">
              {item}
            </a>
          ))}
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

export default Home;
