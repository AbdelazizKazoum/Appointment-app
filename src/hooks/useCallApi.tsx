import React, { useEffect, useState } from "react";

const useCallApi = ({ getData }: any) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await getData();
      setData(res);
    })();
  }, []);

  return data;
};

export default useCallApi;