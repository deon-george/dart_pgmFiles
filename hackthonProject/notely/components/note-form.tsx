"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Note, Subject, Semester, CreateNoteData, UpdateNoteData } from "@/lib/types"
import { Save, X } from "lucide-react"

interface NoteFormProps {
  note?: Note
  subjects: Subject[]
  semesters: Semester[]
  onSave: (data: CreateNoteData | UpdateNoteData) => void
  onCancel: () => void
  isLoading?: boolean
}

export function NoteForm({ note, subjects, semesters, onSave, onCancel, isLoading }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title || "")
  const [content, setContent] = useState(note?.content || "")
  const [subjectId, setSubjectId] = useState(note?.subject_id?.toString() || "")
  const [semesterId, setSemesterId] = useState(note?.semester_id?.toString() || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !subjectId || !semesterId) return

    const data = {
      title: title.trim(),
      content: content.trim(),
      subject_id: Number.parseInt(subjectId),
      semester_id: Number.parseInt(semesterId),
    }

    onSave(data)
  }

  const isValid = title.trim() && subjectId && semesterId

  return (
    <Card className="backdrop-translucent border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{note ? "Edit Note" : "Create New Note"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="backdrop-blur-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={subjectId} onValueChange={setSubjectId} required>
                <SelectTrigger className="backdrop-blur-sm">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.id} value={subject.id.toString()}>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }} />
                        {subject.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select value={semesterId} onValueChange={setSemesterId} required>
                <SelectTrigger className="backdrop-blur-sm">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((semester) => (
                    <SelectItem key={semester.id} value={semester.id.toString()}>
                      {semester.name}
                      {semester.is_active && <span className="ml-2 text-xs text-accent">(Active)</span>}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note content here..."
              className="min-h-[200px] backdrop-blur-sm resize-none"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
              className="backdrop-blur-sm bg-transparent"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isValid || isLoading}
              className="glitter-effect bg-primary hover:bg-primary/90"
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Saving..." : note ? "Update Note" : "Create Note"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
