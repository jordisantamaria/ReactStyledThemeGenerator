// Copyright 2004-present Facebook. All Rights Reserved.

import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Box } from "../components/UI/basic";

Enzyme.configure({ adapter: new Adapter() });

it("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<Box>Hello</Box>);

  expect(checkbox.text()).toEqual("<Styled(Component) />");
});
