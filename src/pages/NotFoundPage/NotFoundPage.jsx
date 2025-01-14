import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <NavLink to="/">
            <button>
              Back to home <i className="far fa-hand-point-right" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
