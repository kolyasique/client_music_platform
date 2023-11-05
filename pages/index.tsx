import { Button } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import MainLayout from '../layouts/MainLayout'

type Props = {}

export default function index({}: Props) {
  return (
    <>  <MainLayout>
 <div className="center">
            <h1 >Добро пожаловать!</h1>
            <h3>Здесь собраны лучшие треки!</h3>
        </div>
    </MainLayout>
       
        
        {/* В next можно делать стили прямо в JSX разметке */}
        <style jsx>
            {`  
                .center{
                    margin-top:150px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justiffy-content:center
                }
            `}
        </style>
    </>
  )
}