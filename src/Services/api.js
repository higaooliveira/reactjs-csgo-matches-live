import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pandascore.co"
});

export const token = "Rp29B3J9fnOrrIkxgHLnSNs5NsZGu5n1ZbMa_Ij_76SWPOW1yoE";

export default api;
