import React from "react";
import { NavLink, Route } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/"></NavLink>

            <NavLink to="/want"></NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
