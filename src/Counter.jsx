import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>Le compteur est à : {count}</p>
      <button onClick={() => (setCount(count + 1))} >+1</button>
      <button onClick={() => (setCount(count - 1))} >-1</button>
      <div>
        <label for="count">Valeur de départ du compteur :</label>
        <input type="number" id="counter" name="counter" onChange={event => setCount(Number(event.target.value))} />
      </div>

    </div>
  )
}

export default Counter;