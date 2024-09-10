import { NextRequest, NextResponse } from "next/server"; // Import untuk Next.js versi terbaru
import { supabase } from "../../../../../../../supabase"; // Sesuaikan dengan path konfigurasi Supabase Anda
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Masukkan data ke tabel 'users'
    const { data, error } = await supabase
      .from("users")
      .insert([{ email, password: hashedPassword, name, role_id: 1 }]) // Default role_id = 1 (member)
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "User registered successfully", user: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
