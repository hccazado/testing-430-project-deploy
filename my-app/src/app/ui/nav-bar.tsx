"use client";
// import { useState } from "react";
import * as React from "react";

// interface NavBarProps {
// }

export default function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-brand">
              <a className="navbar-brand" href='/'></a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href='/'>Home</a></li>
              <li><a href='/catalog'>Catelog</a></li>
              <li><a href='/account'>Account</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}