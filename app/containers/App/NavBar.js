import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: lightgray;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 2px 2px 6px skyblue;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,207cca+0,207cca+24,207cca+39,207cca+39,2989d8+73,7db9e8+99 */
  background: #1e5799; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #1e5799 0%,
    #207cca 0%,
    #207cca 24%,
    #207cca 39%,
    #207cca 39%,
    #2989d8 73%,
    #7db9e8 99%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #1e5799 0%,
    #207cca 0%,
    #207cca 24%,
    #207cca 39%,
    #207cca 39%,
    #2989d8 73%,
    #7db9e8 99%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #1e5799 0%,
    #207cca 0%,
    #207cca 24%,
    #207cca 39%,
    #207cca 39%,
    #2989d8 73%,
    #7db9e8 99%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
`;

const StyledNavLink = styled(NavLink)`
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 1em;
  margin: 0 2em;
  width: 120px;
  font-weight: 200;
  -webkit-transition: background-color 0.5s; /* Safari */
  transition: background-color 0.5s;

  &:hover {
    background-color: skyblue;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  font-weight: bold;
`;

const NavBar = () => {
  const activeStyle = {
    fontWeight: '450',
    color: 'rgb(7, 196, 98)',
  };

  return (
    <div>
      <Nav>
        <StyledNavLink exact to="/" activeStyle={activeStyle}>
          Home
        </StyledNavLink>
        <StyledNavLink exact to="/add" activeStyle={activeStyle}>
          Add
        </StyledNavLink>
        <StyledNavLink exact to="/phrases" activeStyle={activeStyle}>
          Show All
        </StyledNavLink>
        <Hero>The Phrases Store</Hero>
      </Nav>
    </div>
  );
};

export default NavBar;
