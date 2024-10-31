"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="db-sidebar">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className={`db-link ${
                currentRoute === "/dashboard" ? "active" : "non-active"
              }`}
            >Dashboard </Link>
          </li>

          <li>
            <Link
              href="/dashboard/users"
              className={`db-link ${
                currentRoute === "/dashboard/users" ? "active" : "non-active"
              }`}
            >
              Users
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/listings"
              className={`db-link ${
                currentRoute === "/dashboard/listings" ? "active" : "non-active"
              }`}
            >
              Listings
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/reviews"
              className={`db-link ${
                currentRoute === "/dashboard/reviews" ? "active" : "non-active"
              }`}
            >
              Reviews
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/blog/new"
              className={`db-link ${
                currentRoute === "/dashboard/blog/new" ? "active" : "non-active"
              }`}
            >
              Creact Blog Post
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LeftSidebar;
