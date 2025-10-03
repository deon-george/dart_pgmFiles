"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import type { Semester } from "@/lib/types"
import { Plus, Edit, Trash2, Calendar, CheckCircle } from "lucide-react"

interface SemesterManagerProps {
  semesters: Semester[]
  onCreateSemester: (data: { name: string; start_date: string; end_date: string; is_active: boolean }) => void
  onUpdateSemester: (
    id: number,
    data: { name?: string; start_date?: string; end_date?: string; is_active?: boolean },
  ) => void
  onDeleteSemester: (id: number) => void
  isLoading?: boolean
}

export function SemesterManager({
  semesters,
  onCreateSemester,
  onUpdateSemester,
  onDeleteSemester,
  isLoading,
}: SemesterManagerProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingSemester, setEditingSemester] = useState<Semester | null>(null)
  const [name, setName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !startDate || !endDate) return

    const data = {
      name: name.trim(),
      start_date: startDate,
      end_date: endDate,
      is_active: isActive,
    }

    if (editingSemester) {
      onUpdateSemester(editingSemester.id, data)
    } else {
      onCreateSemester(data)
    }

    resetForm()
  }

  const handleEdit = (semester: Semester) => {
    setEditingSemester(semester)
    setName(semester.name)
    setStartDate(semester.start_date)
    setEndDate(semester.end_date)
    setIsActive(semester.is_active)
    setShowForm(true)
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingSemester(null)
    setName("")
    setStartDate("")
    setEndDate("")
    setIsActive(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Semesters</h2>
        <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Semester
        </Button>
      </div>

      {showForm && (
        <Card className="backdrop-translucent border-border/50">
          <CardHeader>
            <CardTitle>{editingSemester ? "Edit Semester" : "Create New Semester"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="semester-name">Semester Name</Label>
                <Input
                  id="semester-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Fall 2024, Spring 2025"
                  className="backdrop-blur-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="is-active" checked={isActive} onCheckedChange={setIsActive} />
                <Label htmlFor="is-active">Set as active semester</Label>
              </div>

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={resetForm} disabled={isLoading}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!name.trim() || !startDate || !endDate || isLoading}
                  className="glitter-effect bg-primary hover:bg-primary/90"
                >
                  {isLoading ? "Saving..." : editingSemester ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {semesters.map((semester) => (
          <Card
            key={semester.id}
            className="backdrop-translucent border-border/50 hover:shadow-lg transition-all duration-300 group"
          >
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{semester.name}</span>
                    {semester.is_active && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-accent/20"
                      onClick={() => handleEdit(semester)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive"
                      onClick={() => onDeleteSemester(semester.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {formatDate(semester.start_date)} - {formatDate(semester.end_date)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {semesters.length === 0 && !showForm && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No semesters yet</h3>
          <p className="text-muted-foreground mb-4">Create your first semester to organize notes by time period</p>
          <Button onClick={() => setShowForm(true)} className="glitter-effect bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Semester
          </Button>
        </div>
      )}
    </div>
  )
}
