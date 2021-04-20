import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const darkbutton = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.bg.primary};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.h4};
    font-family: ${theme.fonts.monospace};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.bg.primary};
`;

// const error = (theme) => `
//     color: ${theme.colors.text.error};
// `;

// const caption = (theme) => `
//     font-size: ${theme.fontSizes.caption};
//     font-weight: ${theme.fontWeights.bold};
// `;

// const label = (theme) => `
//     font-family: ${theme.fonts.heading};
//     font-size: ${theme.fontSizes.body};
//     font-weight: ${theme.fontWeights.medium};
// `;

const variants = {
  body,
  // label,
  // caption,
  // error,
  darkbutton,
  title
};

const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

export default Text;

Text.defaultProps = {
  variant: "body"
};
