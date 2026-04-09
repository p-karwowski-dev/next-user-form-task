"use client";

import { useRouter } from "next/navigation";

export default function UserListLi({
  fullName,
  userIdx,
}: {
  fullName: string;
  userIdx: number;
}) {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/users/${userIdx}`)}
      className="bg-gray-500/20 rounded-xl p-4 flex flex-col gap-1 cursor-pointer hover:bg-gray-500/40"
    >
      <p className="text-white font-medium">{fullName}</p>
    </li>
  );
}
