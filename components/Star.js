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

  // 별점목록
  const [stars, setStars] = useState([
    { id: 1, star_state: imgUrl[0] },
    { id: 2, star_state: imgUrl[0] },
    { id: 3, star_state: imgUrl[0] },
    { id: 4, star_state: imgUrl[0] },
    { id: 5, star_state: imgUrl[0] },
  ]);

  // 점수
  const [rating, setRating] = useState(0);

  // 별점 이미지 변화
  const onClickEvent = id => {
    setStars(
      stars.map(star =>
        star.id <= id ? { ...star, star_state: imgUrl[2] } : { ...star, star_state: imgUrl[0] }
      )
    );
    setRating(id);
  };

  // 별점 hover 이벤트
  const onHoverEvnet = id => {
    setStars(
      stars.map(star =>
        star.id <= id ? { ...star, star_state: imgUrl[1] } : star
      )
    );
  }

  return (
    <>
      <StarList>
        {stars.map(star => (
          <StarItem
            src={star.star_state}
            key={star.id}
            alt='평점'
            onClick={() => onClickEvent(star.id)}
          />
        ))}
      </StarList>
    </>
  );
};

export default Star;
