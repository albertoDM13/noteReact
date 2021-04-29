import React from "react";

export default ({ clase, tipo, valor }) => (
  <input className={clase} type={tipo} value={valor} />
);
