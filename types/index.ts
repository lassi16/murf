export interface Character {
  id: string
  name: string
  role: string
  avatar: string
  avatarAnimated: string
  description: string
  company: string
  years: number
  focus: string
}

export interface InterviewType {
  id: string
  name: string
  icon: string
  description: string
}

export interface Message {
  id: string
  type: "user" | "interviewer"
  content: string
  timestamp: Date
  character?: Character
  hasAudio?: boolean
  audioFile?: string  // URL to the audio file from Murf API
}

export interface SessionData {
  rating: number
  strengths: string[]
  improvements: string[]
  communication: string
  knowledge: string
  recommendations: string[]
}
