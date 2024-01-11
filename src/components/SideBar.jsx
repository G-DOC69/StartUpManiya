import { useSelector, useDispatch } from "react-redux"
import { minus,plus } from "../store/CounterSlice"

const SideBar = () => {
    const count = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <button
      onClick={()=> dispatch(plus())}
      >plus</button>
      <span>{count}</span>
      <button
      onClick={()=> dispatch(minus())}
      >minus</button>
    </div>
  )
}

export default SideBar
