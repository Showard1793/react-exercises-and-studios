import React from 'react'
import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
         <h1 className={classes.choresHeading}>Chores</h1>
         <p className={classes.choresText}>
            <ol>
               <li>Take the dog out</li>
               <li>Wash the dishes</li> 
               <li>Do my homework</li>    
            </ol> 
         </p>
      </div>
   );
}