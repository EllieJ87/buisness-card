import logo from '../self-picture.jpg';
import React from "react";

export default function Header() {
  return (
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
  );
}
