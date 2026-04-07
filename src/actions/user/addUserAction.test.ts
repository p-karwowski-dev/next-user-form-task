import { describe, it, expect, vi, beforeEach } from "vitest";
import type { AddUserActionState } from "./addUserAction";

const addUserServiceMock = vi.hoisted(() => vi.fn());

vi.mock("../../services/user/addUserService", () => ({
  addUserService: addUserServiceMock,
}));

import { addUserAction } from "./addUserAction";

const prevState: AddUserActionState = {
  success: false,
  message: null,
  errors: null,
};

function makeFormData(data: Record<string, string | string[]>): FormData {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else {
      formData.append(key, value);
    }
  }
  return formData;
}

const validData = {
  fullName: "John Doe",
  age: "25",
  country: "US",
  interests: ["coding"],
};

describe("addUserAction", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns success when data is valid", async () => {
    addUserServiceMock.mockResolvedValue(undefined);

    const result = await addUserAction(prevState, makeFormData(validData));

    expect(result.success).toBe(true);
    expect(result.message).toBe("User added successfully!");
    expect(result.errors).toBeNull();
  });

  it("returns field errors when validation fails", async () => {
    const result = await addUserAction(
      prevState,
      makeFormData({ fullName: "John", age: "10", country: "", interests: [] })
    );

    expect(result.success).toBe(false);
    expect(result.errors).toBeTruthy();
    expect(addUserServiceMock).not.toHaveBeenCalled();
  });

  it("returns error for invalid fullName (single word)", async () => {
    const result = await addUserAction(
      prevState,
      makeFormData({ ...validData, fullName: "John" })
    );

    expect(result.success).toBe(false);
    expect(result.errors?.fullName).toBeTruthy();
  });

  it("returns error for age below 18", async () => {
    const result = await addUserAction(
      prevState,
      makeFormData({ ...validData, age: "16" })
    );

    expect(result.success).toBe(false);
    expect(result.errors?.age).toBeTruthy();
  });

  it("returns message when service throws", async () => {
    addUserServiceMock.mockRejectedValue(new Error("Write failed"));

    const result = await addUserAction(prevState, makeFormData(validData));

    expect(result.success).toBe(false);
    expect(result.message).toBe("Failed to save user. Please try again.");
  });
});
