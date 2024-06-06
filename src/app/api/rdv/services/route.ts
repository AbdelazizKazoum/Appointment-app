import { NextResponse } from 'next/server'

const services = [
  { name: 'Financial Planning', time: '1h' },
  { name: 'Retirement Planning', time: '1h' },
  { name: 'Investment Advice', time: '1h' },
  { name: 'Demande certificate', time: '1h' },
]

export async function GET() {
  return await NextResponse.json(services)
}
