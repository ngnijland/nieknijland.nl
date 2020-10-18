import styled from "styled-components"

const Tag = styled.span`
  background-color: #8b9862;
  background-image: linear-gradient(
    90deg,
    #d12c1f ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 1}%,
    #f18f35 ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 2}%,
    #fced4f ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 3}%,
    #367e33 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 4}%,
    #1951f5 ${(100 / 6) * 5}%,
    #6c1a84 ${(100 / 6) * 5}%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default Tag
