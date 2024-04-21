import { z } from "zod";

export const phoneNumberSchema = z.string().trim().min(10).max(15);

export type TphoneNumberSchema = z.infer<typeof phoneNumberSchema>;
