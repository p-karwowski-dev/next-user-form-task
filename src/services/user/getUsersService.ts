import { promises as fs } from "fs";
import path from "path";
import { unstable_cache } from "next/cache";
import { User } from "../../types/user";

const DB_PATH = path.join(process.cwd(), "public", "users.json");

export const getUsersService = unstable_cache(
  async (): Promise<User[]> => {
    const raw = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(raw) as User[];
  },
  ["users"],
  { tags: ["users"] }
);
