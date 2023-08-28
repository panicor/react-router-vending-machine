import React from "react";

import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <Link exact to="/twizzlers">Twizzlers</Link>
      <Link exact to="/crackers">Crackers</Link>
      <Link exact to="/soda">Soda</Link>
    </div>
  );
}

export default VendingMachine;
