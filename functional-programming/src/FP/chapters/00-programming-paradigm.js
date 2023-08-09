// --------------------------------------------------------------------------
// 📌 [프로그래밍 패러다임]
// --------------------------------------------------------------------------
// - 명령형, 선언형 프로그래밍 비교
// - 함수, 객체 지향 프로그래밍 비교
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 명령형 프로그래밍

const courses = [
  {
    id: 1,
    name: ' imperative programming',
  },
  {
    id: 2,
    name: 'declarative programming ',
  },
];

// console.log('원본 데이터\n', courses);

// ES2015(v6)
// [전개구문(spread syntax)]을 사용하면 배열을 복사할 수 있다.
// 얕은 복사 (shallow copy)
const updateCourses = []; // [...courses];

// 1. 과정 배열을 순환하여 각 과정 이름의 좌우 공백 제거
// 명령형으로 프로그래밍 한다.
// C, JAVA 문법
// for문
for (let i = 0, l = courses.length; i < l; i = i + 1) {
  // 객체 복제는 어떻게???
  // [전개구문(spread syntax)]을 사용한다.
  // 얕은 복사 (shallow copy)
  const course = { ...courses[i] };
  course.name = course.name.trim();
  updateCourses.push(course); // [{ ...}, { ... }]
}

// 2. 과정 배열을 순환하여 각 과정 이름 대문자화
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}

// 3. 배열 원소의 `name` 속성의 공백을 밑줄(_)로 변경하는 기능 추가
// 명령형 프로그래밍 방식으로
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, '_');
}

// console.log('업데이트 데이터\n', updateCourses);

// console.assert(
//   !Object.is(courses, updateCourses),
//   '🚨 courses와 updateCourses는 동일한 객체이다.'
// );

// --------------------------------------------------------------------------
// 선언형 프로그래밍

const subjects = [
  {
    id: 1,
    name: ' imperative programming',
  },
  {
    id: 2,
    name: 'declarative programming ',
  },
];

// console.log('원본 데이터\n', subjects);

// 1. 객체 이름(name) 속성 좌우 공백 제거 함수 선언
function toTrim(object) {
  const o = { ...object };
  o.name = o.name.trim();
  return o;
}

// console.log(toTrim(subjects[0]));
// console.log(toTrim(subjects[1]));

// 2. 객체 이름(name) 속성 대문자화 함수 선언
function toUpperCase(object) {
  const o = { ...object };
  o.name = o.name.toUpperCase();
  return o;
}

// 3. 배열 원소의 `name` 속성의 공백을 밑줄(_)로 변경하는 기능 추가
// 선언형 프로그래밍 방식으로
function toUnderscore(object) {
  const o = { ...object };
  o.name = o.name.replace(/\s+/g, '_');
  return o;
}

// console.log(toUpperCase(subjects[0]));
// console.log(toUpperCase(subjects[1]));

// 3. 과목 이름 "좌우 공백 제거" → "대문자화" 후, 새로운 과목 배열 생성
// ES5의 map()을 사용해야 한다.
// - 조건 1. 새로운 배열 반환
// - 조건 2. 배열 순환 후, 기능 처리(적용)

/* const updateSubjects = subjects.map(subject => {
  const copySubject = toTrim(subject);
  return copySubject;
}).map(subject=> {
  const copySubject = toUpperCase(subject);
  return copySubject;
}) */

const updateSubjects = subjects
  // .map(toTrim)
  // .map(toUpperCase)
  .map(toUnderscore)
  .map(toTrim);

// console.log('업데이트 데이터\n', updateSubjects);

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 함수(function)를 사용해 구현합니다.

function createCountUpButton(container, { count: initialCount = 0, step = 1 } = {}) {
  if (!container || container.nodeType !== document.ELEMENT_NODE) {
    throw new Error('container는 문서의 요소가 아닙니다.');
  }

  let count = initialCount;
  const maxCount = 10;

  const countUpButton = document.createElement('button'); // 버튼 생성

  const render = (newCount) => {
    countUpButton.textContent = String(newCount); // 클릭 -> 이벤트발생 -> 함수호출 -> 값 업데이트
  };

  const handleCountUp = (e) => {
    if (count + step <= maxCount) {
      count += step;
      render(count);
    }
  };

  countUpButton.setAttribute('type', 'button');
  countUpButton.classList.add('CountUpButton');
  countUpButton.addEventListener('click', handleCountUp);

  render(count);

  container.append(countUpButton);
}

