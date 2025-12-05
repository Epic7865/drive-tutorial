"use client"

import { Folder, FileText, ImageIcon, Video, MoreVertical } from "lucide-react"
import { Button } from "~/components/ui/button"
import type { FileType } from "~/lib/mock-data"

interface FileItemProps {
  file: FileType
  onFolderClick?: (folderName: string) => void
}

export default function FileItem({ file, onFolderClick }: FileItemProps) {
  const getFileIcon = () => {
    switch (file.type) {
      case "folder":
        return <Folder className="w-5 h-5 text-blue-500" />
      case "document":
        return <FileText className="w-5 h-5 text-orange-500" />
      case "image":
        return <ImageIcon className="w-5 h-5 text-green-500" />
      case "video":
        return <Video className="w-5 h-5 text-purple-500" />
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />
    }
  }

  const handleClick = () => {
    if (file.type === "folder" && onFolderClick) {
      onFolderClick(file.name)
    } else if (file.type !== "folder") {
      window.open(file.url, "_blank")
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
    >
      {getFileIcon()}
      <div className="flex-1 text-left min-w-0">
        <p className="font-medium text-foreground text-sm truncate">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {file.owner} • {file.modified}
        </p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <MoreVertical className="w-4 h-4" />
      </Button>
    </button>
  )
}
