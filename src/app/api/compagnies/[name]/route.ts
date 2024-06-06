import { NextRequest, NextResponse } from 'next/server'
import compagnies from '../route'
import { json } from 'stream/consumers'

export const GET = async (
  req: NextRequest,
  context: { params: { name: string } },
) => {
  const reg = context.params.name
  return NextResponse.json(compagnies.filter((item, id) => item.region === reg))
}
