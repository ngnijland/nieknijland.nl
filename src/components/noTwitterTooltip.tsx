import React from "react"
import styled from "styled-components"

import ArrowDownIcon from "./arrowDownIcon"

export interface NoTwitterTooltipProps {
  state: string
}

const Root = styled.div<{ state: string }>`
  display: flex;
  flex: 0 1 auto;
  align-items: center;

  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
  opacity: ${({ state }) =>
    state === "entering" || state === "entered" ? "1" : "0"};
  transform: ${({ state }) =>
    state === "entering" || state === "entered"
      ? "translateX(0)"
      : "translateX(0.25rem)"};
`

const Icon = styled(ArrowDownIcon)`
  flex: 0 0 auto;
  width: 0.625rem;
  margin-right: 0.25rem;

  transform: rotate(90deg);

  @media (min-width: 600px) {
    width: 1rem;
    margin-right: 0.5rem;
  }
`

const Text = styled.span`
  display: block;

  font-size: 0.75rem;
  line-height: 1;

  @media (min-width: 600px) {
    margin-top: 0.125rem;

    font-size: 0.875rem;
  }
`

const SubText = styled(Text)`
  margin-top: 0.25rem;

  color: var(--text-color-secondary);

  @media (min-width: 600px) {
    margin-top: 0.25rem;
  }
`

function NoTwitterTooltip({ state }: NoTwitterTooltipProps): JSX.Element {
  return (
    <Root state={state}>
      <Icon />
      <div>
        <Text>Suspended for an unknown reason</Text>
        <SubText>Waiting for a response from Twitter</SubText>
      </div>
    </Root>
  )
}

export default NoTwitterTooltip
