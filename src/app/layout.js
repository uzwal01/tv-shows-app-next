import "../styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LatestMovieSection from "@/components/sections/LatestMovieSection";
import LatestTVSection from "@/components/sections/LatestTVSection";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sm:px-3">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
