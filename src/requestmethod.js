import axios from "axios";
const BASE_URL = "https://apidev.phantomal.site";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
