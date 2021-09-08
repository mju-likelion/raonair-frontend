import styled from 'styled-components';

const PlayBox = styled.div`
  height: 400px;
  width: 220px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 48px;
  margin-left: 48px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  cursor: pointer;
`;

const JudgeBox = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
`;

const Judge = styled.div`
  height: 28px;
  width: 58px;
  margin-left: 14px;
  display: flex;
  align-items: center;
`;

const JudgeHeart = styled(Judge)`
  margin-left: 0;
`;

const JudgeImg = styled.img`
  height: 20px;
  width: 21.86px;
  margin-right: 5px;
`;

const PlayImage = styled.img`
  margin: 0 auto;
  height: 279px;
  width: 192px;
  border-radius: 6px;
`;

const PlayTitle = styled.h4`
  font-size: 20px;
  margin: 0 4px 5px 0;
  text-align: center;
`;

const PlayDate = styled.p`
  text-align: center;
  color: #22222280;
  font-size: 18px;
  font-weight: lighter;
  margin: 0;
`;

const PlayComponent = ({ play }) => {
  const {
    poster,
    title,
    likes,
    star_avg: starAvg,
    start_date: startDate,
    end_date: endDate,
  } = play;
  return (
    <PlayBox>
      <JudgeBox>
        <Judge>
          <JudgeImg src='/svg/star.svg' alt='평점' />
          {starAvg}
        </Judge>
        <JudgeHeart>
          <JudgeImg src='/svg/heart.svg' alt='찜 갯수' />
          {likes}
        </JudgeHeart>
      </JudgeBox>
      {/* 포스터 이미지 구현 후 수정 필요 */}
      <PlayImage src={poster || '/svg/poster_default.svg'} />
      <PlayTitle>{title}</PlayTitle>
      <PlayDate>{`${startDate} ~ ${endDate || '별도 안내'}`}</PlayDate>
    </PlayBox>
  );
};

export default PlayComponent;
