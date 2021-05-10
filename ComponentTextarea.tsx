import React from 'react'

export default ({clase, code, info, valor})=>(
  <textarea 
      id={code} 
      class={clase} 
      placeholder={info}
    ></textarea>
);