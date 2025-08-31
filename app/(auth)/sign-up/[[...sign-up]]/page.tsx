import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import PixenceLogo from "@/components/PixenceLogo";
import AuthHeader from "@/components/AuthHeader";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Check, Star, Users, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      {/* Header */}
      <AuthHeader 
        alternativeText="Already have an account?"
        alternativeLink="/sign-in"
        alternativeLinkText="Sign In"
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative">
        <AnimatedBackground />
        
        <div className="w-full max-w-4xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className="hidden lg:block">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Join the Future of
                  <span className="gradient-text block"> Content Creation</span>
                </h1>
                <p className="text-lg text-gray-800 mb-8 font-semibold">
                  Transform your creative workflow with powerful video compression and social media tools.
                </p>
                
                <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Unlimited video uploads and compression</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">50+ social media format templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Secure cloud storage with fast delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">AI-powered optimization</span>
                </div>
              </div>

                {/* Social Proof */}
                <div className="grid grid-cols-3 gap-4 text-center mb-8 mt-8">
                  <div className="p-4 bg-white/70 rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-700 font-medium">Active Users</div>
                  </div>
                  <div className="p-4 bg-white/70 rounded-lg shadow-sm">
                    <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">1M+</div>
                    <div className="text-sm text-gray-700 font-medium">Files Processed</div>
                  </div>
                  <div className="p-4 bg-white/70 rounded-lg shadow-sm">
                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-700 font-medium">Rating</div>
                  </div>
                </div>

                {/* Limited Time Offer */}
                <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-300 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-semibold text-blue-800">🎉 LIMITED TIME</span>
                  </div>
                  <p className="text-sm text-blue-900 font-medium">
                    <strong>Get started free</strong> - no credit card required! Premium features included for 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8 lg:hidden bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Started
                </h1>
                <p className="text-gray-800 font-semibold">
                  Create your account to start transforming content
                </p>
              </div>

              {/* Clerk Sign Up Component with Custom Styling */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 card-hover">
                <SignUp 
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "shadow-none bg-transparent",
                      headerTitle: "text-2xl font-bold text-gray-900",
                      headerSubtitle: "text-gray-700 font-medium",
                      socialButtonsBlockButton: "btn btn-outline w-full mb-2",
                      formButtonPrimary: "btn btn-primary w-full",
                      formFieldInput: "input input-bordered w-full",
                      footerActionLink: "text-blue-600 hover:text-blue-700",
                    },
                    variables: {
                      colorPrimary: "#3B82F6",
                      colorText: "#111827",
                      colorTextSecondary: "#374151",
                      colorBackground: "transparent",
                      colorInputBackground: "#F9FAFB",
                      colorInputText: "#111827",
                      borderRadius: "0.5rem",
                    }
                  }}
                />
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                {/* <div className="flex justify-center items-center space-x-4 text-xs text-gray-700 font-medium">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    256-bit SSL
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    GDPR Compliant
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    SOC 2 Type II
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 font-medium text-sm">
        <p>&copy; 2025 PixSence. All rights reserved.</p>
      </footer>
    </div>
  );
}
