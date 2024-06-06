import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants'
import { NextResponse } from 'next/server'

const horaire = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

export async function GET() {
  return await NextResponse.json(horaire)
}
