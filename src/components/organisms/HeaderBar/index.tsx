import Logo from "../../../assets/icons/Logo.svg";
import Profile from "../../../assets/icons/User.svg";
import  ChevronDown  from '../../../assets/icons/Chevron-down.svg';
import { Grid, styled } from '@mui/material';
import React from 'react'
import Icon from '../../atoms/icon';
import TypograpyComponent from '../../atoms/Typograpy';
import theme from '../../../theme';
const OuterGrid = styled(Grid)({
    display:"flex",
    justifyContent:'space-between', 
    alignItems:"center",
    padding: "8px 40px 8px 40px",
    border:"1px solid #EBEEF1",
    background:"#F6F8FA"
});

const GridOne = styled(Grid)({
    display:"flex",
    alignItems:"center",
    gap:"1.25rem"
});

const GridTwo = styled(Grid)({
    display:"flex",
    gap:"0.5rem"
});

const GridThree = styled(Grid)({
    display:"flex",
    gap:"15px",
    alignItems:"center",
});
const HeaderBar = () => {
  return (
    <OuterGrid>
        <GridOne item xs={12} sm={6}>
        <Icon imgSource={Logo} imgText="CapOne"/>
            <GridTwo  item xs={12} sm={6}>
                <TypograpyComponent children='Accounts' variant="c1" styles={{color:theme.palette.text.lowemp}} />
                <TypograpyComponent children='Meetly' variant='c1' styles={{color:theme.palette.text.highemp}} />
                <Icon imgSource={ChevronDown} imgText="ChevronDown" />
            </GridTwo>
        </GridOne>
        <GridThree>

        </GridThree>
    </OuterGrid>
  )
}

export default HeaderBar