import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StaffContainer = styled.div`
  width: 700px;
  padding: 42px 67px;
  overflow-x: hidden;
`;

// 슬라이드 영역
const StaffBox = styled.div`
  width: 750px;
  margin: 0 auto;
  display: flex;
  p {
    text-align: center;
  }
`;

const StaffItem = styled.div`
  margin: 0 35px;
  img {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
    border-radius: 100%;
    background: #f2f2f2;
    background-image: url(/svg/people_default.svg);
  }
`;

const StaffListBox = ({ children, actors }) => {
  // 현재 슬라이드 위치를 알려줌
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // next, prev버튼 이벤트
  const prevEvent = () => {
    if (currentSlide <= 0) {
      // 첫 슬라이드면 마지막 슬라이드로 이동
      setCurrentSlide(Math.round(actors.length / 4) - 1);
      // eslint-disable-next-line no-console
      console.log(actors.length / 4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextEvent = () => {
    if (currentSlide >= actors.length / 4 - 1) {
      // 끝까지 갔을 때
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%`;
  }, [currentSlide]);

  return (
    <StaffContainer>
      <StaffBox ref={slideRef}>
        {actors &&
          actors.map((actor) => (
            <StaffItem key={actor.name}>
              <img
                src={actor.photo ? actor.photo : '../svg/people_default.svg'}
                alt='배우이미지'
              />
              <p>{actor.name}</p>
              <p>{actor.position}</p>
            </StaffItem>
          ))}
      </StaffBox>
      <button type='button' onClick={prevEvent}>
        뒤
      </button>
      <button type='button' onClick={nextEvent}>
        앞
      </button>
    </StaffContainer>
  );
};

export default StaffListBox;
