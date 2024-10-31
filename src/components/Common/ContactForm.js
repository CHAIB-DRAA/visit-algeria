"use client";
import React from "react";
import Image from "next/image";
import shp1 from "../../../public/images/contact-info/contact-shape-1.png";
import shp2 from "../../../public/images/contact-info/contact-shape-2.png";
import shp3 from "../../../public/images/contact-info/contact-shape-3.png";
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		// Remplacez ces valeurs par vos propres clés EmailJS
		const serviceID = process.env.MAIL_SERVICE_ID; // Votre ID de service
		const templateID = process.env.MAIL_TEMPLATE_ID; // Votre ID de modèle
		const userID = "n9bF7cANruIJo8R0N"; // Votre ID d'utilisateur

		emailjs.sendForm('service_htaxa0o', 'template_o9j28q9', e.target, 'n9bF7cANruIJo8R0N')
			.then((result) => {
				alert('Message envoyé avec succès!');
			}, (error) => {
				alert('Erreur lors de l\'envoi : ' + error.text);
			});
	};

	return (
		<div className="contact-area pb-100">
			<div className="container">
				<div className="section-title">
					<h2>
						Contactez-nous à tout moment{" "}
						<span className="br"><br /></span>{" "}
						De n'importe où
					</h2>
				</div>

				<div className="contact-form">
					<form id="contactForm" onSubmit={handleSubmit}>
						<div className="row">
							{/* Champs du formulaire */}
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input type="text" name="name" id="name" className="form-control" required placeholder="Votre Nom" />
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input type="email" name="email" id="email" className="form-control" required placeholder="Votre Email" />
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input type="text" name="phone_number" id="phone_number" className="form-control" required placeholder="Numéro de téléphone" />
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Sujet" />
								</div>
							</div>

							<div className="col-lg-12">
								<div className="form-group">
									<textarea name="message" className="form-control" id="message" cols="30" rows="6" required placeholder="Écrivez votre message ici"></textarea>
								</div>
							</div>

							<div className="col-12">
								<div className="form-check">
									<input name="gridCheck" value="1" className="form-check-input" type="checkbox" />
									<label className="form-check-label" htmlFor="gridCheck">
										Enregistrer mon nom, email et numéro de téléphone dans ce navigateur pour la prochaine fois que j'envoie un message.
									</label>
								</div>
							</div>

							<div className="col-lg-12 col-md-12 text-center">
								<button type="submit" className="default-btn">Envoyer le message</button>
							</div>
						</div>
					</form>

					<Image src={shp1} width={"auto"} height={"auto"} className="shape shape-1" alt="shape" />
					<Image src={shp2} width={"auto"} height={"auto"} className="shape shape-2" alt="shape" />
					<Image src={shp3} width={"auto"} height={"auto"} className="shape shape-3" alt="shape" />
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
