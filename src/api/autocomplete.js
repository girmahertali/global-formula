// src/api/autocomplete.js
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuggestions = async (query) => {
  const { data } = await axios.get(
    `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`
  );
  return data; // Assuming the API returns a list of suggestions
};

export const useAutocomplete = (query) => {
  return useQuery(["autocomplete", query], () => fetchSuggestions(query), {
    enabled: !!query,
  });
};
