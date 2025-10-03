"use client"

import { useState } from "react"
import { NoteCard } from "@/components/note-card"
import { NoteForm } from "@/components/note-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Note, Subject, Semester, CreateNoteData, UpdateNoteData } from "@/lib/types"
import { Plus, Search, Filter } from "lucide-react"
import { useLocalStorage } from "@/hooks/use-local-storage"

interface NotesGridProps {
  notes: Note[]
  subjects: Subject[]
  semesters: Semester[]
  onCreateNote: (data: CreateNoteData) => void
  onUpdateNote: (id: number, data: UpdateNoteData) => void
  onDeleteNote: (id: number) => void
  isLoading?: boolean
}

export function NotesGrid({
  notes,
  subjects,
  semesters,
  onCreateNote,
  onUpdateNote,
  onDeleteNote,
  isLoading,
}: NotesGridProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [searchQuery, setSearchQuery] = useLocalStorage("notely-search", "")
  const [selectedSubject, setSelectedSubject] = useLocalStorage("notely-subject-filter", "all")
  const [selectedSemester, setSelectedSemester] = useLocalStorage("notely-semester-filter", "all")

  // Filter notes based on search and filters
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      !searchQuery ||
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubject = selectedSubject === "all" || note.subject_id.toString() === selectedSubject
    const matchesSemester = selectedSemester === "all" || note.semester_id.toString() === selectedSemester

    return matchesSearch && matchesSubject && matchesSemester
  })

  const handleCreateNote = (data: CreateNoteData) => {
    onCreateNote(data)
    setShowForm(false)
  }

  const handleUpdateNote = (data: UpdateNoteData) => {
    if (editingNote) {
      onUpdateNote(editingNote.id, data)
      setEditingNote(null)
    }
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
    setShowForm(false)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingNote(null)
  }

  if (showForm || editingNote) {
    return (
      <div className="max-w-4xl mx-auto">
        <NoteForm
          note={editingNote || undefined}
          subjects={subjects}
          semesters={semesters}
          onSave={editingNote ? handleUpdateNote : handleCreateNote}
          onCancel={handleCancelForm}
          isLoading={isLoading}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with search and filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-[180px] backdrop-blur-sm">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="All subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All subjects</SelectItem>
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

          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px] backdrop-blur-sm">
              <SelectValue placeholder="All semesters" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All semesters</SelectItem>
              {semesters.map((semester) => (
                <SelectItem key={semester.id} value={semester.id.toString()}>
                  {semester.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            New Note
          </Button>
        </div>
      </div>

      {/* Notes grid */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No notes found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || selectedSubject !== "all" || selectedSemester !== "all"
                ? "Try adjusting your search or filters"
                : "Create your first note to get started"}
            </p>
            <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Note
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onEdit={handleEditNote} onDelete={onDeleteNote} className="group" />
          ))}
        </div>
      )}
    </div>
  )
}
