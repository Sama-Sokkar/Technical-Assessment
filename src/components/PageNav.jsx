import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
function PageNav() {
  const location = useLocation();
  const checkIsActive = (path) => location.pathname === path;
  return (
    <Wrapper>
      <nav className="nav">
        <ul>
          <li className={checkIsActive("/") ? "active" : ""}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={checkIsActive("/ProductListing") ? "active" : ""}>
            <NavLink to="/ProductListing">Product Listing</NavLink>
          </li>
          <li className={checkIsActive("/ProductDetails") ? "active" : ""}>
            <NavLink to="/ProductDetails">Product Details</NavLink>
          </li>
          <li className={checkIsActive("/CreateProduct") ? "active" : ""}>
            <NavLink to="/CreateProduct">Create Product</NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default PageNav;

const Wrapper = styled.div`
  .nav {
    margin-bottom: 1rem;
  }

  .nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    background-color: beige;
    border-radius: 7px;
    margin: 0rem;
    padding: 0rem;
  }

  .nav a:hover {
    transform: scale(1.07);
  }

  .nav a {
    transition: transform 0.3s ease;
  }
  .nav a {
    display: block;
    color: navy;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0.8rem 0;
  }
  .active {
    text-decoration: underline;
    transform: scale(1.06);
  }
`;
