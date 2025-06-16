import { useSelector, useDispatch } from "react-redux";
import { decrement, decrementAsync, increment, incrementAsync, incrementByAmount } from "../../slices/counter/counterSlice";
import { useState } from "react";


export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0)

  const handleChange = (e) => {
    const inputValue = Number(e.target.value)
    if(isNaN(inputValue) || !isFinite(inputValue)){
      return
    }
    setValue(inputValue)
    
  }

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Введите число"
          style={{ marginRight: "10px" }}
          value={value}
          onChange={handleChange}
        ></input>
        <button aria-label="Async add 2" onClick={() => dispatch(incrementAsync(value))} style={{ marginRight: "10px" }}>
          Асинхронно добавить введенное число
        </button>
        <button aria-label="Async subtract 2" onClick={() => dispatch(decrementAsync(value))} style={{ marginRight: "10px" }}>
          Асинхронно убавить введенное число
        </button>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Добавить 1
        </button>
        <span style={{ padding: "15px" }}>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Отнять 1
        </button>
        <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch(incrementByAmount(10))}
          style={{ marginLeft: "10px" }}
        >
          Добавить 10
        </button>
      </div>
    </div>
  );
};
