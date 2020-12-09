import React from "react";
import { Link, NavLink } from "react-router-dom";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// css
import "../css/navBar.css";

// { user }
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">
        <div>Hobbyist</div>
      </Link>
      <div className="nav_lists">
        <ul>
          <li className="nav_item">
            <NavLink to="/categories">
              <FontAwesomeIcon icon={faListAlt} />
              <span className="nav_title">그룹 카테고리 찾기</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/new">
              <FontAwesomeIcon icon={faUsers} />
              <span className="nav_title">새 그룹 시작하기</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span className="nav_title">로그인</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/myPage">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span className="nav_title">마이페이지</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="nav_title">로그아웃</span>
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/register">
              <FontAwesomeIcon icon={faUserPlus} />
              <span className="nav_title">회원가입</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
