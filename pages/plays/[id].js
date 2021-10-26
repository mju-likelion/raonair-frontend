import { withRouter } from 'next/router';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-width: 1280px;
  margin: 0 auto;
`;

// 그라데이션 배경
const Background = styled.div`
  width: 100%;
  height: 583px;
  background: linear-gradient(to bottom, #87cbff, #ffffff);
  position: absolute;
  z-index: -1;
  margin: 0 auto;
`;

// 컨텐츠 박스(양 옆 마진)
const ContentBox = styled.div`
  margin: 0 48px;
`;

const PlayInfomation = styled.div`
  padding-top: 82px;
  width: 100%;
  height: 925px;
`;

const InfomationTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
`;

const InfomationMain = styled.div`
  /* width: 100%; */
  height: 681px;
  padding: 56px 76px 38px 47px;
  display: flex;
`;

const InfomationDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 513px;
  height: 253px;
  margin-left: 109px;
  margin-top: 320px;
  table {
    text-align: center;
    width: 100%;
    font-size: 30px;
  }
  td {
    padding: 7px;
  }
`;

const InfomationBottom = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;

const MoreInfomationButton = styled.button`
  width: 238px;
  height: 45px;
  margin-top: 34px;
  padding: 8px;
  background-color: #529acc;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  border-color: #87cbff;
  border-radius: 5px;
  cursor: pointer;
`;

const PosterImg = styled.img`
  width: 433px;
  height: 587px;
  border-radius: 12px;
`;

const LikeBox = styled.div`
  width: 50px;
  text-align: center;
  cursor: default;
`;

const LikeButton = styled.img`
  width: 50px;
  height: 45px;
  cursor: pointer;
`;

const TitleFont = styled.p`
  font-size: 85px;
  /* font-weight: bolder; */
  color: #ffffff;
`;

const StarImg = styled.img`
  width: 30px;
  height: 30px;
`;

// Font(n) 변수명 고민 필요
const Font3 = styled.p`
  font-size: 30px;
  color: ${(props) => (props.topInfomation ? '#ffffff' : '#222222')};
`;

const Font4 = styled.p`
  font-size: 18px;
  color: #222222;
`;

const Play = ({ playData }) => {
  return (
    <MainContainer>
      <Background />
      <ContentBox>
        <PlayInfomation>
          <InfomationTop>
            <Font3 topInfomation>공연정보</Font3>
            <LikeBox>
              <LikeButton src='/svg/heart.svg' />
              <Font4>{playData.likes}개</Font4>
            </LikeBox>
          </InfomationTop>
          <TitleFont>{playData.title}</TitleFont>
          <InfomationMain>
            <PosterImg
              src={playData.poster || '/svg/poster_default.svg'}
              alt='연극이미지'
            />
            <InfomationDetail>
              {/* 태이블 코드를 좀 더 줄일 방법 생각 필요 */}
              <table>
                <tbody>
                  <tr>
                    <td>평점</td>
                    <td>가격</td>
                    <td>공연시간</td>
                  </tr>
                  <tr>
                    <td>
                      <StarImg src='/svg/star.svg' /> {playData.star_avg}
                    </td>
                    <td>{playData.price} 원</td>
                    <td>{playData.running_time} 분</td>
                  </tr>
                </tbody>
              </table>
              <InfomationBottom>
                <Font3>공연기간</Font3>
                <Font3>
                  {playData.start_date} ~ {playData.end_date || '별도공지'}
                </Font3>
              </InfomationBottom>
              <MoreInfomationButton type='button'>
                관련정보 더보기
              </MoreInfomationButton>
            </InfomationDetail>
          </InfomationMain>
        </PlayInfomation>
      </ContentBox>
    </MainContainer>
  );
};

// SSR 데이터 패치
export async function getServerSideProps({ params }) {
  const playData = {
    id: params.id,
    poster:
      'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
    title: '공연제목',
    likes: 10,
    star_avg: 3.5,
    start_date: new Date('2021-07-01').toLocaleDateString(),
    end_date: new Date('2021-11-01').toLocaleDateString(),
    price: 12000,
    running_time: 120,
  };
  return {
    props: { playData },
  };
}

export default withRouter(Play);
