import { format, formatDistanceToNow, type DateArg } from "date-fns";
import z from "zod";

export function formatDate(date: DateArg<Date>) {
  return format(date, "dd MMM yyyy h:mm a");
}

export function timeEgo(date: DateArg<Date>) {
  return formatDistanceToNow(date) + " ego";
}

export const requiredString = (fieldName: string) =>
  z
    .string({ error: `${fieldName} is required` })
    .min(1, { error: `${fieldName} is required` });
