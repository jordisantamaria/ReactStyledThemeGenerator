import React from "react";
import InputStyled from "./InputStyled";
import { renderWithProviders } from "../../../lib/testConfig/testUtils";
import { fireEvent } from "react-testing-library";
import { Form } from "react-final-form";
import { FormStyled } from "../basic";
import { axe } from "jest-axe";

describe("Input styled", () => {
  const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);

  test("Input shows error message when not validate", async () => {
    const {
      container,
      queryByPlaceholderText,
      getByText,
      queryByText
    } = renderWithProviders(
      <Form onSubmit={data => data => console.log(data)}>
        {({ handleSubmit }) => (
          <FormStyled
            onSubmit={handleSubmit}
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
            width={1}
          >
            <InputStyled
              name={"test"}
              placeholder={"testing"}
              validate={mustBeNumber}
            />
          </FormStyled>
        )}
      </Form>
    );
    const input = queryByPlaceholderText("testing");
    fireEvent.change(input, { target: { value: "hola" } });
    expect(getByText(/Must be a number/i)).toBeTruthy();
    fireEvent.change(input, { target: { value: 1 } });
    //queryBy se usa cuando algo no esta en el documento, para que devuelva null si no lo encuentra en vez de error
    expect(queryByText(/Must be a number/i)).toBeNull();
  });

  test("Input is accessible", async () => {
    const { container } = renderWithProviders(
      <Form onSubmit={data => data => console.log(data)}>
        {({ handleSubmit }) => (
          <FormStyled
            onSubmit={handleSubmit}
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
            width={1}
          >
            <InputStyled
              labelText={"Testing"}
              name={"test"}
              placeholder={"testing"}
            />
          </FormStyled>
        )}
      </Form>
    );
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
