 "use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Upload, Home as HomeIcon, Video, AlertCircle, CheckCircle } from 'lucide-react'
import PixenceLogo from '@/components/PixenceLogo'
import AnimatedBackground from '@/components/AnimatedBackground'
import { UserButton } from '@clerk/nextjs'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            setError(`File size too large. Maximum size is ${formatFileSize(MAX_FILE_SIZE)}`)
            return;
        }

        setIsUploading(true)
        setError(null)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            const response = await axios.post("/api/video-upload", formData)
            setUploadSuccess(true)
            setTimeout(() => {
                router.push("/home")
            }, 2000)
        } catch (error) {
            console.log(error)
            setError("Failed to upload video. Please try again.")
        } finally{
            setIsUploading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative">
            <AnimatedBackground />
            
            {/* Navigation Header */}
            <header className="container mx-auto px-4 py-6 relative z-10">
                <nav className="flex items-center justify-between bg-gray-800/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-700/50">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <PixenceLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-bold text-white">Pixence</span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 font-medium transition-colors">
                            <HomeIcon className="w-4 h-4" />
                            <span>Landing</span>
                        </Link>
                        <Link href="/home" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 font-medium transition-colors">
                            <Video className="w-4 h-4" />
                            <span>Gallery</span>
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

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header Section */}
                    <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 mb-8 text-center">
                        <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-white mb-2">Upload Video</h1>
                        <p className="text-lg text-gray-300 font-medium">
                            Compress and optimize your videos for the web
                        </p>
                    </div>

                    {/* Upload Form */}
                    <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50">
                        {uploadSuccess ? (
                            <div className="text-center py-8">
                                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-2">Upload Successful!</h2>
                                <p className="text-gray-300 font-medium mb-4">Your video is being processed...</p>
                                <p className="text-sm text-gray-400">Redirecting to gallery...</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 flex items-center">
                                        <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                                        <span className="text-red-300 font-medium">{error}</span>
                                    </div>
                                )}
                                
                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        Video Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all font-medium"
                                        placeholder="Enter a descriptive title for your video"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all font-medium h-24 resize-none"
                                        placeholder="Optional: Describe your video content"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        Video File
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-500 file:text-white file:font-semibold hover:file:bg-blue-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    {file && (
                                        <div className="mt-3 p-3 bg-gray-700/30 border border-gray-600/50 rounded-lg">
                                            <p className="text-gray-300 font-medium">Selected: {file.name}</p>
                                            <p className="text-gray-400 text-sm">Size: {formatFileSize(file.size)}</p>
                                        </div>
                                    )}
                                    <p className="text-gray-400 text-sm mt-2">
                                        Maximum file size: {formatFileSize(MAX_FILE_SIZE)}
                                    </p>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isUploading || !file}
                                >
                                    {isUploading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Uploading...
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-5 h-5 mr-2" />
                                            Upload Video
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
      );
}

export default VideoUpload
