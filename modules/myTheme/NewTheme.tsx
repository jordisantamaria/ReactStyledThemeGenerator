import * as React from "react";
import { Box, Button, Flex, Icon } from "../../components/UI/basic";
import { useState } from "react";
import ThemeNameForm from "./ThemeNameForm";

const NewTheme = () => {
  const [editable, setEditable] = useState(false);

  const handleEditButton = () => {
    setEditable(!editable);
  };

  const onEditThemeName = value => {
    setEditable(false);
    console.log("value = ", value);
  };

  return (
    <Flex
      width={200}
      m={3}
      justifyContent={"center"}
      alignItems={"center"}
      css={{ height: editable ? "" : "100px", cursor: "pointer" }}
      bg={"primaryLight"}
      color={"primary"}
    >
      {editable ? (
        <ThemeNameForm
          onSubmit={onEditThemeName}
          submitButton={
            <Box m={3}>
              <Button width={1} variant={"primaryLight"}>
                Crear tema
              </Button>
            </Box>
          }
        />
      ) : (
        <Box onClick={handleEditButton}>
          Añadir nuevo tema
          <Icon
            className="icon-plus-circled"
            color={"primary"}
            css={{ display: "flex", justifyContent: "center" }}
            fontSize={"30px"}
            pt={1}
          />
        </Box>
      )}
    </Flex>
  );
};

export default NewTheme;
