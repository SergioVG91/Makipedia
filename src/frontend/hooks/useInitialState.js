import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [estado, setEstado] = useState();
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())

      .then((data) => setEstado(data));
  }, []);
  return estado;
};

export default useInitialState;
