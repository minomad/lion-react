// 상태는 렌더링 필연인데 계쏙적인 렌더링 하기 싫고

// 다음 렌더링 발쌩해도 다음 값을 기억할려고 할때 

// ref 렌더링이 관여하지 않음 값은 기억

// class 인스턴스 랑 똑같은 

// state는 렌더링이 목적이고

// ref는 기억이 목적


// ref.current? 다음번 상태변경에 따라 리렌더링이 되더라도 여전히 기억할 수 있을때



// class Cup {
//   constructor(material) {
    
//     const initialState = {
//       material: material
//     };
    
//     this.state = initialState;
    
//     Object.freeze(initialState);
//   }

//   setMutation() {
//     this.count += 10;
//   }

//   setState(newState) {
//     this.state = typeof newState === 'function' ? newState(this.state) : ({
//       ...this.state,
//       ...newState
//     });
//     // render trigger
//     this.render();
//   }

//   // instance fields
//   // this.count
//   count = 0;

//   render() {
//     return `<div class="Cup">${this.state.material} (${++this.count})</div>`;
//   }
// }


import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

let renderCount = 0;

function App() {
  // React 상태 관리
  // 상태가 변경되면 리액트 다시 컴포넌트 실행
  const [count, setCount] = useState(0);
  // 참조 목적
  // 함수 내부에서 변경 가능한 값을 사용하고자 할 때 활용
  // 값이 변경되어도 리액트가 다시 렌더링 하지 않음
  const countRef = useRef(0); // { current: 0 } <- mutable object
  // console.log(++countRef.current);
  // console.log(++countRef.current);
  // console.log(++countRef.current);
  // console.log(++countRef.current);

  console.log('렌더링 횟수:', ++renderCount);
  console.log('컴포넌트 내부:', countRef.current);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
          countRef.current  += 10;
          console.log('이벤트 핸들러 내부:', countRef.current);
        }}>
          countRef.current is {countRef.current}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// forwardRef
// useCallback vs useMemo는 성능관련문제
// useMemo는 라이브러리 개발자가 사용하고 
// 리액트 개발자는 사용안함
// 값의 차이일뿐 
