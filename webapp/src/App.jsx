import Nav from "./components/nav"
import { Outlet } from 'react-router-dom'
import './styles/main.scss';

export default function App(){
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}
