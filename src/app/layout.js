import "./styles/bootstrap.min.css";
import "./styles/flaticon.css";
import "./styles/remixicon.css";
import "./styles/dark-mode.css";
import "swiper/css";
import "swiper/css/pagination";
import "react-accessible-accordion/dist/fancy-example.css";
// Global styles
import "./styles/style.css";
import "./styles/responsive.css";

import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import TosterProvider from "@/providers/TosterProvider";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { Readex_Pro, Dancing_Script } from "next/font/google";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Teor - Site de petites annonces et annuaire en Algérie",
  description: "Découvrez des offres incroyables et des services variés en Algérie sur notre plateforme de petites annonces. Trouvez des produits, des services et des opportunités dans tout le pays.",

  metadataBase: new URL("http://localhost:300"),
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.ico",
    },
  ],
};

// For all body text font
const readex_pro = Readex_Pro({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-readex-pro",
  display: "swap",
});

// For all heading font
const dancing_script = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className={`${readex_pro.variable} ${dancing_script.variable}`}>
      <body suppressHydrationWarning={true}>
        <TosterProvider />
        <Navbar currentUser={currentUser} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
