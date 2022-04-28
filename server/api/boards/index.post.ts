import { IncomingMessage, ServerResponse } from "h3"
import { orm } from "../../prisma"

export default async(req: IncomingMessage, res: ServerResponse) => {
  const body = await useBody(req)
  const board = await orm.board.create({
    data: body
  })
  return board
}