export const Breakpoints = {
  small: "40em",
  medium: "52em",
  large: "64em"
};

export const MediaQueries = {
  small: `@media screen and (min-width: ${Breakpoints.small})`,
  medium: `@media screen and (min-width: ${Breakpoints.medium})`,
  large: `@media screen and (min-width: ${Breakpoints.large})`,
  lessThanSmall: `@media screen and (max-width: ${Breakpoints.small})`,
  lessThanMedium: `@media screen and (max-width: ${Breakpoints.medium})`,
  lessThanLarge: `@media screen and (max-width: ${Breakpoints.large})`
};
