import axios, {
  type InternalAxiosRequestConfig,
  AxiosResponse,
  Method
} from 'axios';
import { message } from 'ant-design-vue';
import storage from 'store';
import router from '../router/index';

interface IParams {
  url: string;
  method: Method;
  data?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_SOME_APP_PROXY,
  timeout: import.meta.env.VITE_SOME_TIME_OUT
});

const errorHandle = (error: any) => {
  message.error('服务器内部错误，请联系管理员~');
  return Promise.reject(error);
};

export default <T = any>(
  params: IParams,
  auth: boolean = false
): Promise<T> => {
  // 添加请求拦截器
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const isAuthorization = auth
      ? `Bearer ${storage.get('token')}`
      : btoa(import.meta.env.VITE_SOME_AUTH_KEY);
    Object.assign(config.headers, {
      Authorization: isAuthorization,
      ...params.headers
    });
    return config;
  }, errorHandle);

  // 添加响应拦截器
  instance.interceptors.response.use((response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      if (data.code === 0) {
        return response.data.data;
      } else {
        if (data.msg === 'token expire') {
          const token = storage.get('token');
          token && storage.remove('token');
          router.replace({ path: '/403' });
        } else {
          throw '服务异常！！！';
        }
      }
    }
  }, errorHandle);

  return instance(params) as Promise<T>;
};
