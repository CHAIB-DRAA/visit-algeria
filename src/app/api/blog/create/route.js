import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

export const dynamic = "force-dynamic";

export async function POST(request) {
	const currentUser = await getCurrentUser();

	// Vérification de l'authentification
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Authentication failed!" },
			{ status: 401 }
		);
	}

	const body = await request.json();
	const { title, content, imageSrc, category } = body;

	// Vérification de la présence des champs obligatoires
	if (!title || !content || !imageSrc || !category) {
		return NextResponse.json(
			{ message: "One or more fields are empty!" },
			{ status: 400 }  // Utiliser 400 pour mauvaise requête
		);
	}

	// Génération du slug
	let slug = slugify(title);

	// Vérification si le slug existe déjà
	const slugExist = await prisma.BlogPost.findFirst({
		where: {
			slug: slug,
		},
	});

	// Si le slug existe, ajouter un suffixe aléatoire
	if (slugExist) {
		slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
	}

	// Création du blog post
	try {
		const blog = await prisma.BlogPost.create({
			data: {
				title,
				slug,
				content,
				imageSrc,
				category,
				userId: currentUser.id,  // Assurez-vous que l'utilisateur est lié correctement
			},
		});

		return NextResponse.json(blog);
	} catch (error) {
		console.error("Error creating blog post:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
