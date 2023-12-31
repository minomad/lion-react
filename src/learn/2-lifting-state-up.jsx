import debounce from '@/utils/debounce';
import { func, string } from 'prop-types';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function LiftingStateUp() {
  const [color, setColor] = useState('#352a2a');
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <>
      <Helmet>
        <title>Lifting state up - Learn</title>
      </Helmet>
      <div className="PassingProps flex flex-col gap-2">
        <Parent color={color} onChangeColor={handleChangeBgColor} />
        <OtherParent color={color} />
      </div>
    </>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

function OtherParent({ color }) {
  // 나도 데이터 필요해!
  // 단락의 배경색을 바꾸고 싶거든!
  return (
    <div
      className="Parent flex justify-center items-center text-slate-50 p-4"
      style={{ backgroundColor: color }}
    >
      <p className="">Change Background Color</p>
    </div>
  );
}

OtherParent.propTypes = {
  color: string,
};

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

Parent.propTypes = {
  ...OtherParent.propTypes,
  onChangeColor: func,
};

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child flex items-center justify-center gap-8">
      <p className="text-4xl font-extralight uppercase" style={{ color }}>
        Child
      </p>
      <input
        type="color"
        aria-label="글자 색상 변경"
        defaultValue={color}
        onChange={debounce((e) => onChangeColor(e.target.value), 500)}
      />
    </div>
  );
}

Child.propTypes = Parent.propTypes;
