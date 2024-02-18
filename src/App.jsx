import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import { useEffect, useState } from 'react'


const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  return savedClicks !== 0 ? JSON.parse(savedClicks) : {
    good: 0,
    neutral: 0,
    bad: 0
  };
}


export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks());
  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    });
  };

  useEffect(() => {
  window.localStorage.setItem("my-clicks", JSON.stringify(clicks))
}, [clicks])

const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

const resetFeedback = () => {
    setClicks({
    good: 0,
    neutral: 0,
    bad: 0
  })
}
  
const perPositiveFeedback = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100)
  
  return (
    <>
    <Description />
    <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
    {totalFeedback !== 0 ? <Feedback clicks={clicks} totalFeedback={totalFeedback} perPositiveFeedback={perPositiveFeedback} /> : <Notification/>}
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
