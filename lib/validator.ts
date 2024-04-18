import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "description must be at least 3 characters")
    .max(100, "description must be less than 100 characters"),
  Location: z
    .string()
    .min(3, "location must be at least 3 characters")
    .max(400, "Location must be less 400 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
