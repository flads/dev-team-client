import { get } from '../request';
import { RequestConfig } from '../../interfaces/request.interface';
import { UsersAndCount } from '../../interfaces/users.interface';

export const getAll = async (
  config: RequestConfig = {}
): Promise<UsersAndCount> => {
  return get(config, 'users');
};
