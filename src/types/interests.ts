import { z } from "zod";
import { INTEREST_OPTIONS } from "../constants/interests";

const interest = INTEREST_OPTIONS.map((o) => o.value) as [string, ...string[]];

// Zod
export const InterestSchema = z.array(z.enum(interest)).min(1, {
  error: () => ({
    message: "Please select at least one interest from the list.",
  }),
});

// TS
export type Interest = z.infer<typeof InterestSchema>;
