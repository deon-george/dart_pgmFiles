"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Note, Subject, Semester } from "@/lib/types"
import { Edit, Trash2, Calendar, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface NoteCardProps {
  note: Note & { subject?: Subject; semester?: Semester }
  onEdit: (note: Note) => void
  onDelete: (noteId: number) => void
  className?: string
}

export function NoteCard({ note, onEdit, onDelete, className }: NoteCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card
      className={cn(
        "backdrop-translucent border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer",
        isHovered && "glitter-effect",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">{note.title}</h3>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-accent/20"
              onClick={(e) => {
                e.stopPropagation()
                onEdit(note)
              }}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation()
                onDelete(note.id)
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {note.subject && (
            <Badge variant="secondary" className="text-xs">
              <BookOpen className="w-3 h-3 mr-1" />
              {note.subject.name}
            </Badge>
          )}
          {note.semester && (
            <Badge variant="outline" className="text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {note.semester.name}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{note.content || "No content yet..."}</p>

        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Created {formatDate(note.created_at)}</span>
          {note.updated_at !== note.created_at && <span>Updated {formatDate(note.updated_at)}</span>}
        </div>
      </CardContent>
    </Card>
  )
}
