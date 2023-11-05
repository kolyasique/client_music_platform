import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material'

// type Props = {

// }

//React.FC - 
const MainLayout=({children}: any)=> {
  return (
    <>
        <NavBar/>
        <Container style={{margin:'90px 0'}}>
        {children}
        </Container>
    </>
    
  )
}
export default MainLayout