import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import DeliveryDetailsForm from './routes/delivery/DeliveryDetailsForm'
import { ThemeProvider } from 'styled-components'
import DeliveryShipmentForm from './routes/delivery/DeliveryShipmentForm'
import DeliveryResume from './routes/delivery/DeliveryResume'

function App() {
  const theme = {
    colors: {
      orange: "#FF8A00",
      medOrange: "#ede1c1",
      lightOrange: "#FFFAE6",
      green: "#1BD97B",
      lightGreen: "rgba(27, 217, 123, 0.1)",
      darkWhite: "#cccccc",
      lightWhite: "#d8d8d8",
      white: "white",
      transparent: "transparent",
      red: "red",
      black: "black"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route path="" element={<Root />} />
      <Route path="delivery/detail" element={<DeliveryDetailsForm />} />
      <Route path="delivery/shipment" element={<DeliveryShipmentForm />} />
      <Route path="delivery/final" element={<DeliveryResume />} />
    </Route>
  )
)

function Root(){
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/delivery/detail")
  }, [])
  return <></>
}

export default App
