import { z } from "zod";

export const schema = z.object({
  userEmail: z.string().email(),
  userPassword: z.string().min(4),
});

export type FormData = z.infer<typeof schema>;
