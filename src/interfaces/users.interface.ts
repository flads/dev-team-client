export interface User {
  id?: number;
  name?: string;
  gender?: string;
  birthdate?: string;
  age?: number;
  hobby?: string;
  level_id?: number;
}

export interface UsersAndCount {
  users: User[];
  count: number;
}
