import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import {setCheckinDate, setCheckoutDate} from "../../../../reduxToolkit/searchSlice"

import 'react-calendar/dist/Calendar.css';
import "./Navbar.css";

function MyCalendar() {
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.search)
  console.log(searchData,"search data")

    const [value, onChange] = useState(null);
    const startDate = value?.[0]
    const endDate = value?.[1]
    const startDay = startDate ? startDate.getDate() : null;
    const endDay = endDate ? endDate.getDate() : null;
    const startDayName = startDate ? startDate.toLocaleString('default', { weekday: 'long' }) : null;
    const endDayName = endDate ? endDate.toLocaleString('default', { weekday: 'long' }) : null;
    const startMonthName = startDate ? startDate.toLocaleString('default', { month: 'long' }) : null;
    const endMonthName = endDate ? endDate.toLocaleString('default', { month: 'long' }) : null;
    const startYear = startDate ? startDate.getFullYear() : null;
    const endYear = endDate ? endDate.getFullYear() : null;

    const checkIn = {startDay,startDayName,startMonthName,startYear};
    const checkOut = {endDay,endDayName,endMonthName,endYear};

    console.log(checkIn,"Checkin")
    console.log(checkOut,"checkOut")
    console.log(startDay, startDayName, startMonthName, startYear, "<< start >>", endDay, endDayName, endMonthName, endYear)

    useEffect(()=>{
      dispatch(setCheckinDate(checkIn));
      dispatch(setCheckoutDate(checkOut));
    },[value])
  

    console.log(searchData,"search data last")
 

  return (
    <Calendar  className={"selected"}
      onChange={onChange}
      value={value}
      activeStartDate={new Date()}
      nextLabel="Next"
      next2Label="Go"
      prev2Label="Back"
      prevLabel="prev"
      showDoubleView
      selectRange
    />
  );
}

export default MyCalendar;
