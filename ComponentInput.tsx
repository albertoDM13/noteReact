import React from "react";

export default ({ clase, tipo, valor, hint }) => (
  <input className={clase} type={tipo} value={valor} placeholder={hint} />
);
