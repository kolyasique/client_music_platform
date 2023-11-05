/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { Router, useRouter } from 'next/router'

type Props = {}

const Index = () => {
    const router = useRouter()
  return (
    <MainLayout>
        <Grid container>
            <Card style={{width:900}}>
                <Box p={3}>
                    <Grid container justifyContent={'space-between'}>
                        <h1> Список треков</h1>
                        <Button onClick={()=>router.push('/tracks/create')}>
                            Загрузить
                        </Button>
                    </Grid> 
                </Box>
            </Card>
        </Grid>
    </MainLayout>
   
  )
}
export default Index