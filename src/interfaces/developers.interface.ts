export interface Developer {
  id?: number;
  name?: string;
  gender?: string;
  birthdate?: string;
  age?: number;
  hobby?: string;
  level_id?: number;
}

export interface DevelopersAndCount {
  developers: Developer[];
  count: number;
}
