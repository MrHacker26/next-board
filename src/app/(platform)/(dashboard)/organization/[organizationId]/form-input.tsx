import { useFormStatus } from 'react-dom'
import { Input } from '@/components/ui/input'

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus()

  return (
    <div>
      <Input id="title" name="title" type="text" placeholder="Enter a board title" required disabled={pending} />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-red-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FormInput
