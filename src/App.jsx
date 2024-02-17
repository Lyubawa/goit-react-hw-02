import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
// import { useState } from 'react'


export default function App() {
  // const [clicks, setClicks] = useState(() => {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // });
  // const handleClick = () => {
  //   setClicks(clicks + 1)
  // };

  return (
    <>
    <Description />
      <Options
      // <button onClick={() => setCount((count) => count + 1)}></button>
      />
    <Feedback />
    </>
  )
}









// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
