import axios from "axios";

export  interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "27207f1f7cd9496ca2058dd79c013bb9",
  },
});

