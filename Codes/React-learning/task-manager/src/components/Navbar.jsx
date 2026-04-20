import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">📝 Task Manager</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/add">Add Task</Link>
          <Link className="nav-link" to="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  )
}