import { promises as fs } from "fs";
import path from "path";
import { User } from "../../types/user";
import { getUsersService } from "./getUsersService";

const DB_PATH = path.join(process.cwd(), "public", "users.json");

export async function addUserService(user: User): Promise<void> {
  const users = await getUsersService();
  users.push(user);
  await fs.writeFile(DB_PATH, JSON.stringify(users, null, 2));
}
