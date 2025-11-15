import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ERROR":
      return { ...state, error: payload };
    case "IS_LOADING":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "IS_LOADING" });
    axios
      .get(url)
      .then((res) => dispatch({ type: "GET_DATA", payload: res.data }))
      .catch((err) => dispatch({ type: "ERROR", payload: err.message }))
      .finally(() => dispatch({ type: "IS_LOADING" }));
  }, [url]);
  return { ...state };
};

export default useFetch;
