import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import notionLogo from "../../assets/images/notion-logo.png"

export const AuthLayout = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          flexDirection: 'column'
        }}>
          <img src={notionLogo} alt="Notion Logo" style={{
            width: 100,
            height: 100,
            marginBottom: 3
          }} />
          Notion App</Box>
        <Outlet />
      </Container>
      {/* App.jsでRoutesで囲った親要素にOutlet要素をつけないと子要素が表示されない */}
    </div>
  )
}
