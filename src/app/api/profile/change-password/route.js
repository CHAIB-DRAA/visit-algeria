import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser  } from "@/actions/getCurrentUser";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const currentUser  = await getCurrentUser ();
        if (!currentUser ) {
            return NextResponse.json(
                { message: "Authentication failed!" },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { oldPassword, newPassword, confirmPassword } = body;

        // Vérifier si le mot de passe ancien est valide
        const isValidPassword = await bcrypt.compare(oldPassword, currentUser .hashedPassword);
        if (!isValidPassword) {
            return NextResponse.json(
                { message: "Invalid old password" },
                { status: 400 }
            );
        }

        // Vérifier si le nouveau mot de passe et la confirmation correspondent
        if (newPassword !== confirmPassword) {
            return NextResponse.json(
                { message: "New password and confirmation do not match" },
                { status: 400 }
            );
        }

        // Hacher le nouveau mot de passe
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Mettre à jour le mot de passe de l'utilisateur dans la base de données
        await prisma.user.update({
            where: {
                id: currentUser .id,
            },
            data: {
                hashedPassword: hashedNewPassword, // Utiliser hashedPassword
            },
        });

        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error updating password:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
