import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerField = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="pt-1 px-4 ">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        minDate={new Date()}
        placeholderText="Select a date"
        className="w-full"
      />
    </div>
  )
}

export default DatePickerField
