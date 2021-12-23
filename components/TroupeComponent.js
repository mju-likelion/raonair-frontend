import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 185px;
  margin-bottom: 56px;
  margin-left: 30px;
  text-align: center;
  cursor: pointer;
  p {
    font-size: 24px;
    font-size: bold;
  }
`;

const TroupeLogoBox = styled.div`
  width: inherit;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: silver;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TroupeComponenet = ({ troupe }) => {
  return (
    <Card>
      <TroupeLogoBox url={troupe.logo} />
      <p>{troupe.name}</p>
    </Card>
  );
};

export default TroupeComponenet;
