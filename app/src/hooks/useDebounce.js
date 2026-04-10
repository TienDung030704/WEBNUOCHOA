import { useEffect, useState } from "react";

function useDebounce(keyword, delay) {
  const [state, setState] = useState(keyword);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setState(keyword);
    }, delay);

    return () => clearTimeout(timerId);
  }, [keyword, delay]);

  return state;
}
export default useDebounce;
