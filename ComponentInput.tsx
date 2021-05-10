import React from "react";

export default ({ clase, tipo, valor, hint, funcion }) => (
  <input className={clase} type={tipo} value={valor} placeholder={hint} onClick={funcion} />
);
