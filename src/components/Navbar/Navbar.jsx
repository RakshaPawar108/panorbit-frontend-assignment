import { Container } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = ({ userId }) => {
  return (
    <Container className="nav">
      <NavLink className="navbar-link" to={`/${userId}`}>
        Profile
      </NavLink>
      <div className="line"></div>
      <NavLink className="navbar-link" to={`/${userId}/posts`}>
        Posts
      </NavLink>
      <div className="line"></div>
      <NavLink className="navbar-link" to={`/${userId}/gallery`}>
        Gallery
      </NavLink>
      <div className="line"></div>
      <NavLink className="navbar-link" to={`/${userId}/todos`}>
        ToDo
      </NavLink>
    </Container>
  );
};
