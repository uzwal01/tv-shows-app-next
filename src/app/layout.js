import "../styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FavoritesProvider } from "@/lib/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-3 sm:px-0">
        <FavoritesProvider>
          <Header />
          <main className="max-w-[1280px] mx-auto px-3">
            {children}
          </main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
