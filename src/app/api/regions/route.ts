import { NextResponse } from 'next/server'

const regions = [
  'Beni Mellal',
  'Casablanca',
  'Meknes',
  'Tétouan',
  'Boulemane',
  'Kenitra',
  'Marrakech',
  'Guelmim',
  'Agadir',
  'Rabat',
]

export const GET = async (request: any) => {
  return await NextResponse.json(regions)
}
