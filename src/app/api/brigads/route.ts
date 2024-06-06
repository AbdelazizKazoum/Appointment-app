import { NextResponse } from 'next/server'

const brigads = [
  {
    nom: 'Bt harhoura',
    compagnie: 'Bensliman',
  },
  {
    nom: 'Bt Sebt El gardan',
    compagnie: 'Taroudant',
  },
  {
    nom: 'Bt Bigra',
    compagnie: 'Inezgane',
  },
]
export const GET = async (req: any) => {
  return NextResponse.json(brigads)
}

export default brigads
