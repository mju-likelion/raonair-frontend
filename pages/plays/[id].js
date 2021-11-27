import { withRouter } from 'next/router';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import Comment from '../../components/Comment';
import CommentInput from '../../components/CommentInput';
import LikeButton from '../../components/LikeComponent';
import SectorTitleBox from '../../components/SectorTitleBoxComponent';
import StaffListBox from '../../components/StaffListBox';
// import Star from '../../components/Star';

const MainContainer = styled.div`
  display: inline-block;
  width: 100%;
  min-width: 1280px;
  margin: 0 auto;
  margin-bottom: 200px;
`;

// 그라데이션 배경
const Background = styled.div`
  width: 100%;
  min-width: 1280px;
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

const TitleFont = styled.p`
  font-size: 85px;
  /* font-weight: bolder; */
  color: #ffffff;
`;

const StarImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Actors = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 444px;
`;

const CommentSector = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 642px;
`;

const CommentPostingBtn = styled.button`
  width: 357px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  background: #49b0ff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ease-out 0.3s;
  padding: 8px 0px;
  :hover {
    background: #529acc;
  }
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
  // 별점을 받아 코멘트 정보로 전달
  const [inputStar, setInputStar] = useState(0);

  // 코멘트 입력창 트리거
  const [popupComment, setpopupComment] = useState(false);

  const popupCommentInput = () => {
    if (popupComment === false) setpopupComment(true);
    else if (popupComment === true && confirm('정말 끝내시겠습니까?')) {
      setpopupComment(false);
      setInputStar(0);
    }
  };

  // 리뷰 등록 후 초기화
  const resetComment = () => {
    setpopupComment(false);
    setInputStar(0);
  };

  // 자식에서 부모 state 조절을 위한 이벤트
  const onClickStar = (value) => {
    setInputStar(value);
  };

  return (
    <MainContainer>
      <Background />
      <ContentBox>
        <PlayInfomation>
          <InfomationTop>
            <Font3 topInfomation>공연정보</Font3>
            <LikeButton>
              <Font4>{playData.likes}개</Font4>
            </LikeButton>
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
        <hr />
        <Actors>
          <SectorTitleBox>극단 및 배우 소개</SectorTitleBox>
          <StaffListBox actors={playData.actor} />
        </Actors>
        <hr />
        <CommentSector>
          <SectorTitleBox>관람 후기</SectorTitleBox>
          <CommentPostingBtn onClick={popupCommentInput}>
            재밌게 보셨나요?
          </CommentPostingBtn>
          {/* <Star onClickStar={onClickStar} inputStar={inputStar} /> */}
          {popupComment && (
            <CommentInput
              inputStar={inputStar}
              popupCommentInput={popupCommentInput}
              resetComment={resetComment}
              onClickStar={onClickStar}
            />
          )}
          <Comment comments={playData.comments} />
        </CommentSector>
      </ContentBox>
    </MainContainer>
  );
};

// SSR 데이터 패치
export async function getServerSideProps({ params }) {
  // params는 라우터 주소에 썼떤 play.id를 받아온다
  const playData = {
    // 연극정보
    id: params,
    poster:
      'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
    title: '공연제목',
    likes: 10,
    star_avg: 3.5,
    start_date: new Date('2021-07-01').toLocaleDateString(),
    end_date: new Date('2021-11-01').toLocaleDateString(),
    price: 12000,
    running_time: 120,

    // 연극 출연 스태프 정보
    actor: [
      {
        name: '배우1',
        photo: null,
        position: '조연',
      },
      {
        name: '배우2',
        photo: null,
        position: '주인공',
      },
      {
        name: '배우3',
        photo: null,
        position: '엑스트라',
      },
      {
        name: '배우4',
        photo: null,
        position: '감독',
      },
      {
        name: '배우5',
        photo: null,
        position: '감독',
      },
      {
        name: '배우6',
        photo: null,
        position: '감독',
      },
      {
        name: '배우7',
        photo: null,
        position: '감독',
      },
    ],

    // 코멘트 리스트
    comments: [
      {
        id: 1,
        nickname: 'helloWorld',
        star: 10,
        date: '2021-03-01',
        content:
          '정말 재밌었습니다! 처음에는 좋아하는 배우님이 나오는 작품이라 봤던건데 보고나서 작품의 매력에 빠지게 됐어요! 아직 안본 분들에게 강추합니다',
      },
      {
        id: 2,
        nickname: '연극입문자',
        star: 7,
        date: '2021-10-11',
        content: '재밌었어요',
      },
      {
        id: 3,
        nickname: '배우지망생',
        star: 8,
        date: '2021-10-25',
        content: '생각외로 괜찮았어요',
      },
      {
        id: 4,
        nickname: '익명의이름',
        star: 1,
        date: '2021-11-07',
        content: '별로였어요',
      },
      {
        id: 5,
        nickname: 'bob',
        star: 2,
        date: '2021-11-11',
        content: '호불호가 갈릴 내용이었습니다',
      },
    ],
  };
  return {
    props: { playData },
  };
}

export default withRouter(Play);
