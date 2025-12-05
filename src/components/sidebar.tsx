"use client"

import type React from "react"

import { MoreVertical, Plus, Trash2, Star } from "lucide-react"
import { Button } from "~/components/ui/button"

interface SidebarProps {
  currentPath: string[]
  onNavigate: (index: number) => void
}

export default function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b border-border">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-primary-foreground">G</span>
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">Google Drive</p>
          <p className="text-xs text-muted-foreground">User</p>
        </div>
      </div>

      {/* Upload Button */}
      <div className="p-4">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <Plus className="w-5 h-5" />
          New
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        <NavItem icon={Star} label="Starred" isActive={false} />
        <NavItem icon={MoreVertical} label="Recent" isActive={false} />
        <NavItem icon={Trash2} label="Trash" isActive={false} />
      </nav>

      {/* Storage Info */}
      <div className="p-4 border-t border-border">
        <div className="mb-2">
          <p className="text-xs font-medium text-foreground">Storage</p>
          <p className="text-xs text-muted-foreground">15 GB used of 15 GB</p>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-full bg-destructive" />
        </div>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ComponentType<{ className: string }>
  label: string
  isActive: boolean
}

function NavItem({ icon: Icon, label, isActive }: NavItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  )
}
