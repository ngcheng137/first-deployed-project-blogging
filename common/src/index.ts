import z from "zod"

export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})
export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})
export const createLogInput = z.object({
    title: z.string(),
    content: z.string()
})
export const updateLogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})



export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateLogInput = z.infer<typeof createLogInput>
export type UpdateLogInput = z.infer<typeof updateLogInput>