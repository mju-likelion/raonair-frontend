/* eslint-disable no-console */
import { useState } from 'react';
import styled from 'styled-components';

const StarList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 3px;
  margin-top: 25px;
  width: 327px;
  height: 51px;
`;

const StarItem = styled.img`
  width: 48px;
  height: 48px;
  :hover {
    cursor: pointer;
  }
`;

const Star = () => {
  const imgUrl = [
    '../svg/star_default.svg',
    '../svg/star_hover.svg',
    '../svg/star.svg',
  ];

  const [starState, setStarState] = useState(imgUrl[0]);

  return (
    <>
      <StarList>
        {/* map으로 별점 관리하기 */}
        {/* 별점 누르거나 hover할 때 색이 바뀌는 인터렉션 구현하기 */}
        <StarItem src={starState} />
        <StarItem src={starState} />
        <StarItem src={starState} />
        <StarItem src={starState} />
        <StarItem src={starState} />
        <StarItem src={starState} />
      </StarList>
    </>
  );
};

export default Star;
