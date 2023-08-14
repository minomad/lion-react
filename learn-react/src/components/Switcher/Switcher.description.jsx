
// 컴포넌트 함수 외부의 것을 변경해서는 안된다.
// 렌더링 프로세스에 영향을 미치기 때문.

function Switcher() {

  // 로컬 뮤테이션
  // 컴포넌트 함수 내부의 것을 변경하는 것은 가능하다.
  // 단, 렌더링 프로세스에 영향을 미치지 않아야 한다.
  // const memory = {
  //   cache: 100
  // }

  // memory.cache = 101;

  // 순수하지 않은 코드
  // 리액트 렌더링 단계에 문제를 일으킬 가능성이 있는 코드
  // 사이드 이펙트 코드

  // DOM 스크립트(DOM 요소 접근/조작)
  // Switcher 컴포넌트를 구성하는 button 요소에 class를 설정하고 싶다.
  // document.querySelector('button').classList.add('switcher');
  
  // 쓰기.읽기.수정.삭제(CRUD)
  // fetch API
  // fetch('https://random-data-api.com/api/v2/users?size=2')
  //   .then(response => response.json())
  //   .then(data => {
  //     document.querySelector('button').classList.add('switcher');
  //     console.log(data);
  //   })
  //   .catch(error => console.error(error));
  
  function fetchRandomUsers() {
    fetch('https://random-data-api.com/api/v2/users?size=2')
      .then(response => response.json())
      .then(data => {
        document.querySelector('button').classList.add('switcher');
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  // 타이머 조작
  // setTimeout(() => {
  //   fetchRandomUsers();
  // }, 3000);

  // 이벤트 리스너(핸들러)
  const handleClick = () => {
    // 이벤트 리스너(함수)는 리액트 렌더링 단계에 영향을 미치지 않음
    // 리액트 컴포넌트의 순수함을 유지하지 않아도 되는 영역
    fetchRandomUsers();
  }

  return (
    <button type="button" onClick={handleClick}></button>
  )
}

<Switcher />

export default Switcher;
