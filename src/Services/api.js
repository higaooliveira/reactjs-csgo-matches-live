import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pandascore.co"
});

export const token = "ekzHVDfJdkOLoHy8FUUAEttRzmuwXgkMLXNT82KUAWYUUtdaOIA";

export default api;
