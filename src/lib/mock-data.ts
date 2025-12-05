export type FileType = {
  id: string
  name: string
  type: "folder" | "document" | "image" | "video" | "file"
  owner: string
  modified: string
  size: string
  url?: string
  folder?: string
}

export const mockFiles: FileType[] = [
  {
    id: "1",
    name: "Projects",
    type: "folder",
    owner: "me",
    modified: "Today",
    size: "—",
  },
  {
    id: "2",
    name: "Q4 Report",
    type: "document",
    owner: "me",
    modified: "2 days ago",
    size: "2.5 MB",
    url: "https://docs.google.com",
  },
  {
    id: "3",
    name: "Product Roadmap",
    type: "document",
    owner: "Team Lead",
    modified: "1 week ago",
    size: "1.8 MB",
    url: "https://docs.google.com",
  },
  {
    id: "4",
    name: "Marketing Assets",
    type: "folder",
    owner: "me",
    modified: "3 days ago",
    size: "—",
  },
  {
    id: "5",
    name: "Campaign Screenshot",
    type: "image",
    owner: "Marketing",
    modified: "5 days ago",
    size: "3.2 MB",
    url: "https://example.com/image.jpg",
  },
  {
    id: "6",
    name: "Demo Video",
    type: "video",
    owner: "me",
    modified: "1 week ago",
    size: "156 MB",
    url: "https://example.com/video.mp4",
  },
  {
    id: "7",
    name: "Archived",
    type: "folder",
    owner: "me",
    modified: "2 weeks ago",
    size: "—",
  },
  {
    id: "8",
    name: "Design System",
    type: "document",
    owner: "Design Team",
    modified: "3 weeks ago",
    size: "4.1 MB",
    url: "https://docs.google.com",
  },
]
