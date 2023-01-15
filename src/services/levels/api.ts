import { get } from '../request';
import { LevelsAndCount } from '../../interfaces/levels.interface';
import { RequestConfig } from '../../interfaces/request.interface';

export const getAll = async (
  config: RequestConfig = {}
): Promise<LevelsAndCount> => {
  return get(config, 'levels');
};
