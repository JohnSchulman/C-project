import { LevelEnriched } from "./level";
import { Role } from "./role";

export type User = {
  id: number;
  firstname: string;
  lastname: string;
};

export type UserEnriched = User & { roles: Role[] } & {
  levels: LevelEnriched[];
};
