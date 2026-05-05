import { Calendar } from "../ui/calendar"
import React from "react"
import { useState } from "react"
import { Button } from "../ui/button"

export default function CalendarDrawer() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const timeSlots = {
    "Morning": ["10:00", "10:30", "11:00", "11:30"],
    "Day": ["12:00", "12:30", "13:00", "13:30", "14:00", "14:15",
      "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
      "17:30", "17:45"],
    "Pm": ["18:00", "18:30", "19:00"],
  }
  return (
    <div className="w-full space-y-6 px-1">

      {/* Calendar */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-2xl border border-stone-200  p-3 bg-white w-full shadow-sm"
      />

      {/* Time slots */}
      <div className="space-y-5">
        {Object.entries(timeSlots).map(([groupName, times]) => (
          <div key={groupName} className="space-y-2">

            {/* Group label */}
            <p className="text-xs font-medium text-stone-400 uppercase tracking-widest px-1">
              {groupName}
            </p>

            {/* Divider */}
            <div className="h-px bg-stone-100" />

            {/* Buttons grid */}
            <div className="grid grid-cols-3 gap-2">
              {times.map(time => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={`
                  rounded-xl text-sm font-normal h-10 transition-all duration-150
                  ${selectedTime === time
                      ? "bg-primary text-gray-500 border-stone-800 shadow-sm"
                      : "bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50"
                    }
                `}
                >
                  {time}
                </Button>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}