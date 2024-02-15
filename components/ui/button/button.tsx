import { useState } from 'react'

function Button() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className="bg-amber-300 text-white">
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <Button />
}
