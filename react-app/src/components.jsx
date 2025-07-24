import React from "react";
export  function Nav() {
  return <nav>this is the nav section</nav>;
}
export function Main() {
  return (
    <main>
      this is the main section
      <ShowMsg />
    </main>
  );
}

export function Footer() {
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
