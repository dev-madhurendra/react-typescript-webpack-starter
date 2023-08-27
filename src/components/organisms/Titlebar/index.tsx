import React, { useState } from "react";
import { Divider, Grid, Stack, styled } from "@mui/material";

import theme from "../../../theme";

import Download from "../../../assets/icons/Download.svg";
import ChevronDown from "../../../assets/icons/Chevron-down.svg";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import TypograpyComponent from "../../atoms/Typograpy";


const OuterGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
});

const ButtonsGrid = styled(Grid)({
  display: "flex",
  gap: "0.625rem",
});

const OptionsContainer = styled(Grid)({
  position: "absolute",
  right: "0.9375rem",
  top: "3.125rem",
});

const OptionsGrid = styled(Grid)({
  width: "15.0625rem",
  height: "18.25rem",
  borderRadius: "0.5rem",
  border: "0.0625rem solid #EBEEF1",
});

const OptionGrid = styled(Grid)({
  width: "inherit",
  height: "2.5rem",
  padding: " 0.625rem 0.625rem 0.625rem 1.25rem",
  borderRadius: "0.375rem",
  gap: "0.625rem",
  cursor: "pointer",
  "&:hover": {
    background: "#F6F8FA",
  },
});

const PopBoxContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const optionItems = [
  "Add stackholder",
  "Add bulk stackholders",
  "Update bulk stackholders",
  "Import payroll data",
  "STAKEHOLDER PROPERTIES",
  "Add custom properties",
  "Update properties",
];

interface TitleBarProps {
  popUpBox: React.ReactNode;
}

const TitleBar = ({ popUpBox }: TitleBarProps) => {
  const [isClick, setIsClick] = useState(false);

  const [isAddClick, setIsAddClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleAddClick = () => {
    setIsAddClick(!isAddClick);
  };

  return (
    <OuterGrid>
      <TypograpyComponent
        children="All Stackholders"
       variant="h4"
        styles={{ color: theme.palette.text.highemp }}
      />

      <ButtonsGrid>
        <Button
          children="Download report"
          variant="outlined"
          startIcon={<Icon imgSource={Download} imgText="DownloadIcon" />}
          buttonstyles={{
            color: theme.palette.text.medemp,
            textTransform: "none",
            border: `0.0625rem solid ${theme.palette.text.lowemp}`,
            width: "9.4375rem",
            height: "1.75rem",
            padding: "0.25rem 0.5rem 0.25rem 0.5rem",
          }}
        />

        <Grid display="flex" flexDirection={"column"} gap={2}>
          <Button
            children="Manage stackholders"
           variant="contained"
            endIcon={<Icon imgSource={ChevronDown} imgText="ChevronIcon" />}
            buttonstyles={{
              color: "white",
              textTransform: "none",
              border: `0.0625rem solid ${theme.palette.text.lowemp}`,
              width: "11.375rem",
              height: "1.75rem",
              padding: "0.25rem 0.5rem 0.25rem 0.5rem",
            }}
            onClick={handleClick}
          />

          {isClick && (
            <OptionsContainer>
              <OptionsGrid>
                {optionItems.map((option, index) => (
                  <>
                    <OptionGrid
                      key={index}
                      onClick={index === 0 ? handleAddClick : undefined}
                    >
                      <TypograpyComponent
                        children={option}
                        variant={index === 4 ? "c1" : "b2"}
                        styles={{ color: index === 4 ? "#A3ACBA" : "#625AFA" }}
                      />
                    </OptionGrid>
                    {index === 3 && <Divider></Divider>}
                  </>
                ))}
              </OptionsGrid>
            </OptionsContainer>
          )}
        </Grid>
      </ButtonsGrid>

      {isAddClick && <PopBoxContainer>{popUpBox}</PopBoxContainer>}
    </OuterGrid>
  );
};

export default TitleBar;
