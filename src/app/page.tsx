"use client"

import { useState } from "react"
import Sidebar from "~/components/sidebar"
import MainContent from "~/components/main-content"

export default function Home() {
  const [currentPath, setCurrentPath] = useState<string[]>(["My Drive"])
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  const navigateToBreadcrumb = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1))
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPath={currentPath} onNavigate={navigateToBreadcrumb} />
      <MainContent
        currentPath={currentPath}
        onFolderClick={navigateToFolder}
        onBreadcrumbClick={navigateToBreadcrumb}
        expandedFolders={expandedFolders}
        onToggleFolder={toggleFolder}
      />
    </div>
  )
}
