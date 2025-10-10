import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full border-t text-center gap-2 p-4 mt-8 flex flex-col items-center">
      <Link href={"/license"}>
        <Button className="rounded-full border border-solid flex items-center justify-center bg-white text-black gap-2 hover:underline hover:underline-offset-4 hover:bg-gray-100">
          LICENSE
        </Button>
      </Link>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}
