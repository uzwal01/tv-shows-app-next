import React, { useEffect, useState } from 'react'

const useResponsiveLimit = () => {
  const [limit, setLimit] = useState(12);  //default for large screens

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      if(width < 640) {
        setLimit(6);
      }
      else {
        setLimit(12);
      }
    }
    updateLimit();  

  window.addEventListener('resize', updateLimit);
  return () => window.removeEventListener('resize', updateLimit)
  },[]);

  
  return (
    limit
  )
}

export default useResponsiveLimit
