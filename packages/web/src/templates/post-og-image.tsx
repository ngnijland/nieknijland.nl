import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import TwitterIcon from "../components/twitterIcon";
import GithubIcon from "../components/githubIcon";
import Tag from "../components/tag";

export interface PostOgImageProps {
  data?: {
    post?: {
      title?: string;
    };
  };
}

const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 630px;
  padding: 50px;

  background-color: #fff;

  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;

  font-family: sans-serif;
  font-size: 42px;
  color: var(--text-color);
`;

const PostTitle = styled(Title)`
  font-size: 56px;
`;

const LogoTitle = styled(Title)`
  position: absolute;
  right: 50px;
  bottom: 46px;
`;

const Line = styled.div`
  width: 1px;
  height: 80px;
  margin: 16px 8px;

  background-color: var(--text-color);
`;

const FlexLine = styled(Line)`
  flex: 1;
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  list-style: none;
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 24px;
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const TwitterIconWrapper = styled(IconWrapper)`
  position: relative;
  top: -1px;

  width: 36px;
  height: 36px;
`;

const GithubIconWrapper = styled(IconWrapper)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SocialText = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  color: var(--text-color);
`;

export const query = graphql`
  query PostTitleQuery($id: String!) {
    post: sanityPost(_id: { eq: $id }) {
      title
    }
  }
`;

function PostOgImage(props: PostOgImageProps): JSX.Element {
  return (
    <Root>
      <Title>Blog post</Title>
      <Line />
      <PostTitle>{props?.data?.post?.title}</PostTitle>
      <FlexLine />
      <SocialList>
        <SocialItem>
          <TwitterIconWrapper>
            <TwitterIcon />
          </TwitterIconWrapper>
          <SocialText>@ngnijland</SocialText>
        </SocialItem>
        <SocialItem>
          <GithubIconWrapper>
            <GithubIcon />
          </GithubIconWrapper>
          <SocialText>ngnijland</SocialText>
        </SocialItem>
      </SocialList>
      <LogoTitle>
        <Tag>&#60;</Tag>Niek<Tag>/&#62;</Tag>
      </LogoTitle>
    </Root>
  );
}

export default PostOgImage;
