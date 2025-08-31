"use client"
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import AnimatedBackground from '@/components/AnimatedBackground'
import PixenceLogo from '@/components/PixenceLogo'
import { Video } from '../../generated/prisma'
import { Upload, RefreshCw, AlertCircle, Home as HomeIcon, User } from 'lucide-react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

function Home() {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/video")
            if(Array.isArray(response.data)) {
                setVideos(response.data)
            } else {
                throw new Error(" Unexpected response format");

            }
        } catch (error) {
            console.log(error);
            setError("Failed to fetch videos")

        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    const handleDownload = useCallback((url: string, title: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [])

    if(loading){
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
                <AnimatedBackground />
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 text-center relative z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-300 font-semibold">Loading your videos...</p>
                </div>
            </div>
        )
    }

    if(error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
                <AnimatedBackground />
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 text-center relative z-10 max-w-md">
                    <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-300 font-medium mb-6">{error}</p>
                    <button 
                        onClick={() => {
                            setError(null);
                            setLoading(true);
                            fetchVideos();
                        }}
                        className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative">
            <AnimatedBackground />
            
            {/* Navigation Header */}
            <header className="container mx-auto px-4 py-6 relative z-10">
                <nav className="flex items-center justify-between bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-700/50">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <PixenceLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-bold text-white">PixSence</span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 font-medium transition-colors">
                            <HomeIcon className="w-4 h-4" />
                            <span>Landing</span>
                        </Link>
                        <Link href="/video-upload" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 font-medium transition-colors">
                            <Upload className="w-4 h-4" />
                            <span>Upload</span>
                        </Link>
                        <Link href="/social-share" className="flex items-center space-x-2 text-gray-300 hover:text-green-400 font-medium transition-colors">
                            <span>Social Share</span>
                        </Link>
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 rounded-full border-2 border-gray-600 shadow-lg"
                                }
                            }}
                        />
                    </div>
                </nav>
            </header>
            
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-4xl font-bold text-white mb-2">Your Video Gallery</h1>
                            <p className="text-lg text-gray-300 font-medium">
                                Manage and share your optimized videos
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-900/50 px-4 py-2 rounded-full border border-blue-500/30">
                                <span className="text-blue-300 font-semibold">{videos.length} Videos</span>
                            </div>
                            <Link href="/video-upload" className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold">
                                <Upload className="w-4 h-4 mr-2" />
                                Upload New
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Videos Grid */}
                {videos.length === 0 ? (
                    <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-gray-700/50 text-center">
                        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">No videos yet</h3>
                        <p className="text-gray-300 font-medium mb-6">
                            Start by uploading your first video to see it here
                        </p>
                        <Link href="/video-upload" className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold btn-lg">
                            <Upload className="w-5 h-5 mr-2" />
                            Upload Your First Video
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onDownload={handleDownload}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home
