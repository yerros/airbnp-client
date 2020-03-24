import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "./Alert";

export default function Layout(props) {
  return (
    <div>
      <Header type={props.header} />
      <Alert />
      <main id="content">{props.children}</main>
      <Footer />
    </div>
  );
}
