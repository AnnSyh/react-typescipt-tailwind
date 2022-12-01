import React from "react";

import { Watch } from 'react-loader-spinner'

export function Loder() {
  return (
    <div className="justify-center" style={{flexDirection:'column',alignItems:'center',display:'flex'}}>
      <p className='text-center'>Loading.....</p>

      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        // wrapperClassName=""
        visible={true}
      />

    </div>

  )
}