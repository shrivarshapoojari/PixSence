import React, {useState, useEffect, useCallback} from 'react'
import {getCldImageUrl, getCldVideoUrl} from "next-cloudinary"
import { Download, Clock, FileDown, FileUp } from "lucide-react";
import dayjs from 'dayjs';
import realtiveTime from "dayjs/plugin/relativeTime"
import {filesize} from "filesize"
import { Video } from '../app/generated/prisma';

dayjs.extend(realtiveTime)

interface VideoCardProps {
    video: Video;
    onDownload: (url: string, title: string) => void;
}

const  VideoCard: React.FC<VideoCardProps> = ({video, onDownload}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [previewError, setPreviewError] = useState(false)

    const getThumbnailUrl = useCallback((publicId: string) => {
        return getCldImageUrl({
            src: publicId,
            width: 400,
            height: 225,
            crop: "fill",
            gravity: "auto",
            format: "jpg",
            quality: "auto",
            assetType: "video"
        })
    }, [])

    const getFullVideoUrl = useCallback((publicId: string) => {
        return getCldVideoUrl({
            src: publicId,
            width: 1920,
            height: 1080,

        })
    }, [])

    const getPreviewVideoUrl = useCallback((publicId: string) => {
        return getCldVideoUrl({
            src: publicId,
            width: 400,
            height: 225,
            rawTransformations: ["e_preview:duration_15:max_seg_9:min_seg_dur_1"]

        })
    }, [])

    const formatSize = useCallback((size: number) => {
        return filesize(size)
    }, [])

    const formatDuration = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.round(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
      }, []);

      const compressionPercentage = Math.round(
        (1 - Number(video.compressedSize) / Number(video.originalSize)) * 100
      );

      useEffect(() => {
        setPreviewError(false);
      }, [isHovered]);

      const handlePreviewError = () => {
        setPreviewError(true);
      };

      return (
        <div
          className="card bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure className="aspect-video relative overflow-hidden rounded-t-2xl">
            {isHovered ? (
              previewError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <p className="text-red-400 font-medium">Preview not available</p>
                </div>
              ) : (
                <video
                  src={getPreviewVideoUrl(video.publicId)}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handlePreviewError}
                />
              )
            ) : (
              <img
                src={getThumbnailUrl(video.publicId)}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center font-medium">
              <Clock size={14} className="mr-1" />
              {formatDuration(video.duration)}
            </div>
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold text-white mb-2">{video.title}</h2>
            <p className="text-gray-300 font-medium mb-3 line-clamp-2">
              {video.description}
            </p>
            <p className="text-sm text-gray-400 font-medium mb-4">
              Uploaded {dayjs(video.createdAt).fromNow()}
            </p>
            
            {/* File Size Information */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
                <div className="flex items-center mb-1">
                  <FileUp size={16} className="mr-2 text-blue-400" />
                  <span className="font-semibold text-white text-sm">Original</span>
                </div>
                <div className="text-gray-300 font-medium">{formatSize(Number(video.originalSize))}</div>
              </div>
              <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/30">
                <div className="flex items-center mb-1">
                  <FileDown size={16} className="mr-2 text-green-400" />
                  <span className="font-semibold text-white text-sm">Compressed</span>
                </div>
                <div className="text-gray-300 font-medium">{formatSize(Number(video.compressedSize))}</div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between items-center">
              <div className="bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30">
                <span className="text-purple-300 font-bold text-sm">
                  {compressionPercentage}% smaller
                </span>
              </div>
              <button
                className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold btn-sm"
                onClick={() =>
                  onDownload(getFullVideoUrl(video.publicId), video.title)
                }
              >
                <Download size={16} className="mr-1" />
                Download
              </button>
            </div>
          </div>
        </div>
      );
}

export default VideoCard
