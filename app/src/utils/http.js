import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

const _send = async (method, path, data, config) => {
  const response = await httpClient.request({
    ...config,
    method,
    url: path,
    data,
  });

  return response.data;
};

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// httpClient.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.set("Authorization", `Bearer ${accessToken}`);
//   }

//   return config;
// });

const get = async (path, config) => {
  return _send("get", path, null, config);
};

const post = async (path, data, config) => {
  return _send("post", path, data, config);
};

const put = async (path, data, config) => {
  return _send("put", path, data, config);
};

const patch = async (path, data, config) => {
  return _send("patch", path, data, config);
};

const del = async (path, config) => {
  return _send("delete", path, null, config);
};

const http = { get, post, put, patch, del };
export default http;
