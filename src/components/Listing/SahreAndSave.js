"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
	FacebookShareButton,
	TwitterShareButton,
	InstapaperShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	InstapaperIcon,
	WhatsappIcon,
} from "react-share";
import shareSvg from "../../../public/images/icon/share.svg";
import HeartButton from "../HeartButton";

const SahreAndSave = ({ currentUser, listingId, title }) => {
	useEffect(() => {
		console.log("Component loaded");
	}, []);

	const shareUrl = typeof window !== "undefined" ? window.location.href : "";
	const titles = `DzairTrips - ${title}`;

	const socialMediaButtons = [
		{ Button: FacebookShareButton, Icon: FacebookIcon },
		{ Button: InstapaperShareButton, Icon: InstapaperIcon },
		{ Button: LinkedinShareButton, Icon: LinkedinIcon },
		{ Button: TwitterShareButton, Icon: TwitterIcon },
		{ Button: WhatsappShareButton, Icon: WhatsappIcon },
	];

	return (
		<ul className="share-save">
			<li>
				<div className="share-link">
          <span>
            <Image src={shareSvg} alt="Share" width={20} height={20} className="me-1" />
            Share
          </span>
					<ul className="social-icon">
						{socialMediaButtons.map(({ Button, Icon }, index) => (
							<li key={index}>
								<Button url={shareUrl} quote={titles}>
									<Icon size={32} round />
								</Button>
							</li>
						))}
					</ul>
				</div>
			</li>
			<li className="save-list">
				<HeartButton currentUser={currentUser} listingId={listingId} />
			</li>
		</ul>
	);
};

export default SahreAndSave;
