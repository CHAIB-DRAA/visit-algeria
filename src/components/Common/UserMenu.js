"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import userImg from "../../../public/images/authors/author-1.jpg";

const UserMenu = ({ currentUser }) => {
	const isAdmin = currentUser?.role === "ADMIN";
	const currentRoute = usePathname();

	return (
		<>
			{!currentUser && (
				<li className="register">
					<Link href="/auth/signup" className="read-more">
						Register
					</Link>
				</li>
			)}
			<li>
				{currentUser ? (
					<>
						<div className="user-menu-dropdown">
							<div className="user-img d-flex align-items-center">
								<Image
									src={
										currentUser?.image
											? currentUser.image
											: userImg
									}
									width={30}
									height={30}
									alt="user"
									className="rounded-circle"
								/>
								<h6 className="m-0 ms-2">{currentUser.name}</h6>
							</div>

							<div className="dropdown">
								<ul>
									{isAdmin && (
										<li>
											<Link
												href="/dashboard"
												className={`user-nav-link ${
													currentRoute === "/dashboard"
														? "active"
														: "non-active"
												}`}
											>
												<i className="ri-dashboard-line"></i>{" "}
												Dashboard
											</Link>
										</li>
									)}
									{isAdmin && (
									<li>
										<Link
											href="/listings/my-listings"
											className={`user-nav-link ${
												currentRoute === "/listings/my-listings"
													? "active"
													: "non-active"
											}`}
										>
											<i className="ri-list-check"></i> My
											Listings
										</Link>
									</li>
									)}
									{isAdmin && (
									<li>
										<Link
											href="/listings/new"
											className={`user-nav-link ${
												currentRoute === "/listings/new"
													? "active"
													: "non-active"
											}`}
										>
											<i className="ri-menu-add-line"></i>{" "}
											Add Listings
										</Link>
									</li> )}
									<li>
										<Link
											href="/listings/favourites"
											className={`user-nav-link ${
												currentRoute === "/listings/favourites"
													? "active"
													: "non-active"
											}`}
										>
											<i className="ri-bookmark-3-line"></i>{" "}
											Favourites
										</Link>
									</li>
									<li>
										<Link
											href="/profile/edit-my-info"
											className={`user-nav-link ${
											currentRoute === "/profile/edit-my-info"
												? "active"
												: "non-active"
											}`}
										>
											<i className="ri-user-add-line"></i>{" "}
											Update Profile Info
										</Link>
									</li>
									<li>
										<Link
											href="/profile/settings"
											className={`user-nav-link ${
											currentRoute === "/profile/settings"
												? "active"
												: "non-active"
											}`}
										>
											<i className="ri-settings-line"></i>{" "}
											Settings
										</Link>
									</li>
									<li>
										<Link
											href={`/author/${currentUser.id}`}
											className={`user-nav-link ${
												currentRoute === `/author/${currentUser.id}`
													? "active"
													: "non-active"
												}`}
										>
											<i className="ri-focus-3-line"></i>{" "}
											View My Profile
										</Link>
									</li>

									<hr />

									<li>
										<button
											onClick={() => signOut()}
											className="read-more"
										>
											<i className="ri-logout-box-r-line"></i>{" "}
											Logout
										</button>
									</li>
								</ul>
							</div>
						</div>
					</>
				) : (
					<Link href="/auth/signin" className="read-more">
						Login
					</Link>
				)}
			</li>
		</>
	);
};

export default UserMenu;
