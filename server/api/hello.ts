import type { IncomingMessage, ServerResponse } from 'http'
import { orm } from '../prisma'


export default (defineEventHandler(async (event) => {
  await orm.board.create({
    data: {
      name: 'Board 2',
      description: 'Board Description',
      order: 1,
      userId: 1
    }
  })
  return {
    api: 'works'
  }
}))