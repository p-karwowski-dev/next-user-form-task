import { notFound } from "next/navigation";
import { getUserByIdService } from "../../../services/user/getUserByIdService";

export default async function Page({
  params,
}: {
  params: Promise<{ userIdx: string }>;
}) {
  const { userIdx } = await params;
  const user = await getUserByIdService(Number(userIdx));

  if (!user) notFound();

  return (
    <div className="flex flex-col gap-4 min-w-sm">
      <h1 className="text-2xl">User Details</h1>
      <div className="bg-gray-500/20 rounded-xl p-6 flex flex-col gap-3">
        <p className="text-white text-lg font-medium">{user.fullName}</p>
        <p className="text-gray-300">Age: {user.age}</p>
        <p className="text-gray-300">Country: {user.country}</p>
        <p className="text-gray-300">Interests: {user.interests.join(", ")}</p>
      </div>
    </div>
  );
}
