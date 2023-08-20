import dayjs from 'dayjs'

export type FormValues = {
  id: number
  name?: string
  role?: string
  skills: string[]
  startDate?: string
  preference?: string
}

const now = dayjs()
const today = `${now.month() + 1}/${now.date()}/${now.year()}`

export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: 'Shawn Spencer',
    role: 'Dev',
    skills: ['React', 'Angular'],
    startDate: today,
    preference: 'Work From Home',
  },
  {
    id: 2,
    name: 'Burton Guster',
    role: 'Dev',
    skills: ['React'],
    startDate: today,
    preference: 'Work From Home',
  },
  {
    id: 3,
    name: "Juliet O'Hara",
    role: 'Dev',
    skills: ['React', 'Angular'],
    startDate: today,
    preference: 'Work From Home',
  },
  {
    id: 4,
    name: 'Lassy',
    role: 'Dev',
    skills: ['React'],
    startDate: today,
    preference: 'Work From Home',
  },
]
