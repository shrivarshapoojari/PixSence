import Link from "next/link";
import PixenceLogo from "@/components/PixenceLogo";
import AnimatedBackground from "@/components/AnimatedBackground";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  alternativeText: string;
  alternativeLink: string;
  alternativeLinkText: string;
}

export default function AuthLayout({ 
  children, 
  title, 
  subtitle, 
  alternativeText, 
  alternativeLink, 
  alternativeLinkText 
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <PixenceLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">Pixence</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">{alternativeText}</span>
            <Link href={alternativeLink} className="btn btn-ghost">{alternativeLinkText}</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative">
        <AnimatedBackground />
        
        <div className="w-full max-w-md relative z-10">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          </div>

          {/* Auth Component Container */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 card-hover">
            {children}
          </div>

          {/* Additional Features */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              By continuing, you get access to:
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Video Tools
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Social Media
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Cloud Storage
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Pixence. All rights reserved.</p>
      </footer>
    </div>
  );
}
