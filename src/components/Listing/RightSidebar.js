"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import userImg from "../../../public/images/listing-details-img/user.jpg";
import message2 from "../../../public/images/icon/messages-2.svg";
import profileImg from "../../../public/images/icon/profiles.svg";
import pdfIco from "../../../public/images/listing-details-img/pdf.svg";
import downloadIco from "../../../public/images/listing-details-img/zip.svg";

const RightSidebar = ({ user }) => {
	const whatsappNumber = user?.profile?.phone ? user.profile.phone : '';

	return (
		<div className="col-lg-4">
			<div className="right-sidebar">
				<div className="bg-right-sidebar">
					<h3> Information d'utilisateur</h3>
					<div className="information-img d-flex align-items-center">
						<Image
							src={user?.image ? user.image : userImg}
							alt="user"
							width={93}
							height={93}
						/>
						<div className="ms-3">
							<h4>{user.name}</h4>
							<p>
								{user?.profile?.bio
									? user.profile.bio
									: "No Description"}
							</p>
						</div>
					</div>

					<ul className="info">
						<li>
							<i className="ri-map-pin-line"></i>
							{user?.profile?.address
								? user.profile.address
								: "Place Not Added"}
						</li>
						<li>
							<i className="ri-phone-line"></i>
							<a href={`tel:${whatsappNumber}`}>
								{whatsappNumber
									? whatsappNumber
									: "Phone Not Added"}
							</a>{" "}
							<span>Call Now</span>
						</li>
					</ul>

					<ul className="contact-btn">
						<li>
							<a
								href={`https://wa.me/${whatsappNumber}`}
								className="default-btn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>
									Contacter Via Whatsapp
									<Image
										src={message2}
										alt="Image"
										width={24}
										height={24}
									/>
								</span>
							</a>
						</li>
						<li>
							<Link
								href={`/author/${user.id}`}
								className="default-btn active"
							>
								<span>
									Voir le Profil
									<Image
										src={profileImg}
										alt="Image"
										width={24}
										height={24}
									/>
								</span>
							</Link>
						</li>
					</ul>
				</div>

				<div className="bg-right-sidebar">
					<h3>Send Message</h3>
					<form
						className="contact-form"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Your Name"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
							/>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								placeholder="Your Message"
								cols="30"
								rows="6"
							></textarea>
						</div>
						<div className="form-group mb-0">
							<button type="submit" className="default-btn">
								Send Message
							</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	);
};

export default RightSidebar;
