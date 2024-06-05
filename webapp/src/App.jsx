import Nav from "./components/nav"
import { Outlet } from 'react-router-dom'
import './styles/main.css'

export default function App(){
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}
