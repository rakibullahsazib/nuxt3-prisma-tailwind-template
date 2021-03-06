import { orm } from "../../prisma"

export default defineEventHandler(async(event) : Promise<any> => {
  const body = await useBody(event)
  const board = await orm.board.create({
    data: body
  })
  return board
})