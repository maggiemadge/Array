import "./styles.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";

// ways of creating arrays
const numbers = [1, 2, 3];
console.log(numbers);

const moreNumber = new Array(1, 4); // same as the square brackets
console.log(moreNumber);

//special methods but slower than the sqaure brackets
const yetMoreNumbers = Array.of([1, 2]);
console.log(yetMoreNumbers);

//*************************************
// does not take multiple arguments. it take array like or iterables
// const allNumbers= Array.from(1,2)
// const allNumbers= Array.from([1,2])
// console.log(allNumbers)

//******************************** */
// array.from allows you to convert an iterables or array like objects into an array
// const allNumbers= Array.from('Maggie')
// console.log(allNumbers)

//array.from make it really easy when you convert an array like or an iterable to convert to an array
const people = Array.from("Hello");
console.log(people);

//**** */what you can store in an array
// numbers,  const maggie=[1.3,4]
//strings,  const hobbies=['Cooking', 'Sports']
//objects const coking=[{People}]
// arrays can be of the same type e.g const personalUse= [30,'max, {moreDetails:[]}]
// nested or multidimentionAL array:
const analytics = [
  [1, 5, 3.3],
  [-5.4, 2.4]
];

//looping through
for (const data of analytics) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

/// push, pop, unshift, shift, adding & removing elements
const hobbies = ["Cooking", "Reading"];
//using push to add item to the list of items
hobbies.push("coding");
console.log(hobbies);
//unshift -- to add item to be the first on the list
hobbies.unshift("Dancing");
console.log(hobbies);
//pop -- use to delete the last item on the list
hobbies.pop();
const allPoppedValue = hobbies.pop();
console.log("Deleted Items=>", allPoppedValue);

// function form() {
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: ""
//   });

//   function handleChange(evt) {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   }

//   return (
//     <div className="App">
//       <>
//         <Box sx={{ display: "flex", alignItems: "flex-end" }}>
//           <AccountCircleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
//           <TextField
//             id="input-with-sx"
//             name="LastName"
//             variant="standard"
//             value={state.lastName}
//             onChange={handleChange}
//           />
//         </Box>
//       </>
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// export default form;
