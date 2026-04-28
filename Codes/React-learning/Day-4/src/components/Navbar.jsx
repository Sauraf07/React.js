import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ✅ TodoApp
        </Link>
        
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;