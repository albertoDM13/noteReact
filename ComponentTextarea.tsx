import React from 'react'

export default ({clase,code, info})=>(
  <textarea id={code} class={clase} placeholder={info}></textarea>
);