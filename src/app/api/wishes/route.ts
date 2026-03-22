import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('wishes')
    .select('id, name, message, created_at')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const { name, message } = await req.json()

  if (!name?.trim() || !message?.trim())
    return NextResponse.json({ error: 'Nama dan ucapan wajib diisi.' }, { status: 400 })
  if (name.trim().length > 80)
    return NextResponse.json({ error: 'Nama terlalu panjang.' }, { status: 400 })
  if (message.trim().length > 400)
    return NextResponse.json({ error: 'Ucapan maksimal 400 karakter.' }, { status: 400 })

  const { data, error } = await supabase
    .from('wishes')
    .insert([{ name: name.trim(), message: message.trim() }])
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}