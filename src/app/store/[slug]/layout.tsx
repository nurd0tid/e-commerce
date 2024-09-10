import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Product({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
