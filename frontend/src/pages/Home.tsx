import { Link } from "react-router/internal/react-server-client";
import './Style/home.css';
import Button from "../components/Button";
function Home() {
  return (
   <header className="topbar">
  <nav className="navbar">
    <Link to="/" className="logo">
      TemTem
    </Link>

    <div className="nav-links">
      <Link to="/login">Login</Link>
      <Link to="/register" className="nav-button">
        <Button label="Get Started" />
      </Link>
    </div>
  </nav>
</header>
  );
}

export default Home;