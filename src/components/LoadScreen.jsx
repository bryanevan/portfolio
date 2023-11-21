import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const LoaderScreen = () => {
  const [loading] = useState(true);
  const [color] = useState("#420d63");

  return (
    <div className="sweet-loading h-screen w-full bg-slate-900/40 bg-center bg-cover bg-origin-border">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <RingLoader
          color={color}
          loading={loading}
          size={250}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default LoaderScreen;
