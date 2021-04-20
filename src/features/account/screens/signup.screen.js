import React from "react";

import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  ContentContainer,
  JoinButton,
  Title,
  TitleContainer,
  TextContainer
} from "../components/account.styles";

const SignUpScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <ContentContainer>
        <Spacer position="bottom" size="large" />
        <TitleContainer>
          <Title>Legato</Title>
        </TitleContainer>
        <Spacer position="bottom" size="large" />
        <TextContainer>
          <Text variant="title">Create</Text>
          <Text variant="title">Connect</Text>
          <Text variant="title">Collaborate</Text>
        </TextContainer>
        <Spacer position="bottom" size="xxl" />
        <JoinButton dark full>
          <Text variant="darkbutton">Sign In / Join</Text>
        </JoinButton>
        <Spacer position="bottom" size="large" />
      </ContentContainer>
      <Spacer position="top" size="xlarge" />
    </AccountBackground>
  );
};

export default SignUpScreen;
