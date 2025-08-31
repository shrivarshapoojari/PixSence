import { SignUp } from "@clerk/nextjs";
import AuthHeader from "@/components/AuthHeader";
import AnimatedBackground from "@/components/AnimatedBackground";
import TrustIndicators from "@/components/TrustIndicators";
import { Check, Star, Users, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <AuthHeader 
        alternativeText="Already have an account?"
        alternativeLink="/sign-in"
        alternativeLinkText="Sign In"
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative">
        <AnimatedBackground />
        
        <div className="w-full max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className="hidden lg:block space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Join the Future of
                  <span className="gradient-text block mt-2"> Content Creation</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Transform your creative workflow with powerful video compression and social media tools used by 10,000+ creators worldwide.
                </p>
              </div>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Unlimited video uploads & compression</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">50+ social media format templates</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Secure cloud storage with global CDN</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">AI-powered optimization engine</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm card-hover">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Active Users</div>
                </div>
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm card-hover">
                  <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">1M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Files Processed</div>
                </div>
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm card-hover">
                  <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">4.9</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Rating</div>
                </div>
              </div>

              {/* Limited Time Offer */}
              <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-200/50 dark:border-blue-800/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">🎉 LIMITED TIME OFFER</span>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Get started free</strong> - no credit card required! Premium features included for 30 days.
                </p>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8 lg:hidden">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Get Started
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Create your account to start transforming content
                </p>
              </div>

              {/* Clerk Sign Up Component with Custom Styling */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 card-hover border border-white/20">
                <SignUp 
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "shadow-none bg-transparent",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden",
                      socialButtonsBlockButton: "btn btn-outline w-full mb-2 hover:btn-primary transition-all duration-200",
                      formButtonPrimary: "btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700",
                      formFieldInput: "input input-bordered w-full focus:border-blue-500 transition-colors",
                      footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
                      dividerLine: "bg-gray-200 dark:bg-gray-600",
                      dividerText: "text-gray-500 dark:text-gray-400",
                    },
                    variables: {
                      colorPrimary: "#3B82F6",
                      colorText: "#374151",
                      colorTextSecondary: "#6B7280",
                      colorBackground: "transparent",
                      colorInputBackground: "#F9FAFB",
                      colorInputText: "#374151",
                      borderRadius: "0.5rem",
                    }
                  }}
                />
              </div>

              {/* Mobile Social Proof */}
              <div className="lg:hidden mt-6">
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-800 dark:text-white">10K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Users</div>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-800 dark:text-white">1M+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Files</div>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-800 dark:text-white">4.9</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Rating</div>
                  </div>
                </div>
              </div>

              <TrustIndicators />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 PixSence. All rights reserved.</p>
      </footer>
    </div>
  );
}
