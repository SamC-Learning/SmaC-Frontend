import React, { useState } from "react";
// import as dateFns from "date-fns";
// import * as dateFns from "date-fns";
import Calendar from "react-calendar";

import "./style.module.css";

// class Calendar extends React.Component {
//   state = {
//     currentMonth: new Date(),
//     selectedDate: new Date()
//   };

//   renderHeader() {
//     const dateFormat = "MMMM yyyy";

//     return (
//       <div className="header row flex-middle">
//         <div className="col col-start">
//           <div className="icon" onClick={this.prevMonth}>
//             chevron_left
//           </div>
//         </div>
//         <div className="col col-center">
//           <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
//         </div>
//         <div className="col col-end" onClick={this.nextMonth}>
//           <div className="icon">chevron_right</div>
//         </div>
//       </div>
//     );
//   }

//   renderDays() {
//     const dateFormat = "iiii";
//     const days = [];

//     let startDate = dateFns.startOfWeek(this.state.currentMonth);

//     for (let i = 0; i < 7; i++) {
//       days.push(
//         <div className="col col-center" key={i}>
//           {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
//         </div>
//       );
//     }

//     return <div className="days row">{days}</div>;
//   }

//   renderCells() {
//     const { currentMonth, selectedDate } = this.state;
//     const monthStart = dateFns.startOfMonth(currentMonth);
//     const monthEnd = dateFns.endOfMonth(monthStart);
//     const startDate = dateFns.startOfWeek(monthStart);
//     const endDate = dateFns.endOfWeek(monthEnd);

//     const dateFormat = "D";
//     const rows = [];

//     let days = [];
//     let day = startDate;
//     let formattedDate = "";

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         formattedDate = dateFns.format(day, dateFormat);
//         const cloneDay = day;
//         days.push(
//           <div
//             className={`col cell ${
//               !dateFns.isSameMonth(day, monthStart)
//                 ? "disabled"
//                 : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
//             }`}
//             key={day}
//             onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
//           >
//             <span className="number">{formattedDate}</span>
//             <span className="bg">{formattedDate}</span>
//           </div>
//         );
//         day = dateFns.addDays(day, 1);
//       }
//       rows.push(
//         <div className="row" key={day}>
//           {days}
//         </div>
//       );
//       days = [];
//     }
//     return <div className="body">{rows}</div>;
//   }

//   onDateClick = day => {
//     this.setState({
//       selectedDate: day
//     });
//   };

//   nextMonth = () => {
//     this.setState({
//       currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
//     });
//   };

//   prevMonth = () => {
//     this.setState({
//       currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
//     });
//   };

//   render() {
//     return (
//       <div className="calendar">
//         {this.renderHeader()}
//         {this.renderDays()}
//         {this.renderCells()}
//       </div>
//     );
//   }
// }

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app bg-stone-400">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
};

export default Calender;

// import React, { useMemo, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// export default function App() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [keyword, setKeyword] = useState("");
//   const [notes, setNotes] = useState([]);
//   const add = (e) => {
//     e.preventDefault();
//     setNotes((notes) => [
//       ...notes,
//       {
//         id: uuidv4(),
//         title,
//         description,
//       },
//     ]);
//   };
//   const remove = (index) => {
//     setNotes((notes) => notes.filter((_, i) => i !== index));
//   };
//   const filteredNotes = useMemo(() => {
//     if (!keyword) {
//       return notes;
//     }
//     return notes.filter(({ title, description }) => {
//       return title.includes(keyword) || description.includes(keyword);
//     });
//   }, [keyword, notes]);
//   return (
//     <div>
//       <form onSubmit={add}>
//         <h1>add note</h1>
//         <div>
//           <label>title</label>
//           <input value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label>description</label>
//           <input
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       <form>
//         <h1>search</h1>
//         <div>
//           <label>keyword</label>
//           <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
//         </div>
//       </form>
//       {filteredNotes.map((note, index) => {
//         return (
//           <div key={note.id}>
//             <h2>{note.title}</h2>
//             <p>{note.description}</p>
//             <button type="button" onClick={() => remove(index)}>
//               remove
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
