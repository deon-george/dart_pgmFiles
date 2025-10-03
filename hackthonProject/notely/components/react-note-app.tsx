"use client"

import type React from "react"
import { useState, useCallback, useMemo } from "react"
import { TranslucentHeader } from "@/components/translucent-header"
import { TranslucentFooter } from "@/components/translucent-footer"
import { HeroSection } from "@/components/hero-section"
import { NotesGrid } from "@/components/notes-grid"
import { SubjectManager } from "@/components/subject-manager"
import { SemesterManager } from "@/components/semester-manager"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockNotesWithRelations, mockSubjects, mockSemesters } from "@/lib/mock-data"
import type { Note, Subject, Semester, CreateNoteData, UpdateNoteData } from "@/lib/types"
import { BookOpen, Calendar, FileText, Home } from "lucide-react"

export const ReactNoteApp: React.FC = () => {
  // React state management
  const [notes, setNotes] = useState<Note[]>(mockNotesWithRelations)
  const [subjects, setSubjects] = useState<Subject[]>(mockSubjects)
  const [semesters, setSemesters] = useState<Semester[]>(mockSemesters)
  const [activeTab, setActiveTab] = useState("home")

  const stats = useMemo(
    () => ({
      notesCount: notes.length,
      subjectsCount: subjects.length,
      semestersCount: semesters.length,
    }),
    [notes.length, subjects.length, semesters.length],
  )

  const handleCreateNote = useCallback(
    (data: CreateNoteData) => {
      const newNote: Note = {
        id: Math.max(...notes.map((n) => n.id), 0) + 1,
        ...data,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        subject: subjects.find((s) => s.id === data.subject_id),
        semester: semesters.find((s) => s.id === data.semester_id),
      }
      setNotes((prev) => [newNote, ...prev])
    },
    [notes, subjects, semesters],
  )

  const handleUpdateNote = useCallback(
    (id: number, data: UpdateNoteData) => {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === id
            ? {
                ...note,
                ...data,
                updated_at: new Date().toISOString(),
                subject: data.subject_id ? subjects.find((s) => s.id === data.subject_id) : note.subject,
                semester: data.semester_id ? semesters.find((s) => s.id === data.semester_id) : note.semester,
              }
            : note,
        ),
      )
    },
    [subjects, semesters],
  )

  const handleDeleteNote = useCallback((id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }, [])

  const handleCreateSubject = useCallback(
    (data: { name: string; color: string }) => {
      const newSubject: Subject = {
        id: Math.max(...subjects.map((s) => s.id), 0) + 1,
        ...data,
        created_at: new Date().toISOString(),
      }
      setSubjects((prev) => [...prev, newSubject])
    },
    [subjects],
  )

  const handleUpdateSubject = useCallback((id: number, data: { name?: string; color?: string }) => {
    setSubjects((prev) => prev.map((subject) => (subject.id === id ? { ...subject, ...data } : subject)))
    setNotes((prev) =>
      prev.map((note) => (note.subject_id === id ? { ...note, subject: { ...note.subject!, ...data } } : note)),
    )
  }, [])

  const handleDeleteSubject = useCallback((id: number) => {
    setSubjects((prev) => prev.filter((subject) => subject.id !== id))
    setNotes((prev) => prev.filter((note) => note.subject_id !== id))
  }, [])

  const handleCreateSemester = useCallback(
    (data: { name: string; start_date: string; end_date: string; is_active: boolean }) => {
      const newSemester: Semester = {
        id: Math.max(...semesters.map((s) => s.id), 0) + 1,
        ...data,
        created_at: new Date().toISOString(),
      }

      if (data.is_active) {
        setSemesters((prev) => prev.map((semester) => ({ ...semester, is_active: false })))
      }

      setSemesters((prev) => [...prev, newSemester])
    },
    [semesters],
  )

  const handleUpdateSemester = useCallback(
    (id: number, data: { name?: string; start_date?: string; end_date?: string; is_active?: boolean }) => {
      if (data.is_active) {
        setSemesters((prev) =>
          prev.map((semester) => (semester.id === id ? { ...semester, ...data } : { ...semester, is_active: false })),
        )
      } else {
        setSemesters((prev) => prev.map((semester) => (semester.id === id ? { ...semester, ...data } : semester)))
      }

      setNotes((prev) =>
        prev.map((note) => (note.semester_id === id ? { ...note, semester: { ...note.semester!, ...data } } : note)),
      )
    },
    [],
  )

  const handleDeleteSemester = useCallback((id: number) => {
    setSemesters((prev) => prev.filter((semester) => semester.id !== id))
    setNotes((prev) => prev.filter((note) => note.semester_id !== id))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <TranslucentHeader />

      <main className="pt-16">
        {activeTab === "home" && <HeroSection />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 backdrop-translucent border-border/50">
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Notes</span>
              </TabsTrigger>
              <TabsTrigger value="subjects" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Subjects</span>
              </TabsTrigger>
              <TabsTrigger value="semesters" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Semesters</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="mt-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Welcome to Notely</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your intelligent note-taking companion. Organize your academic journey with style and efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{stats.notesCount} Notes</h3>
                    <p className="text-muted-foreground">Total notes created</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                    <BookOpen className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{stats.subjectsCount} Subjects</h3>
                    <p className="text-muted-foreground">Organized by subject</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                    <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{stats.semestersCount} Semesters</h3>
                    <p className="text-muted-foreground">Tracked by semester</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="mt-8">
              <NotesGrid
                notes={notes}
                subjects={subjects}
                semesters={semesters}
                onCreateNote={handleCreateNote}
                onUpdateNote={handleUpdateNote}
                onDeleteNote={handleDeleteNote}
              />
            </TabsContent>

            <TabsContent value="subjects" className="mt-8">
              <SubjectManager
                subjects={subjects}
                onCreateSubject={handleCreateSubject}
                onUpdateSubject={handleUpdateSubject}
                onDeleteSubject={handleDeleteSubject}
              />
            </TabsContent>

            <TabsContent value="semesters" className="mt-8">
              <SemesterManager
                semesters={semesters}
                onCreateSemester={handleCreateSemester}
                onUpdateSemester={handleUpdateSemester}
                onDeleteSemester={handleDeleteSemester}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <TranslucentFooter />
    </div>
  )
}

export default ReactNoteApp
