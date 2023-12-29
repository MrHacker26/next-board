'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'

export type State = {
  errors: {
    title?: string[]
  }
  message?: string | null
}

const createBoardSchema = z.object({
  title: z.string().min(3, {
    message: 'Title must be at least 3 characters long',
  }),
})

export async function create(prevState: State, formData: FormData) {
  const validatedFields = createBoardSchema.safeParse({
    title: formData.get('title'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing required fields',
    }
  }

  const { title } = validatedFields.data

  try {
    await prisma.board.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      message: 'Something went wrong',
    }
  }

  revalidatePath('/organization/org_2a9qvLnEHQcubgPnF9Gnx6EGYG9')
  redirect('/organization/org_2a9qvLnEHQcubgPnF9Gnx6EGYG9')
}
