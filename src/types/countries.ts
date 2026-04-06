import { z } from "zod";
import { COUNTRY_OPTIONS } from "../constants/countries";

const countries = COUNTRY_OPTIONS.map((o) => o.value) as [string, ...string[]];

// Zod
export const CountrySchema = z.enum(countries, {
  error: () => ({ message: "Please select a country from the list." }),
});

// TS
export type Counties = z.infer<typeof CountrySchema>;
