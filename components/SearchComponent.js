import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';

import locationState from '../globalState/locations';
import { searchTargetState } from '../globalState/search';

const Background = styled.div`
  height: 658px;
  width: 100%;
  background: url('../mainPageBackground.png');
  background-repeat: no-repeat;
  background-size: 100% 658px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadLine = styled.h2`
  color: white;
  margin-top: 87px;
`;

const SearchTargetBox = styled.div`
  width: 224px;
  height: 48px;
  margin-top: 12px;
  background: #e5e5e5;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SearchTarget = styled.p`
  width: 34px;
  height: 20px;
  margin-left: 2px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */
  text-align: center;

  /* Font default color */
  color: #222222;
`;

const HighlightBox = styled.div`
  width: 106px;
  height: 36px;
  background: #e5e5e5;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: grab;
  }
`;

const HighlightBoxPlay = styled(HighlightBox)`
  ${({ highlight }) =>
    highlight === 'play' &&
    css`
      background-color: white;
    `}
`;

const HighlightBoxTroupe = styled(HighlightBox)`
  ${({ highlight }) =>
    highlight === 'troupe' &&
    css`
      background-color: white;
    `};
`;

const SearchOption = styled.div`
  width: 378px;
`;

const OptionBox = styled.form`
  width: 900px;
  height: 110px;
  margin-top: 48px;
  background-color: white;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 36px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const OptionTitle = styled.p`
  /* margin-top: 27px; */
  margin-bottom: 14px;
  font-weight: normal;
`;

const OptionInput = styled.input`
  width: 378px;
  height: 24px;
  border: 0;
  font-size: 20px;
  margin-left: -3px;
`;

const OptionSelect = styled.select`
  width: 378px;
  height: 24px;
  border: 0;
  color: gray;
  font-size: 20px;
`;

const VerticalLine = styled.div`
  align-self: center;
  width: 1px;
  height: 90px;
  background-color: lightgray;
`;

const SubmitButton = styled.button`
  width: 52px;
  height: 110px;
  border-radius: 0 36px 36px 0;
  background-color: #49b0ff;
  border: none;
  margin-right: -28px;
  padding: 43px 0;
  cursor: pointer;
  &:hover {
    background-color: #529acc;
  }
`;

const Search = () => {
  const [selectedTarget, setSelectedTarget] = useState('play');
  const [searchTarget, setSearchTarget] = useRecoilState(searchTargetState);
  const locations = useRecoilValue(locationState);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      searchTerm: '',
      select: '',
    },
    validationSchema: Yup.object({
      // 유효성 검증 할 필요가 있는지 고민 필요
      // searchTerm: Yup.string().required('searchTerm'),
      // select: Yup.required('select'),
    }),
    onSubmit: (values) => {
      router.push({
        // 쿼리를 페이지로 전달해 검색 페이지에서 데이터를 패치한다
        pathname: '/search/',
        query: { keyword: values.searchTerm, type: values.select },
      });
    },
  });

  const handleClick = ({
    nativeEvent: {
      target: { innerText },
    },
  }) => {
    const target = innerText === '연극' ? 'play' : 'troupe';
    setSearchTarget({ ...searchTarget, target });
    setSelectedTarget(target);
    formik.resetForm();
  };

  return (
    <>
      <Background>
        <HeadLine>
          라온에어에 오신걸 환영합니다. 원하시는 연극 또는 극단을 검색해 주세요.
        </HeadLine>
        <SearchTargetBox>
          <HighlightBoxPlay highlight={selectedTarget} onClick={handleClick}>
            <SearchTarget>연극</SearchTarget>
          </HighlightBoxPlay>
          <HighlightBoxTroupe highlight={selectedTarget} onClick={handleClick}>
            <SearchTarget>극단</SearchTarget>
          </HighlightBoxTroupe>
        </SearchTargetBox>
        {selectedTarget === 'play' ? (
          <OptionBox onSubmit={formik.handleSubmit}>
            <SearchOption>
              <OptionTitle>제목</OptionTitle>
              <OptionInput
                id='searchTerm'
                type='text'
                name='searchTerm'
                placeholder='어떤 제목인가요?'
                {...formik.getFieldProps('searchTerm')}
              />
            </SearchOption>
            <VerticalLine />
            <SearchOption>
              <OptionTitle>지역</OptionTitle>
              <OptionSelect name='select' {...formik.getFieldProps('select')}>
                <option value=''>지역을 선택해 주세요</option>
                {locations.map((loc) => (
                  <option value={loc.value} key={loc.id}>
                    {loc.id}
                  </option>
                ))}
              </OptionSelect>
            </SearchOption>
            <SubmitButton type='submit'>
              <img src='../svg/search_button.svg' alt='검색' />
            </SubmitButton>
          </OptionBox>
        ) : (
          <OptionBox onSubmit={formik.handleSubmit}>
            <SearchOption>
              <OptionTitle>이름</OptionTitle>
              <OptionInput
                id='searchTerm'
                type='text'
                name='searchTerm'
                placeholder='어떤 극단인가요?'
                {...formik.getFieldProps('searchTerm')}
              />
            </SearchOption>
            <VerticalLine />
            <SearchOption>
              <OptionTitle>타입</OptionTitle>
              <OptionSelect name='select' {...formik.getFieldProps('select')}>
                <option value=''>극단 타입을 선택해 주세요</option>
                <option value='normal'>일반 극단</option>
                <option value='student'>학생 극단</option>
              </OptionSelect>
            </SearchOption>
            <SubmitButton type='submit'>
              <img src='../svg/search_button.svg' alt='검색' />
            </SubmitButton>
          </OptionBox>
        )}
      </Background>
    </>
  );
};

export default Search;
