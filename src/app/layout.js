import "../styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LatestMovieSection from "@/components/sections/LatestMovieSection";
import LatestTVSection from "@/components/sections/LatestTVSection";
import { FavoritesProvider } from "@/lib/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sm:px-3">
        <FavoritesProvider>
          <Header />
          {children}
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
