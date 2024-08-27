import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "Bad" , value: "Unhealthy" },{label: "Good" , value: "Decent"},{label: "Excellent" , value: "Very Healthy"}];
   
const [boardName, setName] = useState("no boards yet!") 
const handleChange = (event) => {
      setName(event.target.value)
   }



   boards.map((board) => {

      return (
         <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
             <option value = {board.value}>{board.label}</option>
         </select>
   
         <p>Saved to {boardName}!</p>
         </div>
      )})

 
   
   
   boards.map((board) => {

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
          <option value = {board.value}>{board.label}</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   )}); 
}
