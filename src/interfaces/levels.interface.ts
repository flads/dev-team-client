export interface Level {
  id?: number;
  name?: string;
  developers_count?: number;
}

export interface LevelsAndCount {
  levels: Level[];
  count: number;
}
