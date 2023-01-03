import { ResponseType } from 'axios';

export type MediaTypes = 'multipart/form-data' | 'application/json';

export interface RequestConfig {
  media_type?: MediaTypes;
  response_type?: ResponseType;
  params?: any;
}
