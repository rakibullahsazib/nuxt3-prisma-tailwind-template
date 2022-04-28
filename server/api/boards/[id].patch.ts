import { orm } from "../../prisma"

export default defineEventHandler(async(event) : Promise<any> => {
  const id = event.context.params.id
  const body = await useBody(event)
  const board = await orm.board.update({
    where: {
      id: parseInt(id)
    },
    data: body
  })
  return board
})