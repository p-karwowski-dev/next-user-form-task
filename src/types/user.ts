import { z } from "zod";
import { CountrySchema } from "./countries";
import { InterestSchema } from "./interests";

export const UserSchema = z.object({
  fullName: z.string().refine((val) => val.trim().split(/\s+/).length >= 2, {
    message: "Full name must contain at least two words",
  }),
  age: z.coerce.number().min(18, "18+ age is required"),
  country: CountrySchema,
  interests: InterestSchema,
});

export type User = z.infer<typeof UserSchema>;
