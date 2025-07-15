/* eslint-disable react-refresh/only-export-components */
import React from "react";

import { createRoot } from "react-dom/client";

function Nav() {
  return <nav>this is the nav section</nav>;
}
function Main() {
  return (
    <main>
      this is the main section
      <ShowMsg />
    </main>
  );
}

function Footer() {
  return <footer>this is the footer section</footer>;
}
function ShowMsg() {
  return (
    <>
      <h1 className="text-2xl font-bold m-1 text-white ">Hello from mohit </h1>
      <p className=" font-semibold   m-1 text-white ">How are you?</p>
    </>
  );
}

createRoot(document.querySelector("#root")).render(
  <>
    <Nav />
    <Main />

    <Footer />
  </>
);
