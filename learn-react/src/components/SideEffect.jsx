import * as React from 'react';

function SideEffect() {
  // pure

  // impure code?
  // side effect
  // effect callback
  // useEffect hook
  React.useEffect(
    // 이펙트 콜백 함수
    // DOM 커밋 이후에 실행
    () => {
      // 이 안에 작성된 코드는 이벤트 핸들러처럼
      // 사이드 이펙트 코드를 작성할 수 있다.
      const sideEffectElement = document.querySelector('.SideEffect');
      sideEffectElement.setAttribute('lang', 'en');
    }
  );

  return (
    <div className="SideEffect">
      <h2>Side Effect</h2>
      <p>impure action</p>
    </div>
  )
}

export default SideEffect;