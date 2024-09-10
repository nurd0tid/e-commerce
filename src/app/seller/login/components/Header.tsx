import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <Link href="http://b2b-ecommerce.com:3000" className="mr-3 flex items-center">
            <img alt="Shopee Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" className="h-10 w-auto" />
          </Link>
          <span className="text-black text-xl font-medium mt-3">Seller Center</span>
        </div>

        <div className="mt-3 lg:mt-0">
          <Link href="/" className="text-sm text-orange-500">
            Butuh Bantuan?
          </Link>
        </div>
      </nav>
    </header>
  );
}
