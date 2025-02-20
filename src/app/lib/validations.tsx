import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email format',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, { message: 'Password must have at least 6 characters' }),
});

const createUserFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  type: z.string(),
  registration_dt: z.string(),
});

export const validateCreateUserForm = createUserFormSchema.omit({ id: true });
