import React, { useState, useEffect } from "react";
import LoadScreen from "./LoadScreen";

const HigherOrderComponent = (WrappedComponent) => {
  const WithLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate asynchronous loading process (e.g., fetching data, etc.)
      const fetchData = async () => {
        // Simulate a delay (you can replace this with your actual data fetching logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // After the delay, set loading to false
        setLoading(false);
      };

      fetchData();
    }, []);

    return <div>{loading ? <LoadScreen /> : <WrappedComponent />}</div>;
  };

  return WithLoader;
};

export default HigherOrderComponent;
