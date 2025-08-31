 "use client"

import React, {useState, useEffect, useRef} from 'react'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Home as HomeIcon, Video, Upload, Download, Images, CheckCircle, AlertCircle } from 'lucide-react';
import PixenceLogo from '../../../components/PixenceLogo';
import AnimatedBackground from '../../../components/AnimatedBackground';

const socialFormats = {
    "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
    "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
    "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
    "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
    "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
  };

  type SocialFormat = keyof typeof socialFormats;

  export default function SocialShare() {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [selectedFormat, setSelectedFormat] = useState<SocialFormat>("Instagram Square (1:1)");
    const [isUploading, setIsUploading] = useState(false);
    const [isTransforming, setIsTransforming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const imageRef = useRef<HTMLImageElement>(null);


    useEffect(() => {
        if(uploadedImage){
            setIsTransforming(true);
        }
    }, [selectedFormat, uploadedImage])

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(!file) return;
        setIsUploading(true);
        setError(null);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/image-upload", {
                method: "POST",
                body: formData
            })

            if(!response.ok) throw new Error("Failed to upload image");

            const data = await response.json();
            setUploadedImage(data.publicId);

        } catch (error) {
            console.log(error)
            setError("Failed to upload image. Please try again.")
        } finally{
            setIsUploading(false);
        }
    };

    const handleDownload = () => {
        if(!imageRef.current) return;

        fetch(imageRef.current.src)
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a");
            link.href = url;
            link.download = `${selectedFormat
          .replace(/\s+/g, "_")
          .toLowerCase()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
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
                        <Link href="/video-upload" className="flex items-center space-x-2 text-gray-300 hover:text-green-400 font-medium transition-colors">
                            <Upload className="w-4 h-4" />
                            <span>Upload</span>
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
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 mb-8 text-center">
                        <Images className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Social Media Image Creator
                        </h1>
                        <p className="text-lg text-gray-300 font-medium">
                            Transform your images for any social platform
                        </p>
                    </div>

                    {/* Upload Section */}
                    <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Upload className="w-6 h-6 mr-3 text-purple-400" />
                            Upload Your Image
                        </h2>
                        
                        {error && (
                            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 flex items-center mb-6">
                                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                                <span className="text-red-300 font-medium">{error}</span>
                            </div>
                        )}
                        
                        <div className="relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-500 file:text-white file:font-semibold hover:file:bg-purple-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all"
                            />
                        </div>

                        {isUploading && (
                            <div className="mt-4 p-4 bg-gray-700/30 border border-gray-600/50 rounded-lg">
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-400 mr-3"></div>
                                    <span className="text-gray-300 font-medium">Uploading image...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {uploadedImage && (
                        <>
                            {/* Format Selection */}
                            <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 mb-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Select Social Media Format</h2>
                                <select
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all font-medium"
                                    value={selectedFormat}
                                    onChange={(e) =>
                                        setSelectedFormat(e.target.value as SocialFormat)
                                    }
                                >
                                    {Object.keys(socialFormats).map((format) => (
                                        <option key={format} value={format} className="bg-gray-700 text-white">
                                            {format}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Preview Section */}
                            <div className="bg-gray-800/85 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-white">Preview</h3>
                                    <button 
                                        className="btn bg-gradient-to-r from-purple-500 to-pink-600 border-none text-white font-semibold px-6 py-3 disabled:opacity-50"
                                        onClick={handleDownload}
                                        disabled={isTransforming}
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        Download for {selectedFormat}
                                    </button>
                                </div>
                                
                                <div className="flex justify-center relative">
                                    {isTransforming && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-10 rounded-lg">
                                            <div className="flex items-center">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mr-3"></div>
                                                <span className="text-white font-medium">Transforming...</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="p-4 bg-gray-700/30 border border-gray-600/50 rounded-lg">
                                        <CldImage
                                            width={socialFormats[selectedFormat].width}
                                            height={socialFormats[selectedFormat].height}
                                            src={uploadedImage}
                                            sizes="100vw"
                                            alt="transformed image"
                                            crop="fill"
                                            aspectRatio={socialFormats[selectedFormat].aspectRatio}
                                            gravity='auto'
                                            ref={imageRef}
                                            onLoad={() => setIsTransforming(false)}
                                            className="max-w-full h-auto shadow-lg rounded-lg"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mt-4 text-center">
                                    <p className="text-gray-300 font-medium">
                                        Format: <span className="text-purple-400">{selectedFormat}</span>
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Resolution: {socialFormats[selectedFormat].width} × {socialFormats[selectedFormat].height}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
