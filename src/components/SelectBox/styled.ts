import styled from 'styled-components';

export const SelectBox = styled.select`
  border: none;
  margin-top: 16px;
  height: 36px;
  font-size: 15px;
  padding: 5px 20px;
  box-shadow: 0px 0px 5px -2px #000000;
  margin-bottom: 20px;
`;

export const Option = styled.option``;
export const KeywordWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 5px 0;
`;
export const Keyword = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px 20px 5px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`;
