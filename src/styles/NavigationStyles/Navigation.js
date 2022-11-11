import styled from 'styled-components';
export const DataList = styled.ul`
  padding-top: calc(var(--index) * 1.3);
  margin-left: ${(props) =>
    props.position === 'header' ? ' calc(var(--index) * 6);' : '0;'};
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: ${(props) =>
    props.position === 'header' ? ' start;' : 'center;'};
`;
export const StyledImg = styled.img`
  width: calc(var(--index) * 1.6);
  aspect-ratio: 1;
  margin-right: 0.8rem;
  filter: ${(props) =>
    props.color === 'white' ? 'invert(0%);' : 'invert(100%);'};
`;
