import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// Navigator with { user }
const NavBar = ({ user }) => {
  // return
  return (
    <NavContainer>
      <Link to="/home">
        <Logo src="/logo.png" alt="logo" />
      </Link>
      <MenuCon>
        <Menu>
          <NavLink to="/categories">
            <FontAwesomeIcon icon={faListAlt} />
            <Title>그룹 카테고리 찾기</Title>
          </NavLink>
        </Menu>
        <Menu>
          <NavLink to={user ? "/createNewGroup" : "/login"}>
            <FontAwesomeIcon icon={faUsers} />
            <Title>새 그룹 시작하기</Title>
          </NavLink>
        </Menu>
        {user && (
          <>
            <Menu>
              <NavLink to="/myPage">
                <FontAwesomeIcon icon={faSignInAlt} />
                <Title>마이페이지</Title>
              </NavLink>
            </Menu>
            <Menu>
              <NavLink to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <Title>로그아웃</Title>
              </NavLink>
            </Menu>
          </>
        )}
        {!user && (
          <>
            <Menu>
              <NavLink to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
                <Title>로그인</Title>
              </NavLink>
            </Menu>
            <Menu>
              <NavLink to="/register">
                <FontAwesomeIcon icon={faUserPlus} />
                <Title>회원가입</Title>
              </NavLink>
            </Menu>
          </>
        )}
      </MenuCon>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: transparent;
`;

const Logo = styled.img`
  width: 250px;
  margin: -15px;
  overflow: hidden;
`;

const MenuCon = styled.ul`
  display: flex;
  list-style: none;
`;

const Menu = styled.li`
  margin-right: 10px;
  padding: 7px 14px;

  &:hover {
    transition: 0.5s;
    background-color: #f38181;
    border-radius: 5px;
  }

  & svg {
    color: #36454f;
  }
`;

const Title = styled.span`
  margin-left: 3px;
  color: #36454f;
  transition: 0.5s;
`;

export default NavBar;
