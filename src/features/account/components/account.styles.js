import styled from "styled-components";
import { Button } from "native-base";
import { colors } from "../../../infrastructure/theme/colors";
import Text from "../../../components/typography/text.component";

export const JoinButton = styled(Button).attrs({
  color: colors.brand.secondary
})`
  border-radius: ${(props) => props.theme.sizes[0]};
  padding: ${(props) => props.theme.space[2]};
`;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg")
})`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ContentContainer = styled.View`
  width: 85%;
  height: 76%;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const TextContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  justify-content: space-between;
  height: 30%;
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h1};
  color: ${(props) => props.theme.colors.bg.primary};
`;
