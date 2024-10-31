import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	const body = await request.json();
	const { name, email, password } = body;

	const existingUser = await prisma.user.findUnique({
		where: { email: email },
	});

	// if (existingUser.length > 0) {
	// 	return NextResponse.json({ message: "Email already exist?" });
	// }

	const hashedPassword = await bcrypt.hash(password, 12);

	const user = await prisma.user.create({
		data: {
			name,
			email,
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}
