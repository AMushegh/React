import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";

const SecondaryContent = () => {
  const [count, setCount] = useState();

  const updateCount = useCallback((v) => {
    setCount(v);
  }, []);

  useEffect(() => {
    console.log("here");
    updateCount(0);
  }, [updateCount]);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => updateCount(count + 1)}>update</Button>
    </div>
  );
};

export default SecondaryContent;
