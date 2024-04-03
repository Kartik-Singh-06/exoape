
import React, { useState, useEffect } from 'react';
import Work from './Work';
import WorkSection from './WorkSection';

const ManageWork = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px is the breakpoint for mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state based on window width
    };

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div>
      {isMobile ? <WorkSection /> : <Work />}
    </div>
  );
};

export default ManageWork;
