import { get, post } from '../request';
import { RequestConfig } from '../../interfaces/request.interface';
import {
  Developer,
  DevelopersAndCount,
} from '../../interfaces/developers.interface';

export const getAll = async (
  config: RequestConfig = {}
): Promise<DevelopersAndCount> => {
  return get(config, 'developers');
};

export const create = async (data: Developer): Promise<Developer> => {
  return post({}, 'developers', data);
};
