import Image from "next/image";
import Link from "next/link";
import { Play, Upload, Image as ImageIcon, Zap, Shield, Cloud } from "lucide-react";
import PixenceLogo from "@/components/PixenceLogo";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PixenceLogo className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-800 dark:text-white">PixSence</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in" className="btn btn-ghost">Sign In</Link>
            <Link href="/sign-up" className="btn btn-primary">Get Started</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Transform Your
            <span className="gradient-text block mt-2"> Visual Content</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Upload, compress, and optimize your videos and images for any platform. 
            Create stunning social media content with our powerful AI-driven tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/video-upload" className="btn btn-primary btn-lg btn-pulse">
              <Upload className="w-5 h-5 mr-2" />
              Start Uploading
            </Link>
            <Link href="/home" className="btn btn-outline btn-lg">
              <Play className="w-5 h-5 mr-2" />
              Browse Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage and optimize your visual content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Video Upload & Compression */}
          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl mb-2">Video Compression</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Upload and automatically compress your videos while maintaining quality. 
                Perfect for web optimization and storage savings.
              </p>
              <div className="card-actions">
                <Link href="/video-upload" className="btn btn-primary">
                  Upload Video
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Images */}
          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl mb-2">Social Media Creator</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create perfectly sized images for Instagram, Twitter, Facebook, and more. 
                One upload, multiple formats.
              </p>
              <div className="card-actions">
                <Link href="/social-share" className="btn btn-primary">
                  Create Images
                </Link>
              </div>
            </div>
          </div>

          {/* Cloud Storage */}
          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title text-xl mb-2">Cloud Storage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Secure cloud storage powered by Cloudinary. Access your content 
                from anywhere with blazing-fast delivery.
              </p>
              <div className="card-actions">
                <Link href="/home" className="btn btn-primary">
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600 dark:text-gray-300">Faster Compression</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Social Formats</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-300">Files Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Creators Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by content creators worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold">Alex Chen</h4>
                  <p className="text-sm text-gray-500">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "PixSence has revolutionized my workflow. What used to take hours now takes minutes. 
                The video compression is incredible!"
              </p>
            </div>
          </div>

          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Social Media Manager</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The social media format creator is a game-changer. Perfect sizes for every platform, 
                every time!"
              </p>
            </div>
          </div>

          <div className="card bg-white dark:bg-gray-800 shadow-xl card-hover">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold">Mike Rodriguez</h4>
                  <p className="text-sm text-gray-500">Video Producer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Fast, reliable, and the quality is outstanding. PixSence is now essential 
                to my production pipeline."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started with PixSence in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">1. Upload</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simply drag and drop your videos or images. We support all major formats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">2. Process</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI automatically optimizes your content for web and social media platforms.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">3. Share</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Download optimized files or share directly to your favorite platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust PixSence for their video and image optimization needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-up" className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100 border-none">
              Get Started Free
            </Link>
            <div className="flex items-center text-blue-100">
              <Shield className="w-5 h-5 mr-2" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PixenceLogo className="w-8 h-8" />
                <span className="text-xl font-bold">PixSence</span>
              </div>
              <p className="text-gray-400">
                The ultimate platform for video compression and social media content creation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/video-upload" className="hover:text-white">Video Upload</Link></li>
                <li><Link href="/social-share" className="hover:text-white">Social Images</Link></li>
                <li><Link href="/home" className="hover:text-white">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PixSence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
