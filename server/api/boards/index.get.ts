import { IncomingMessage, ServerResponse } from "h3"
import { orm } from "../../prisma"

export default async(req: IncomingMessage, res: ServerResponse) => {
  const boards = await orm.board.findMany()
  return {
    data: boards
  }
}