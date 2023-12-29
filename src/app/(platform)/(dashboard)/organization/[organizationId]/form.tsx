'use client'

import FormInput from './form-input'
import FormButton from './form-button'
import { createBoard } from '@/actions/create-board'
import { useAction } from '@/hooks/use-action'
import { FormSubmit } from '@/components/form/form-submit'

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log('Board created', data)
    },
    onError: (error) => {
      console.log('Error creating board', error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
      <FormSubmit>Save</FormSubmit>
    </form>
  )
}

export default Form
