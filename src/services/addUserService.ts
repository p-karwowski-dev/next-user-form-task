import { promises as fs } from "fs";
import path from "path";
import { User } from "../types/user";

const DB_PATH = path.join(process.cwd(), "public", "users.json");

export async function addUserService(user: User): Promise<void> {
  const raw = await fs.readFile(DB_PATH, "utf-8");
  const users: User[] = JSON.parse(raw);
  users.push(user);
  await fs.writeFile(DB_PATH, JSON.stringify(users, null, 2));
}
