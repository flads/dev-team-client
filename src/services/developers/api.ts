import { get } from '../request';
import { RequestConfig } from '../../interfaces/request.interface';
import { DevelopersAndCount } from '../../interfaces/developers.interface';

export const getAll = async (
  config: RequestConfig = {}
): Promise<DevelopersAndCount> => {
  return get(config, 'developers');
};
