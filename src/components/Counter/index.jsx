import { useSelector, useDispatch } from "react-redux";
import { decrement,increment, incrementByAmount } from "../../slices/counter/counterSlice";

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                aria-label='Increment value'
                onClick={() => dispatch(increment())}
                >
                   Добавить 1 
                </button>
                <span style={{padding: '15px'}}>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Отнять 1
                </button>
                <button
                    aria-label='incrementByAmount value'
                    onClick={() => dispatch(incrementByAmount(10))}
                    style={{marginLeft: "10px"}}
                >
                    Добавить 10
                </button>
            </div>
        </div>
    )
}