import axios from "axios";

export type APIResponseType = {
  errorText: string
  info: string
  yourBody: {
    success: boolean
  }
  yourQuery: {}
};

const axiosInstance = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com/",
});

export const API = {
  auth(success: boolean) {
    return axiosInstance.post<APIResponseType>("auth/test", {success});
  }
};