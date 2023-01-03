export interface User {
  id?: number;
  name?: number;
  gender?: number;
  birthdate?: number;
  age?: number;
  hobby?: number;
  level_id?: number;
}

export interface UsersAndCount {
  users: User[];
  count: number;
}
