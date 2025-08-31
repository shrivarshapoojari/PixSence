import Link from "next/link";
import PixenceLogo from "./PixenceLogo";

interface AuthHeaderProps {
  alternativeText: string;
  alternativeLink: string;
  alternativeLinkText: string;
}

export default function AuthHeader({ alternativeText, alternativeLink, alternativeLinkText }: AuthHeaderProps) {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <PixenceLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold text-gray-900">PixSence</span>
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">{alternativeText}</span>
          <Link href={alternativeLink} className="btn btn-ghost hover:btn-primary transition-all duration-200">
            {alternativeLinkText}
          </Link>
        </div>
      </nav>
    </header>
  );
}
