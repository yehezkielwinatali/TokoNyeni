import { Link } from "react-router-dom";
import { useRef } from "react"; // <-- Add this line
import "../styles/shop.css";

function Shop() {
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
          <img style={{ width: "90px" }} src="/img/logo.png" alt="" />
        </Link>
        <div>
          <ul id="navbar" ref={navbarRef}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="active" >Shop</Link>
            </li>
            <li>
              <Link to="/blog" >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
        <h2>#shopnow</h2>
        <p>discover your new favorite outfit!</p>
      </section>


      <section id="product1">
        <div className="pro-container">
          {[...Array(8)].map((_, i) => (
            <div className="pro" key={`f${i}`}>
              <img src={`/img/products/f${i + 1}.jpg`} alt="" />
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
                  {"★★★★★".split("").map((_, s) => (
                    <i key={s} className="fas fa-star"></i>
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
            </div>
          ))}
        </div>

        <div className="pro-container">
          {[...Array(8)].map((_, i) => (
            <div className="pro" key={`n${i}`}>
              <img src={`/img/products/n${i + 1}.jpg`} alt="" />
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
                  {"★★★★★".split("").map((_, s) => (
                    <i key={s} className="fas fa-star"></i>
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
      

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-Mail Updates About Our Latest Update And
            <span> Special Offers</span>
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

export default Shop;
