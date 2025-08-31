import { SignIn } from "@clerk/nextjs";
import AuthHeader from "@/components/AuthHeader";
import AnimatedBackground from "@/components/AnimatedBackground";
import TrustIndicators from "@/components/TrustIndicators";
import { Play, Upload, Image as ImageIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <AuthHeader 
        alternativeText="Don't have an account?"
        alternativeLink="/sign-up"
        alternativeLinkText="Sign Up"
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative">
        <AnimatedBackground />
        
        <div className="w-full max-w-md relative z-10">
          {/* Welcome Section */}
          <div className="text-center mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-800 font-semibold">
              Sign in to continue transforming your visual content
            </p>
          </div>

          {/* Clerk Sign In Component with Custom Styling */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 card-hover border border-gray-200 dark:border-gray-700">
            <SignIn 
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "shadow-none bg-transparent",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "btn btn-outline w-full mb-3 bg-white border-2 border-gray-300 text-gray-800 font-semibold hover:border-blue-500 hover:text-blue-600",
                  formButtonPrimary: "btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold text-base py-3 hover:from-blue-600 hover:to-purple-700",
                  formFieldInput: "input input-bordered w-full bg-white border-2 border-gray-300 text-gray-900 font-medium focus:border-blue-500 focus:outline-none",
                  formFieldLabel: "label-text font-semibold text-gray-800 text-base",
                  footerActionLink: "text-blue-600 hover:text-blue-700 font-semibold underline",
                  dividerLine: "bg-gray-300",
                  dividerText: "text-gray-700 font-medium",
                },
                variables: {
                  colorPrimary: "#3B82F6",
                  colorText: "#111827",
                  colorTextSecondary: "#374151",
                  colorBackground: "#FFFFFF",
                  colorInputBackground: "#FFFFFF",
                  colorInputText: "#111827",
                  borderRadius: "0.5rem",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                }
              }}
            />
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
            <p className="text-sm text-gray-800 font-semibold mb-4">
              Access your creative toolkit:
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-900 font-semibold">
              <div className="flex items-center">
                <Play className="w-4 h-4 text-blue-500 mr-2" />
                Video Tools
              </div>
              <div className="flex items-center">
                <ImageIcon className="w-4 h-4 text-purple-500 mr-2" />
                Social Media
              </div>
              <div className="flex items-center">
                <Upload className="w-4 h-4 text-green-500 mr-2" />
                Cloud Storage
              </div>
            </div>
          </div>

          <TrustIndicators />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 font-medium text-sm">
        <p>&copy; 2025 PixSence. All rights reserved.</p>
      </footer>
    </div>
  );
}
