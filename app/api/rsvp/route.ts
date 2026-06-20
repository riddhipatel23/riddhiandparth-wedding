export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, attending, guests, dietary, hotel, hotelNights, message } = body

  if (!name || !email || !attending) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = getSupabase()
  const { error } = await supabase.from('rsvps').insert({
    name,
    email,
    attending,
    guests: parseInt(guests) || 1,
    dietary,
    hotel_requested: hotel,
    hotel_nights: hotel ? parseInt(hotelNights) : null,
    hotel_total_inr: hotel ? parseInt(hotelNights) * 10000 : null,
    message,
  })

  if (error) {
    console.error(error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
