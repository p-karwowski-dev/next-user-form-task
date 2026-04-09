import { getUsersService } from "../../services/user/getUsersService";
import UserListLi from "./components/UserListLi";

export default async function Page() {
  const users = await getUsersService();

  return (
    <div className="flex flex-col gap-4 min-w-sm">
      <h1 className="text-2xl">All Users</h1>
      {users.length === 0 ? (
        <p className="text-gray-400">No users found.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {users.map((user, i) => (
            <UserListLi key={i} userIdx={i} fullName={user.fullName} />
          ))}
        </ul>
      )}
    </div>
  );
}
