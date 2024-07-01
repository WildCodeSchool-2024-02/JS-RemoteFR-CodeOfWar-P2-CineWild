import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
      </nav>
    </div>
  );
}
export default NavBar;
