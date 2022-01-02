import { withRouter } from 'next/router';
import styled from 'styled-components';

import LikeComponent from '../../components/LikeComponent';
import PlayList from '../../components/PlayList';
import SectorTitleBoxComponent from '../../components/SectorTitleBoxComponent';
import StaffListBox from '../../components/StaffListBox';
import TroupeOngoingPlays from '../../components/TroupeOngoingPlays';

const MainContainer = styled.div`
  padding: 0 48px;
`;

const Background = styled.div`
  width: 100%;
  height: 509px;
  position: absolute;
  background: linear-gradient(to bottom, #87cbff, #ffffff);
  z-index: -1;
`;

const TitleSection = styled.div`
  width: 100%;
  height: 583px;
`;

const TitleSectionRight = styled.div`
  float: right;
  text-align: right;
  :nth-last-child() {
    float: right;
  }
`;

const SuggesetTroupe = styled.p`
  font-size: 14px;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
  padding: 20px 0 10px 0;
`;

const TroupeName = styled.div`
  font-size: 96px;
  font-weight: bold;
  word-break: break-all;
  color: #fff;
  padding: 116px 0 21px 119px;
  span {
    border-bottom: 6px solid #fff;
  }
`;

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const troupes = ({ plays, staff }) => {
  // 진행 중인 공연 디자인 수정
  // 진행 예정, 지난 공연 카드 디자인 별도로 제작하기
  return (
    <>
      <Background />
      <MainContainer>
        <TitleSection>
          <TitleSectionRight>
            <SuggesetTroupe>잘못된 정보가 있나요?</SuggesetTroupe>
            <LikeComponent />
          </TitleSectionRight>
          <TroupeName>
            <span>극단 이름</span>
          </TroupeName>
        </TitleSection>
        <SectionBox>
          <SectorTitleBoxComponent>구성원</SectorTitleBoxComponent>
          <StaffListBox actors={staff} />
        </SectionBox>
        <SectionBox>
          <SectorTitleBoxComponent>진행 중인 공연</SectorTitleBoxComponent>
          {/* 디자인 수정하기 */}
          <TroupeOngoingPlays plays={plays} />
        </SectionBox>
        <SectionBox>
          <SectorTitleBoxComponent>진행 예정 공연</SectorTitleBoxComponent>
          <PlayList plays={plays} />
        </SectionBox>
        <SectionBox>
          <SectorTitleBoxComponent>지난 공연</SectorTitleBoxComponent>
          <PlayList plays={plays} />
        </SectionBox>
      </MainContainer>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const plays = [
    {
      id: 1,
      poster:
        'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
      title: '한여름밤의 꿈',
      likes: 10,
      star_avg: 3.5,
      start_date: new Date('2021-07-01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 2,
      poster:
        'http://kpenews.com/Files/4/News/202004/114_20200422233333060.JPG',
      title: '렁스',
      likes: 5,
      star_avg: 3.5,
      start_date: new Date('2021-08-28').toLocaleDateString(),
      end_date: new Date('2021.12.31').toLocaleDateString(),
    },
    {
      id: 3,
      poster:
        'http://www.job-post.co.kr/news/photo/202110/37086_35174_2649.jpg',
      title: '과학하는 마음',
      likes: 7,
      star_avg: 4,
      start_date: new Date('2021.09.01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 4,
      poster:
        'http://www.newsfreezone.co.kr/news/photo/201907/119453_105123_503.jpg',
      title: 'One More',
      likes: 3,
      star_avg: 3.8,
      start_date: new Date('2021.11.31').toLocaleDateString(),
      end_date: null,
    },

    {
      id: 5,
      poster:
        'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
      title: '한여름밤의 꿈',
      likes: 10,
      star_avg: 3.5,
      start_date: new Date('2021-07-01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 6,
      poster:
        'http://kpenews.com/Files/4/News/202004/114_20200422233333060.JPG',
      title: '렁스',
      likes: 5,
      star_avg: 3.5,
      start_date: new Date('2021-08-28').toLocaleDateString(),
      end_date: new Date('2021.12.31').toLocaleDateString(),
    },
    {
      id: 7,
      poster:
        'http://www.job-post.co.kr/news/photo/202110/37086_35174_2649.jpg',
      title: '과학하는 마음',
      likes: 7,
      star_avg: 4,
      start_date: new Date('2021.09.01').toLocaleDateString(),
      end_date: null,
    },
    {
      id: 8,
      poster:
        'http://www.newsfreezone.co.kr/news/photo/201907/119453_105123_503.jpg',
      title: 'One More',
      likes: 3,
      star_avg: 3.8,
      start_date: new Date('2021.11.31').toLocaleDateString(),
      end_date: null,
    },
  ];

  const staff = [
    {
      name: '이익준',
      photo:
        'https://search.pstatic.net/common?type=f&size=210x236&quality=90&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20210729_92%2F1627528260198Oo5kG_JPEG%2F60_18839944_main_image_new_1627528260149.jpg',
      position: '주연',
    },
    {
      name: '최송화',
      photo:
        'https://search.pstatic.net/common?type=f&size=210x236&quality=90&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20210729_84%2F1627529163250ECITm_JPEG%2F60_18840167_main_image_new_1627529163239.jpg',
      position: '조연',
    },
    {
      name: '김준완',
      photo:
        'https://search.pstatic.net/common?type=f&size=210x236&quality=90&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20210729_17%2F1627528731967ygtPt_JPEG%2F60_18840125_main_image_new_1627528731941.jpg',
      position: '조연',
    },
    {
      name: '이정원',
      photo:
        'https://search.pstatic.net/common?type=f&size=210x236&quality=90&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20210729_40%2F1627519801787DgiDu_JPEG%2F60_main_image_new_1627519801726.jpg',
      position: '조연',
    },
    {
      name: '이우정',
      photo: null,
      position: '극본',
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
  ];

  return {
    props: { plays, staff },
  };
}

export default withRouter(troupes);
