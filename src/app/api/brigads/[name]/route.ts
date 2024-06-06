import next from 'next'
import { NextRequest, NextResponse } from 'next/server'
import brigads from '../route'

export const GET = async (
  req: NextRequest,
  context: { params: { name: string } },
) => {
  const name = context.params.name

  return NextResponse.json(
    brigads.filter((item, id) => item.compagnie === name),
  )
}
