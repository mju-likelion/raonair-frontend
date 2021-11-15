import styled from 'styled-components';

const StaffContainer = styled.div`
  width: 1050px;
  padding: 42px 67px;
`;

// 슬라이드 영역
const StaffBox = styled.div`
  width: 1015px;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  /* background-color: red; */
  /* 오버플로우에 따른 슬라이드 구현하기 */
  overflow-x: scroll;
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
  return (
    <StaffContainer>
      <StaffBox>
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
  );
};

export default StaffListBox;
