import { Button,SxProps } from "@mui/material";
import styled from "styled-components";
export type ButtonProps = {
  name: string;
  variant?: "contained" | "outlined" | "text";
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  backgroundColor?:string,
  borderRadius?:string;
  color?:string,
  border?:string,
  sx?:SxProps,
  id?:string,
  onClick?: () => void;
};
export const MyButton = (props: ButtonProps) => {

  const ButtonStyle = styled(Button)`
  && {
    background-color:${props.backgroundColor};
    color: ${props.color};
    border-radius: 4px;
    width: ${props.width}px;
    height: ${props.height}px;
    border: ${props.border};
    &:hover {
      background-color: ${props.backgroundColor};
    }
  }
`

  return (
    <ButtonStyle
        startIcon={props.icon}
        onClick={props.onClick}
        id={props.id}
        variant={props.variant}
        sx={{
          boxShadow:"none",
          ":hover":{
            boxShadow:"none"
          }
        }}
    >
        {props.name}
    </ButtonStyle>
  );
};