/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {
  Container,
  Retweeted,
  RetweetActionIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetActionIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>João DeVitor</strong>
            <span>@jaodevitor</span>
            <Dot />
            <time>07 de jul</time>
          </Header>

          <Description>Sucrilos Kellogs 🐱‍🚀🐯</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              1929
            </Status>
            <Status>
              <LikeIcon />
              12092
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
