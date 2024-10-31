"use client";
import React from "react";
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

const SahreAndSave = ({ currentUser, listingId }) => {
	const shareUrl = "https://teor-react.envytheme.com";
	const title = "Teor - Classified Ads & Directory Listing Next.js Template";
	return (
		<ul className="share-save">
			<li>
				<div className="share-link">
					<span>
						<Image
							src={shareSvg}
							alt="Image"
							width="20"
							height="20"
							className="me-1"
						/>
						Share
					</span>

					<ul className="social-icon">
						<li>
							<FacebookShareButton url={shareUrl} quote={title}>
								<FacebookIcon size={32} round />
							</FacebookShareButton>
						</li>
						<li>
							<InstapaperShareButton url={shareUrl} quote={title}>
								<InstapaperIcon size={32} round />
							</InstapaperShareButton>
						</li>
						<li>
							<LinkedinShareButton url={shareUrl} quote={title}>
								<LinkedinIcon size={32} round />
							</LinkedinShareButton>
						</li>
						<li>
							<TwitterShareButton url={shareUrl} quote={title}>
								<TwitterIcon size={32} round />
							</TwitterShareButton>
						</li>
						<li>
							<WhatsappShareButton url={shareUrl} quote={title}>
								<WhatsappIcon size={32} round />
							</WhatsappShareButton>
						</li>
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
