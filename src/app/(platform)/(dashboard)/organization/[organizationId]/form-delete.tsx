'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'

const FormDelete = () => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} variant="destructive">
      Delete
    </Button>
  )
}

export default FormDelete
