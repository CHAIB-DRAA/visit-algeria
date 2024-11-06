"use client";
import React from "react";
import BlogCard from "./BlogCard";

const BlogContent = ({ blogPosts = [] }) => { // Valeur par défaut pour blogPosts
	return (
		<div className="blog-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Blog Posts</h2>
				</div>

				<div className="row justify-content-center">
					{blogPosts.length > 0 ? ( // Vérification si blogPosts contient des éléments
						blogPosts.map((blog) => (
							<BlogCard key={blog.id} {...blog} />
						))
					) : (
						<p>Aucun article de blog disponible.</p> // Message alternatif si aucun article n'est trouvé
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogContent;
