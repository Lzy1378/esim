import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.response.use(
  response => {
    if (response.data && response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data;
  },
  error => {
    console.error('There was an error fetching the data!', error);
    throw error;
  }
);

export default {
  get(url, config = {}) {
    return instance.get(url, config);
  },
  post(url, data, config = {}) {
    return instance.post(url, data, config);
  },
  // 添加发送二进制文件的方法
  postBinary(url, data, config = {}) {
    const binaryConfig = {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'multipart/form-data' // 修改为 multipart/form-data
      }
    };
    return instance.post(url, data, binaryConfig);
  },
  // 添加下载二进制文件的方法
  getBinary(url, config = {}) {
    const binaryConfig = {
      ...config,
      responseType: 'arraybuffer'
    };
    return instance.get(url, binaryConfig);
  }
  // 可以根据需要添加其他方法，如 put, delete 等
};