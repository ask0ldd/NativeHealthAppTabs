import { createContext } from "react"

interface IBookedAppointment{
    practitioner : string
    specialty : string
    date : string
    timeslot : string
    message : string
  }
  
export const BookedAppointmentContext = createContext<IBookedAppointment>({
    practitioner : "",
    specialty : "",
    date : "",
    timeslot : "",
    message : "",
})