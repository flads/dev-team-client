import { get, post } from '../request';
import {
  Level,
  LevelForSelect,
  LevelsAndCount,
} from '../../interfaces/levels.interface';
import { RequestConfig } from '../../interfaces/request.interface';

export const getAll = async (
  config: RequestConfig = {}
): Promise<LevelsAndCount> => {
  return get(config, 'levels');
};

export const getAllForSelect = async (
  config: RequestConfig = {}
): Promise<LevelForSelect[]> => {
  return get(config, 'levels/for-select');
};

export const create = async (data: Level): Promise<Level> => {
  return post({}, 'levels', data);
};
