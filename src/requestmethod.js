import axios from "axios";
<<<<<<< HEAD
const BASE_URL = "https://apidev.phantomal.site";
=======
const BASE_URL =
  "https://thesisloadbalancer-482548701.ap-southeast-2.elb.amazonaws.com";
>>>>>>> 886f6f6 (lastcommit)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
