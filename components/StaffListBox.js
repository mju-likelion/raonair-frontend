import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const StaffContainer = styled.div`
  position: relative;
  width: 910px;
  margin: 42px 0px;
  overflow-x: hidden;
  display: flex;
`;

// 슬라이드 영역
const StaffBox = styled.div`
  width: 910px;
  margin: 0 auto;
  display: flex;
  justify-self: center;
  p {
    text-align: center;
  }
`;

const StaffItem = styled.div`
  margin: 0 31px;
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

const SlideBtn = styled.img`
  // nextBtn은 이미지 회전
  transform: ${(props) => props.nextBtn && 'rotate(180deg)'};
  cursor: pointer;
`;

const StaffListBox = ({ children, actors }) => {
  // 현재 슬라이드 위치를 알려줌
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // next, prev버튼 이벤트
  const prevEvent = () => {
    if (currentSlide <= 0) {
      // 첫 슬라이드면 마지막 슬라이드로 이동
      setCurrentSlide(Math.round(actors.length / 5));
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextEvent = () => {
    if (currentSlide >= actors.length / 5 - 1) {
      // 끝까지 갔을 때
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    // 슬라이드 애니메이션 x좌표를 n00%만큼 움직인다
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%`;
  }, [currentSlide]);

  return (
    <Container>
      <SlideBtn
        src='../svg/slide_btn.svg'
        alt='슬라이드이전버튼'
        onClick={prevEvent}
      />
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
      </StaffContainer>
      <SlideBtn
        src='../svg/slide_btn.svg'
        alt='슬라이드다음버튼'
        onClick={nextEvent}
        nextBtn
      />
    </Container>
  );
};

export default StaffListBox;
