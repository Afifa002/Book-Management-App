import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Header;
