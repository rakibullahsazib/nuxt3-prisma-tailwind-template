import { orm } from "../../prisma"

export default defineEventHandler(async(event) : Promise<any> => {
  const id = event.context.params.id
  const board = await orm.board.delete({
    where: {
      id: parseInt(id)
    }
  })
  return board
})