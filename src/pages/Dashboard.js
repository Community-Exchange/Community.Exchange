import React from "react";
// import ExchangePost from "../components/Forms/ExchangePost";
import ExchangeForm from "../components/Forms/ExchangeForm";
import Navbar from "../components/Nav/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      {/* <ExchangePost /> */}
      <ExchangeForm/>
    </div>
  );
}
