import { orm } from "../../prisma"

export default defineEventHandler(async(event) : Promise<any> => {
  const id = event.context.params.id

  const board = await orm.board.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  return board
})