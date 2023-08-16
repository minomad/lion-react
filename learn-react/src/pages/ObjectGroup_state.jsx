import { useState } from 'react';

function ObjectGroup_state() {
  // 숫자 값 상태 관리

  // 마우스의 x 좌표
  // const [mouseX, setMouseX] = useState(0);
  // 마우스의 y 좌표
  // const [mouseY, setMouseY] = useState(0);

  // 개별 상태 관리 → 그룹(묶음) 상태 관리
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handlePrintMousePosition = ({ pageX: x, pageY: y }) => {
    // setMouseX(e.clientX);
    // setMouseY(e.clientY);
    setMousePosition({ x, y });
  };

  // 객체 상태 관리
  // { x: 10, y: 96 }
  // 배열 상태 관리
  // [10, 96]

  return (
    <div
      className="m-10 flex flex-col gap-2 items-start"
      onMouseMove={handlePrintMousePosition}
    >
      <h2 className="text-indigo-600 text-2xl uppercase">
        상태 및 이펙트 학습하기
      </h2>

      <output>
        마우스 X 좌표 : {mousePosition.x} / 마우스 Y 좌표 : {mousePosition.y}
      </output>
    </div>
  );
}

export default ObjectGroup_state;
