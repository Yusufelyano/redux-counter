import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
   const counter = useSelector((state) => state);
   const dispatch = useDispatch()
   const handleClick = () => {
      dispatch({
         type: "плюс",
      });
   }
   const handleReduce = () => {
      dispatch({
         type: "минус",
      });
   }
   return (
      <div>
         {counter}
         <div>
            <button onClick={handleClick}>plus</button>
            <button onClick={handleReduce}>minus</button>
         </div>
      </div>
   )
}


export default Counter