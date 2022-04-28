import { orm } from "../../prisma"

export default defineEventHandler(async(event) : Promise<any> => {
  const boards = await orm.board.findMany()
  return {
    data: boards
  }
})