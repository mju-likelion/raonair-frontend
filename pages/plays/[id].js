import { withRouter } from 'next/router'

const Play = ({ router: {query} }) => {
  // eslint-disable-next-line no-console
//   console.log('쿼리는', query)
//   const play = JSON.parse(query.play);
  return(
    <>
      {/* <h1>{play.name}</h1> */}
      <h1>개별페이지입니다</h1>
    </>
  );
}

// 연극 데이터 패치
// export async function getServerSideProps() {
//   // 더미 데이터
//   const play = [
//     {
//       id: 1,
//       poster:
//           'https://cdn.notefolio.net/img/5a/af/5aaf36082b60a519aac5db918f67fabd809ee35def6cfd2020855da5e6565db0_v1.jpg',
//       title: 'title',
//       likes: 10,
//       star_avg: 3.5,
//       start_date: new Date('2021-07-01').toLocaleDateString(),
//       end_date: null,
//     }
//   ]
//   return{
//     props: { play },
//   }
// }

export default withRouter(Play);
