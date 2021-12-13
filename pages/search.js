import { withRouter } from 'next/router';

const search = ({ searchData }) => {
  const { keyword, type } = searchData;
  return (
    <>
      <p>
        {keyword}, {type}의 검색 결과입니다
      </p>
    </>
  );
};

export async function getServerSideProps({ query }) {
  // 쿼리 정보를 검색 컴포넌트에서 가져와 axios로 데이터 패치하자
  const searchData = {
    keyword: query.keyword,
    type: query.type,
  };
  return {
    props: { searchData },
  };
}

export default withRouter(search);
