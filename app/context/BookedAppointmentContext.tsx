import { createContext } from "react"

interface IBookedAppointment{
    practitioner : string
    specialty : string
    date : string
    timeslot : string
    message : string
}

interface IBookedAppointmentContext{
    bookedAppointment : IBookedAppointment
    setBookedAppointment : React.Dispatch<React.SetStateAction<IBookedAppointment>> | (() => void)
}
  
export const BookedAppointmentContext = createContext<IBookedAppointmentContext>(
    {
        bookedAppointment : {
            practitioner : "",
            specialty : "",
            date : "",
            timeslot : "",
            message : "",
        },
        setBookedAppointment : () => void 0
    }
)