import { useState } from 'react';
import styled from 'styled-components';

const StarList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 3px;
  /* margin-top: 25px; */
  width: 327px;
  height: 51px;
`;

const StarItem = styled.img`
  width: 48px;
  height: 48px;
  :hover {
    cursor: pointer;
    content: url('../svg/star_hover.svg');
  }
  :hover :nth-child(0) {
    content: url('../svg/star_hover.svg');
  }
`;

const Star = ({ getInputStar }) => {
  const imgUrl = [
    '../svg/star_default.svg',
    '../svg/star_hover.svg',
    '../svg/star.svg',
  ];

  // 별점목록
  const [stars, setStars] = useState([
    { id: 1, star_state: imgUrl[0], mouseEnter: false },
    { id: 2, star_state: imgUrl[0], mouseEnter: false },
    { id: 3, star_state: imgUrl[0], mouseEnter: false },
    { id: 4, star_state: imgUrl[0], mouseEnter: false },
    { id: 5, star_state: imgUrl[0], mouseEnter: false },
  ]);

  // 별점 클릭 이벤트
  const onClickEvent = (id) => {
    setStars(
      stars.map((star) =>
        star.id <= id
          ? { ...star, star_state: imgUrl[2], mouseEnter: false }
          : { ...star, star_state: imgUrl[0] },
      ),
    );
    getInputStar(id);
  };

  // 별점 hover 이벤트
  const onHoverEvnet = (id) => {
    setStars(
      stars.map((star) =>
        star.id <= id && star.star_state !== imgUrl[2]
          ? { ...star, mouseEnter: true }
          : star,
      ),
    );
  };

  // hover 이벤트 초기화 (초기화 이벤트가 2개인데 줄일 수 없을까 고민 필요)
  const onLeaveEvent = (id) => {
    setStars(
      stars.map((star) =>
        star.id >= id ? { ...star, mouseEnter: false } : star,
      ),
    );
  };

  // 마우스가 별점에 완전히 벗어났을 때 초기화
  const onLeaveEvent2 = () => {
    setStars(stars.map((star) => star.id && { ...star, mouseEnter: false }));
  };

  return (
    <>
      <StarList onMouseLeave={() => onLeaveEvent2()}>
        {stars.map((star) => (
          <StarItem
            src={star.mouseEnter ? imgUrl[1] : star.star_state}
            key={star.id}
            alt='평점'
            onClick={() => onClickEvent(star.id)}
            onMouseEnter={() => onHoverEvnet(star.id)}
            onMouseOutCapture={() => onLeaveEvent(star.id)}
          />
        ))}
      </StarList>
    </>
  );
};

export default Star;
