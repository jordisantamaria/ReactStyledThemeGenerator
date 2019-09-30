export const Breakpoints = {
  tablet: "768px",
  desktop: "1024px",
  desktopLarge: "1200px"
};

export const MediaQueries = {
  tablet: `@media (min-width: ${Breakpoints.tablet})`,
  desktop: `@media (min-width: ${Breakpoints.desktop})`,
  desktopLarge: `@media (min-width: ${Breakpoints.desktopLarge})`,
  lessThanSmall: `@media (max-width: ${Breakpoints.tablet})`,
  lessThanMedium: `@media (max-width: ${Breakpoints.desktop})`,
  lessThanLarge: `@media (max-width: ${Breakpoints.desktopLarge})`
};
