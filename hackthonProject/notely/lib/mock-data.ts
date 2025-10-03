import type { Note, Subject, Semester } from "./types"

export const mockSubjects: Subject[] = [
  { id: 1, name: "Mathematics", color: "#be123c", created_at: "2024-01-15T10:00:00Z" },
  { id: 2, name: "Computer Science", color: "#ec4899", created_at: "2024-01-15T10:00:00Z" },
  { id: 3, name: "Physics", color: "#6366f1", created_at: "2024-01-15T10:00:00Z" },
  { id: 4, name: "Chemistry", color: "#f97316", created_at: "2024-01-15T10:00:00Z" },
  { id: 5, name: "English Literature", color: "#4b5563", created_at: "2024-01-15T10:00:00Z" },
]

export const mockSemesters: Semester[] = [
  {
    id: 1,
    name: "Fall 2024",
    start_date: "2024-09-01",
    end_date: "2024-12-15",
    is_active: true,
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    name: "Spring 2024",
    start_date: "2024-01-15",
    end_date: "2024-05-15",
    is_active: false,
    created_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 3,
    name: "Summer 2024",
    start_date: "2024-06-01",
    end_date: "2024-08-15",
    is_active: false,
    created_at: "2024-01-15T10:00:00Z",
  },
]

export const mockNotes: Note[] = [
  {
    id: 1,
    title: "Calculus Fundamentals",
    content:
      "Introduction to limits and derivatives. Key concepts include:\n\n1. Limits - The foundation of calculus\n2. Derivatives - Rate of change\n3. Applications in real-world problems\n\nRemember: Practice makes perfect!",
    subject_id: 1,
    semester_id: 1,
    created_at: "2024-09-15T14:30:00Z",
    updated_at: "2024-09-15T14:30:00Z",
  },
  {
    id: 2,
    title: "Data Structures Overview",
    content:
      "Comprehensive overview of fundamental data structures:\n\n• Arrays - Fixed-size sequential collection\n• Linked Lists - Dynamic size, pointer-based\n• Stacks - LIFO (Last In, First Out)\n• Queues - FIFO (First In, First Out)\n• Trees - Hierarchical structure\n• Hash Tables - Key-value pairs\n\nEach has specific use cases and time complexities.",
    subject_id: 2,
    semester_id: 1,
    created_at: "2024-09-20T16:45:00Z",
    updated_at: "2024-09-22T10:15:00Z",
  },
  {
    id: 3,
    title: "Newton's Laws of Motion",
    content:
      "The three fundamental laws that form the foundation of classical mechanics:\n\n1st Law (Inertia): An object at rest stays at rest, an object in motion stays in motion, unless acted upon by an external force.\n\n2nd Law (F=ma): The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n\n3rd Law (Action-Reaction): For every action, there is an equal and opposite reaction.",
    subject_id: 3,
    semester_id: 1,
    created_at: "2024-09-18T11:20:00Z",
    updated_at: "2024-09-18T11:20:00Z",
  },
  {
    id: 4,
    title: "Organic Chemistry Basics",
    content:
      "Introduction to organic chemistry and carbon compounds:\n\n• Carbon's unique properties\n• Covalent bonding\n• Functional groups\n• Isomerism\n• Basic nomenclature rules\n\nCarbon can form 4 bonds, leading to incredible diversity in organic molecules.",
    subject_id: 4,
    semester_id: 1,
    created_at: "2024-09-25T13:10:00Z",
    updated_at: "2024-09-25T13:10:00Z",
  },
  {
    id: 5,
    title: "Shakespeare's Hamlet Analysis",
    content:
      'Character development and themes in Hamlet:\n\n**Main Characters:**\n- Hamlet: The conflicted prince\n- Claudius: The usurper king\n- Gertrude: Hamlet\'s mother\n- Ophelia: Tragic love interest\n\n**Key Themes:**\n- Revenge and justice\n- Madness vs. sanity\n- Death and mortality\n- Appearance vs. reality\n\n"To be or not to be, that is the question" - explores existential themes.',
    subject_id: 5,
    semester_id: 1,
    created_at: "2024-09-12T09:30:00Z",
    updated_at: "2024-09-14T15:45:00Z",
  },
]

// Add subject and semester data to notes for display
export const mockNotesWithRelations = mockNotes.map((note) => ({
  ...note,
  subject: mockSubjects.find((s) => s.id === note.subject_id),
  semester: mockSemesters.find((s) => s.id === note.semester_id),
}))
