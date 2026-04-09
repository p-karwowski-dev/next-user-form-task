import { getUsersService } from "./getUsersService";
import { User } from "../../types/user";

export async function getUserByIdService(
  userIdx: number
): Promise<User | null> {
  const users = await getUsersService();
  return users[userIdx] ?? null;
}
