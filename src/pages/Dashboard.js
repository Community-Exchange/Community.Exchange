import React from "react";
// import ExchangePost from "../components/Forms/ExchangePost";
import ExchangeForm from "../components/Forms/ExchangeForm";

import Nav from "../components/Nav/Nav";

export default function Dashboard() {
  return (
    <div>
      
      {/* <ExchangePost /> */}
      <Nav/>
      <ExchangeForm/>
    </div>
  );
}
