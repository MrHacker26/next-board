import { deleteBoard } from '@/actions/delete-board'
import FormDelete from './form-delete'

interface BoardProps {
  title: string
  id: string
}

export const Board = ({ title, id }: BoardProps) => {
  const deletetedBoardWithId = deleteBoard.bind(null, id)
  return (
    <form action={deletetedBoardWithId} className="flex items-center gap-x-2">
      <p className="text-lg font-semibold">Board Title: {title}</p>
      <FormDelete />
    </form>
  )
}
