import AppConfig from './config';
import axios, {
  AxiosRequestConfig,
  Method,
  RawAxiosRequestHeaders,
} from 'axios';
import { ObjectLiteral } from '../interfaces/object-literal';
import { RequestConfig } from '../interfaces/request.interface';

const request = (
  config: RequestConfig,
  url: string,
  method: Method,
  data: any = null
) => {
  const headers = {
    'Content-Type': config.media_type || 'application/json',
  } as RawAxiosRequestHeaders;

  const axiosRequestConfig: AxiosRequestConfig = {
    method,
    url: `${AppConfig.api.url}/${url}`,
    headers,
  };

  if (config.params) {
    axiosRequestConfig.params = config.params;
  }

  if (config.response_type) {
    axiosRequestConfig.responseType = config.response_type;
  }

  if (data) {
    axiosRequestConfig.data = data;
  }

  return axios(axiosRequestConfig);
};

export const get = async (config: RequestConfig, url: string) => {
  try {
    const response = await request(config, url, 'get');

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (
  config: RequestConfig,
  url: string,
  data: ObjectLiteral
) => {
  try {
    const response = await request(config, url, 'post', data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (
  config: RequestConfig,
  url: string,
  data: ObjectLiteral
) => {
  try {
    const response = await request(config, url, 'put', data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const _delete = async (config: RequestConfig, url: string) => {
  try {
    const response = await request(config, url, 'delete');

    return response.data;
  } catch (error) {
    throw error;
  }
};
