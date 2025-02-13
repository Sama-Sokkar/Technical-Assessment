import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function PageNav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/" className={isActive("/") ? "active" : ""}>
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/ProductListing" className={isActive("/ProductListing") ? "active" : ""}>
              Product Listing
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/ProductDetails" className={isActive("/ProductDetails") ? "active" : ""}>
              Product Details
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/CreateProduct" className={isActive("/CreateProduct") ? "active" : ""}>
              Create Product
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  );
}

export default PageNav;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  color: navy;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover, &.active {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }

  &.active {
    font-weight: 700;
  }
`;