const demoContainer = document.getElementById('demo');

// 재사용을 목적으로 하는 컴포넌트 (함수로 구현)
createCountUpButton(demoContainer);
createCountUpButton(demoContainer, { count: 1 });
createCountUpButton(demoContainer, { count: 2 });
createCountUpButton(demoContainer, { count: 0, step: 6 });

// 과제
// - `max` prop을 추가하고, count 값이 max보다 커지면 사용자가 더 이상 버튼을 누를 수 없도록 막는다.
// - `max` prop을 추가하고, count 값이 max보다 커지면 화면의 카운트는 버튼을 눌러도 max 값에 머무른다.

// --------------------------------------------------------------------------
// JavaScript 프로그래밍 패러다임
// → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

// 붕어빵틀(생성자함수: 클래스)
class CountUpButton {
  // static field
  static version = '0.0.1-alpha';

  // 기본 Props
  static defaultProps = {
    count: 0,
    step: 1,
    max: 10,
  };

  // private field
  // must be declared
  #count;
  #props = {};
  #button = null;

  // 라이프 사이클 메서드
  // 생성(constructor) 시점
  constructor(props) {
    console.log('생성 시점');
    // 클래스가 생성한 인스턴스의 상태
    this.#count = props.count ?? 0;
    // 인스턴스가 사용할 데이터(외부에서 사용자가 전달한 데이터와 내부의 기본 데이터가 병합)
    this.#props = { ...CountUpButton.defaultProps, ...props };
  }

  // 렌더 (HTMLElement Node)
  // return data type : HTMLButtonElement
  render() {
    console.log('렌더 시점');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = String(this.#count);
    this.#button = button;

    this.bindEvents();

    return button;
  }

  // 렌더 (HTML String)
  // return data type : string
  renderHTML() {
    return `
      <button type="button">${String(this.#count)}</button>
    `;
  }

  bindEvents() {
    this.#button.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }

  // 마운트(mount) 시점
  mount(container) {
    // console.log(this.#props);
    // console.log(typeof this.render());
    container?.append?.(this.render());
    // console.log(typeof this.renderHTML())
    // container?.insertAdjacentHTML('beforeend', this.renderHTML());
  }

  // 성장(update) 시점
  // 소멸(unmount) 시점
  unmount() {
    console.log('소멸 시점');
  }
}

// 새로운(new) 붕어빵(객체: 인스턴스) 생성
const firstCountUp = new CountUpButton({ count: 1 });
const secondCountUp = new CountUpButton({ count: 2, step: 6 });
const thirdCountUp = new CountUpButton({ count: 3, max: 100 });

globalThis.firstCountUp = firstCountUp;

// console.log(firstCountUp);

// const demoContainer = document.getElementById('demo');

firstCountUp.mount(demoContainer);
secondCountUp.mount(demoContainer);
thirdCountUp.mount(demoContainer);

// --------------------------------------------------------------------------
// 웹 컴포넌트(Web Components) API
// → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)

class CounterButtonComponent extends HTMLElement {
  #config = {
    count: 0,
    step: 1,
  };

  constructor() {
    super();
    this.#init();
  }

  #init() {
    const userConfig = {
      count: Number(this.getAttribute('count')),
      step: Number(this.getAttribute('step')) || 1,
    };

    this.#config = { ...this.#config, ...userConfig };
  }

  #bindEvent(e) {
    if (e.target.matches('button')) {
      this.#setCount();
      this.render();
      // 참고: https://developer.mozilla.org/ko/docs/Web/Events/Creating_and_triggering_events
      this.dispatchEvent(
        new CustomEvent('update', {
          detail: {
            count: this.#config.count,
          },
        })
      );
    }
  }

  #setCount() {
    const { count, step } = this.#config;
    this.#config.count = count + step;
  }

  connectedCallback() {
    // console.log('connected');
    this.render();
    this.addEventListener('click', (e) => this.#bindEvent(e));
  }

  disconnectedCallback() {
    // console.log('disconnected');
    this.removeEventListener('click', (e) => this.#bindEvent(e));
  }

  render() {
    const { count } = this.#config;
    this.innerHTML = `<button type="button">${count}</button>`;
  }
}

customElements.define('counter-button', CounterButtonComponent);

const counterButtonEl = document.querySelector('counter-button');

counterButtonEl.addEventListener('update', ({ detail: { count } }) => {
  document.querySelector('.web-component').textContent = String(count);
});
