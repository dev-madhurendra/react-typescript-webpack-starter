import React from 'react'
interface DropdownProps{
   icon?:React.ReactNode;
}
type OptionProps={
  id:number
  name:string
  value:string
}
type CustomProps={
  handleSelect:any
  label:string 
  options:any
}
const Dropdown = (props:CustomProps) => {

  return (
    <select onChange={props.handleSelect} style={{backgroundColor:"#625AFA",color:"white" ,height:"30px"}}>
       <option value="" >{props.label}</option>
       {props.options.map((item:OptionProps)=>{
        return <option key={item.id} value={item.value}>{item.name}</option>
       })}

    </select>
  )
}

export default Dropdown