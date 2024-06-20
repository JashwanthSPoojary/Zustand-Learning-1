
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounterStore } from './store'
import { useEffect } from 'react'

const logCount = () =>{
  const count = useCounterStore.getState().count;
  console.log("count",count);
}
const setCount = () =>{
  useCounterStore.setState({count: 9});
}

function App() {
  // const count = useCounterStore((state)=> state.count);
  // another way to render
  const { count } = useCounterStore((state)=> state);
  const increment = useCounterStore((state)=> state.increment);
  const decrement = useCounterStore((state)=> state.decrement);
  const incrementAsync = useCounterStore((state)=> state.incrementAsync);

  
  useEffect(()=>{
    logCount();
    setCount();
  },[]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* onClick={() => setCount((count) => count + 1)}> */}
        <button onClick={incrementAsync} >
          +
        </button>
        <button >
          count is {count}
        </button>
        <button onClick={decrement} >
          -
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
