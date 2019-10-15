  ////////////////////
 // REACT HOOKS 🎣 //
////////////////////
/*

React hooks refer to two methods that were added to React somewhat recently.

----->  `useState` 📌 and `useEffect` ⚡  <-----

*/

import React from "react";




  ///////////////////////////////
 // BEFORE THE BEGINNINING ⏳ //
///////////////////////////////
/*

- What do people already know about react hooks?
- What, if anything, are you most interested to learn about react hooks?

*/




  ///////////////////
 // STATE HOOK 📌 //
////////////////////
/*

Let's look at `useState` first, because it's very, very simple to understand.
This method allows you to access React's state API. With it, you can add state
to a functional component. Before, you generally had to build a class-based
component if you wanted state. Let's see what it looks like:

*/

const MyForm: React.FC =  () => {
  const [email, setEmail] = React.useState<string>("john@smith.com");
  const [password, setPassword] = React.useState<string>();
  return <form onSubmit={(e) => {
      e.preventDefault();
      alert(`Email: ${email}\nPassword: ${password}`);
  }}>
    <input
      type="email"
      value={email}
      onChange={e => setEmail(e.currentTarget.value)}
    />
    <input
      type="password"
      value={password}
      onChange={e => setPassword(e.currentTarget.value)}
    />
    <input type="submit" value="Submit" />
  </form>
}
/*
Speaker notes:
- return values
- default value
- static typing
*/




  ////////////////////
 // EFFECT HOOK ⚡ //
/////////////////////
/*

Now let's have a look at `useEffect`. This method provides access to React's
component lifecycle; specifically `componentDidMount`, `componentDidUpdate` and
`componentWillUnmount`. Let's have a look:

*/
interface TimerProps {
  label: string;
}

const MyTimer: React.FC<TimerProps> = (props) => {
  const [elapsed, setElapsed] = React.useState<number>(0);
  const [timerHandle, setTimerHandle] = React.useState<number>();
  React.useEffect(
    () => {
      // This block will be executed when the component mounts or updates.
      setTimerHandle(
        setTimeout(() => setElapsed(elapsed + 1), 1000) as unknown as number
      );
      return () => {
        // This block will be executed then the component unmounts.
        clearTimeout(timerHandle)
      }
    },
    [ // The effect will only run when a value in this list has changed
      elapsed,
    ]
  )
  return <div>
    <h1>{props.label}</h1>
    Time elapsed is {elapsed} seconds.
  </div>
}
/*
Speaker notes:
- funky type coersion
- what will happen when component mounts
- what will happen when component unmounts
- what will happen when elapsed state changes
- what will happen when label prop changes
- exhaustive dependencies
*/




  //////////////////
 // QUESTIONS ❓ //
//////////////////
/*

🎊🎊🎊 Congratulations! You now know the basics of React hooks. 👍

*/

export {
  MyForm,
  MyTimer,
}




  ////////////////
 // SO WHAT 🤷‍ //
/////////////////
/*

- Hooks offer simpler syntax over previous versions of react
- Custom hooks can be used to house common functionality in a composable form
- Next time, we'll cover custom hooks

*/




  //////////////////////
 // AFTER THE END ⌛ //
//////////////////////
/*

- Try it out for 15 minutes (clone this repo or `npx create-react-app`)
- Do you feel like you can write hooks now? Why not?
- What would you like to learn next?
- Things you did/didn't like about this session
- Bonus: fix the compiler warning

*/




// Learn more at https://reactjs.org/docs/hooks-intro.html
// Jorgen HOOKham