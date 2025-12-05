"use client"

import { ChevronRight, Upload } from "lucide-react"
import { Button } from "~/components/ui/button"
import { ThemeToggle } from "~/components/theme-toggle"
import FileItem from "~/components/file-item"
import { mockFiles } from "~/lib/mock-data"

interface MainContentProps {
  currentPath: string[]
  onFolderClick: (folderName: string) => void
  onBreadcrumbClick: (index: number) => void
  expandedFolders: Set<string>
  onToggleFolder: (folderId: string) => void
}

export default function MainContent({
  currentPath,
  onFolderClick,
  onBreadcrumbClick,
  expandedFolders,
  onToggleFolder,
}: MainContentProps) {
  const getCurrentItems = () => {
    if (currentPath.length === 1) {
      return mockFiles
    }

    // Simulate nested folder navigation
    return mockFiles.filter((file) => file.folder === currentPath[currentPath.length - 1])
  }

  const items = getCurrentItems()

  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* Header with Upload Button */}
      <header className="bg-card border-b border-border px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{currentPath[currentPath.length - 1]}</h1>
          <p className="text-sm text-muted-foreground">{items.length} items</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Upload className="w-4 h-4" />
            Upload
          </Button>
          <ThemeToggle />
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="px-8 py-3 flex items-center gap-2 text-sm bg-background border-b border-border">
        {currentPath.map((path, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
            <button onClick={() => onBreadcrumbClick(index)} className="text-primary hover:underline cursor-pointer">
              {path}
            </button>
          </div>
        ))}
      </div>

      {/* File List */}
      <div className="flex-1 overflow-auto px-8 py-6">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <p className="text-foreground font-medium">This folder is empty</p>
            <p className="text-sm text-muted-foreground mt-1">Drag files here to upload</p>
          </div>
        ) : (
          <div className="space-y-1">
            {/* File Rows */}
            {items.map((file) => (
              <FileItem key={file.id} file={file} onFolderClick={file.type === "folder" ? onFolderClick : undefined} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
