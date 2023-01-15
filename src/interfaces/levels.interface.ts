export interface Level {
  id?: number;
  name?: string;
  users_count?: number;
}

export interface LevelsAndCount {
  levels: Level[];
  count: number;
}
