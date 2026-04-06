"use server";

import { User, UserSchema } from "../types/user";
import { addUserService } from "../services/addUserService";

type UserError = Partial<Record<keyof User, string>> | null;

export type AddUserActionState = {
  success: boolean;
  message: string | null;
  errors: UserError;
  data?: Partial<User>;
};

export async function addUserAction(_: AddUserActionState, formData: FormData) {
  const rawData = {
    ...Object.fromEntries(formData.entries()),
    interests: formData.getAll("interests"),
  };
  const validatedFields = UserSchema.safeParse(rawData);

  if (!validatedFields.success) {
    const errors = Object.fromEntries(
      validatedFields.error.issues.map((issue) => [
        issue.path[0],
        issue.message,
      ])
    ) as UserError;
    return {
      success: false,
      message: null,
      errors,
      data: rawData as Partial<User>,
    };
  }

  try {
    await addUserService(validatedFields.data);
  } catch {
    return {
      success: false,
      message: "Failed to save user. Please try again.",
      errors: null,
    };
  }

  return { success: true, message: "User added successfully!", errors: null };
}
