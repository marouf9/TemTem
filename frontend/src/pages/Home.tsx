import { Link } from "react-router";
import "./Style/home.css";
import logoTemTem from "../assets/logoTemTem.jpeg";
import Cartd from "../components/Cartd";
import Button from "../components/Button";

function Home() {
  return (
    <>
      <header className="topbar">
        <nav className="navbar">
          <Link to="/" className="logo">
            <span className="logo-blue">Tem</span>
            <span className="logo-green">Tem</span>
          </Link>

          <div className="nav-links">
            <Link to="/login">Login</Link>

            <Button label="Get Started" to="/register" />
          </div>
        </nav>
      </header>

      <main>
        <section className="imag">
          <img src={logoTemTem} alt="TemTem" />
        </section>

        <section className="hero">
         
          <div className="hero-content">

            <h1>Effortless QR queues for local businesses</h1>

            <p>
              Customers scan a QR code to join the line from their phones.
              You call them when ready. No crowded waiting areas, no hardware
              needed.
            </p>

            <div className="hero-actions">
              <Button label="Get Started" to="/register" />

              <a
                href="https://7682411285062839686.stitched.dev/frame.html?v=3#"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                View Live Demo
              </a>
            </div>
          </div>

          <div className="cartd-section">
            <Cartd
              description="STEP 01"
              title="1. Place QR Code"
              details="Print or display your generated queue code directly at your storefront or counter."
            />

            <Cartd
              description="STEP 02"
              title="2. Customers Scan & Wait"
              details="Guests view their live spot and estimated wait times on their mobile browser without downloading apps."
            />

            <Cartd
              description="STEP 03"
              title="3. Call Next in One Click"
              details="Tap to alert the next party when their table or order is ready for pickup or seating."
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;