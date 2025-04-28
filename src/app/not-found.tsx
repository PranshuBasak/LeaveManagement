import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>

      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved. Please
        check the URL or navigate back to the homepage.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}
