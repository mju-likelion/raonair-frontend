/* eslint-disable no-console */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const PlaysContainer = styled.div`
  display: flex;
  width: 830px;
  height: 400px;
  margin: 86px 0;
  overflow-x: hidden;
`;

const SlideBox = styled.div`
  display: flex;

  /* background-color: green; */
`;

const Section = styled.div`
  width: 830px;
  min-width: 830px;
  min-height: 377px;
  display: flex;
`;

const SlideBtn = styled.img`
  transform: ${(props) => props.nextBtn && 'rotate(180deg)'};
  margin: ${(props) => (props.nextBtn ? '0 0 0 96px' : '0 96px 0 0')};
  cursor: pointer;
`;

const PlayTitle = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

const PlayDate = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const Poster = styled.img`
  width: 250px;
  height: 365px;
  border-radius: 6px;
  margin-right: 45px;
`;

const GoPlayDetail = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 59px;
`;

const TroupeOngoingPlays = ({ plays }) => {
  const slideRef = useRef();
  const slideItems = useRef(plays.length);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevEvent = () => {
    if (currentSlide <= 0) setCurrentSlide(slideItems.current - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextEvent = () => {
    if (currentSlide >= slideItems.current - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 830}px)`;
  }, [currentSlide]);

  return (
    <Container>
      <SlideBtn
        src='../svg/slide_btn.svg'
        alt='슬라이드이전버튼'
        onClick={prevEvent}
      />
      <PlaysContainer>
        <SlideBox ref={slideRef}>
          {plays.map((play) => (
            <Section key={play.id}>
              <Poster alt='포스터이미지' src={play.poster} />
              <div>
                <PlayTitle>{play.title}</PlayTitle>
                <PlayDate>
                  {play.start_date || '/svg/poster_test.svg'} ~{' '}
                  {play.end_date || '별도 안내'}
                </PlayDate>
                <GoPlayDetail>자세히 {'>'}</GoPlayDetail>
              </div>
            </Section>
          ))}
        </SlideBox>
      </PlaysContainer>
      <SlideBtn
        src='../svg/slide_btn.svg'
        alt='슬라이드이전버튼'
        nextBtn
        onClick={nextEvent}
      />
    </Container>
  );
};

export default TroupeOngoingPlays;
