// import { useState } from "react";
// import Counter from "./Counter";
// import Info from "./Info";
import Average from "./useMemo";

// const App = () => {
//   const [visible, setVisible] =  useState(false); //기본 값이 false, 안보이는 상태

//   return (
//     <div>
//       <button
//         onClick={()=>{
//           setVisible(!visible);
//         }}
//       >
//         {visible ?  '숨기기' : '보이기'} 
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }
// //삼항연산자로 조건문 걸어 줌. visible이 true면 info가 나타남, false면 info가 숨겨짐

const App = () => {
  return <Average />
}

export default App;