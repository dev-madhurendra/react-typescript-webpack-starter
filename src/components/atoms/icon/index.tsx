import React from 'react'
interface IconProps{
    imgSource?: string;
    imgText?:string;
    height?:string;
    width?:string;
    styles?:React.CSSProperties;
}
const Icon = ({imgSource,imgText,height,width,styles}:IconProps) => {
  return (
    <img  src={imgSource} alt={imgText} width={width} height={height} style={styles}/>
      
    
  )
}

export default Icon