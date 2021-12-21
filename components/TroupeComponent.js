import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  height: 185px;
  text-align: center;
  cursor: pointer;
`;

const TroupeLogoBox = styled.div`
  width: inherit;
  height: 150px;
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
