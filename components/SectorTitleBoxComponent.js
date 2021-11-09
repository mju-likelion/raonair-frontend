import styled from 'styled-components';

const SectorTitleBox = styled.div`
  display: flex;
  margin-top: 58px;
  &:after,
  &:before {
    content: '';
    background: #529acc;
    width: 150px;
    height: 5px;
    font-size: 0;
    line-height: 0;
    margin: 19px;
  }
`;

const SectorTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #222222;
`;

const SectorTheme = ({ children }) => {
  return (
    <SectorTitleBox>
      <SectorTitle>{children}</SectorTitle>
    </SectorTitleBox>
  );
};

export default SectorTheme;
