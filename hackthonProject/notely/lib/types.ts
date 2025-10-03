export interface Subject {
  id: number
  name: string
  color: string
  created_at: string
}

export interface Semester {
  id: number
  name: string
  start_date: string
  end_date: string
  is_active: boolean
  created_at: string
}

export interface Note {
  id: number
  title: string
  content: string
  subject_id: number
  semester_id: number
  created_at: string
  updated_at: string
  subject?: Subject
  semester?: Semester
}

export interface CreateNoteData {
  title: string
  content: string
  subject_id: number
  semester_id: number
}

export interface UpdateNoteData {
  title?: string
  content?: string
  subject_id?: number
  semester_id?: number
}
