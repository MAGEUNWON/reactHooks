// import {useState} from 'react';

// const Counter = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{value}</b>입니다.
//       </p>
//       <button onClick={()=> setValue(value + 1)}>+1</button>
//       <button onClick={()=> setValue(value - 1)}>-1</button>
//     </div>
//   )
// }

// export default Counter;

// import { useReducer } from "react";

// function reducer(state, action) {
//   //action.type에 따라 다른 작업 수행
//   switch (action.type){
//     case 'INCREMENT':
//       return {value: state.value + 1};
//     case 'DECREMENT' :
//       return {value: state.value - 1};
//   default:
//     //아무것도 해당되지 않을 때 기존 상태 반환
//     return state;
//   }
// }

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, {value : 0}); 

//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{state.value}</b>입니다.
//       </p>
//       <button onClick={()=> dispatch({type: 'INCREMENT'})}>+1</button>
//       <button onClick={()=> dispatch({type: 'DECREMENT'})}>-1</button>
//     </div>
//   )
// }

// export default Counter;


//이건 챗gpt가 만든 코드. 
import React, { useReducer } from "react";

// useReducer를 이용한 카운터 컴포넌트
function Counter() {
  // reducer 함수 정의
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

  // useReducer 훅을 이용한 state와 dispatch 함수 가져오기
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
    </div>
  );
}

export default Counter;
