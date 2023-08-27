import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TableComponent = () => {
    const [stackholders, setStackholders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/stackholders')
          .then(response => {
            // Assuming your response data is an array of stackholders
            setStackholders(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    
  return (
    <div>index</div>
  )
}

export default TableComponent