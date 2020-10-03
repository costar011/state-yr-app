import React from "react";
import { NavLink, Route } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/"></NavLink>

            <li>
              <NavLink to="/page1">page__01</NavLink>
            </li>

            <li>
              <NavLink to="/sleep">sleep</NavLink>
            </li>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
