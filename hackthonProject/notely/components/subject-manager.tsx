"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Subject } from "@/lib/types"
import { Plus, Edit, Trash2, BookOpen } from "lucide-react"

interface SubjectManagerProps {
  subjects: Subject[]
  onCreateSubject: (data: { name: string; color: string }) => void
  onUpdateSubject: (id: number, data: { name?: string; color?: string }) => void
  onDeleteSubject: (id: number) => void
  isLoading?: boolean
}

const PRESET_COLORS = [
  "#be123c",
  "#ec4899",
  "#6366f1",
  "#f97316",
  "#4b5563",
  "#059669",
  "#7c3aed",
  "#dc2626",
  "#0891b2",
  "#ca8a04",
]

export function SubjectManager({
  subjects,
  onCreateSubject,
  onUpdateSubject,
  onDeleteSubject,
  isLoading,
}: SubjectManagerProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null)
  const [name, setName] = useState("")
  const [selectedColor, setSelectedColor] = useState(PRESET_COLORS[0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    if (editingSubject) {
      onUpdateSubject(editingSubject.id, { name: name.trim(), color: selectedColor })
    } else {
      onCreateSubject({ name: name.trim(), color: selectedColor })
    }

    resetForm()
  }

  const handleEdit = (subject: Subject) => {
    setEditingSubject(subject)
    setName(subject.name)
    setSelectedColor(subject.color)
    setShowForm(true)
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingSubject(null)
    setName("")
    setSelectedColor(PRESET_COLORS[0])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Subjects</h2>
        <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Subject
        </Button>
      </div>

      {showForm && (
        <Card className="backdrop-translucent border-border/50">
          <CardHeader>
            <CardTitle>{editingSubject ? "Edit Subject" : "Create New Subject"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject-name">Subject Name</Label>
                <Input
                  id="subject-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter subject name..."
                  className="backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Color</Label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_COLORS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-foreground scale-110" : "border-border hover:scale-105"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={resetForm} disabled={isLoading}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!name.trim() || isLoading}
                  className="glitter-effect bg-primary hover:bg-primary/90"
                >
                  {isLoading ? "Saving..." : editingSubject ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className="backdrop-translucent border-border/50 hover:shadow-lg transition-all duration-300 group"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: subject.color }} />
                  <span className="font-medium">{subject.name}</span>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-accent/20"
                    onClick={() => handleEdit(subject)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive"
                    onClick={() => onDeleteSubject(subject.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {subjects.length === 0 && !showForm && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No subjects yet</h3>
          <p className="text-muted-foreground mb-4">Create your first subject to start organizing your notes</p>
          <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Subject
          </Button>
        </div>
      )}
    </div>
  )
}
