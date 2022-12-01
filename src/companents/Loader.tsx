import React from "react";

export function Loder() {
  return (
    <>
      <p className='text-center'>Loading.....</p>

      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>

  )
}