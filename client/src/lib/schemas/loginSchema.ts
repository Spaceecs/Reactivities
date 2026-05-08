import { requiredString } from "./../util/util";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: requiredString("password"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
