import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

// Fonction pour la création d'un listing (POST)
export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Authentication failed!" },
			{ status: 401 }
		);
	}

	const body = await request.json();
	const {
		title,
		description,
		imageSrc,
		imageBg,
		address,
		features,
		category,
		location,
		price,
	} = body;

	let slug = slugify(title);
	const slugExist = await prisma.listing.findFirst({
		where: {
			slug: slug,
		},
	});

	if (slugExist) {
		slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
	}

	Object.keys(body).forEach((value) => {
		if (!body[value]) {
			return NextResponse.json(
				{
					message: "One or more fields are empty!",
				},
				{ status: 404 }
			);
		}
	});

	const listing = await prisma.listing.create({
		data: {
			title,
			slug,
			description,
			imageSrc,
			address,
			features,
			category,
			location_value: location.label,
			price: parseInt(price, 10),
			latitude: location.latlng[0],
			longitude: location.latlng[1],
			region: location.region,
			userId: currentUser.id,
		},
	});


	return NextResponse.json(listing);
}

// Fonction pour la mise à jour d'un listing (PUT)
export async function PUT(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{ message: "Authentication failed!" },
			{ status: 401 }
		);
	}

	const body = await request.json();
	const {
		id, // L'ID du listing à mettre à jour
		title,
		description,
		imageSrc,
		imageBg,
		address,
		features,
		category,
		location,
		price,
	} = body;

	if (!id) {
		return NextResponse.json(
			{ message: "Listing ID is required for update!" },
			{ status: 400 }
		);
	}

	// Vérifier si le listing existe
	const existingListing = await prisma.listing.findUnique({
		where: { id: id },
	});

	if (!existingListing) {
		return NextResponse.json(
			{ message: "Listing not found!" },
			{ status: 404 }
		);
	}

	// Générer un nouveau slug si le titre a été mis à jour
	let slug = existingListing.slug;
	if (title && title !== existingListing.title) {
		slug = slugify(title);
		const slugExist = await prisma.listing.findFirst({
			where: { slug: slug },
		});
		if (slugExist) {
			slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
		}
	}

	// Mettre à jour le listing
	const updatedListing = await prisma.listing.update({
		where: { id: id },
		data: {
			title: title || existingListing.title,
			slug: slug,
			description: description || existingListing.description,
			imageSrc: imageSrc || existingListing.imageSrc,
			imageBg: imageBg || existingListing.imageBg,
			address: address || existingListing.address,
			features: features || existingListing.features,
			category: category || existingListing.category,
			location_value: location?.label || existingListing.location_value,
			price: price ? parseInt(price, 10) : existingListing.price,
			latitude: location?.latlng ? location.latlng[0] : existingListing.latitude,
			longitude: location?.latlng ? location.latlng[1] : existingListing.longitude,
		},
	});

	return NextResponse.json(updatedListing);
}
