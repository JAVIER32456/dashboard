import React from "react";
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BookIcon from '@mui/icons-material/Book';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar"> 
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">template</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Home</span>
                    </li>
                </Link>
                <p className="title">ESTUDIANTES</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonAddIcon className="icon"/>
                        <span>Registro Estudiante</span>
                    </li>
                </Link>
                <Link to="/academico" style={{textDecoration: "none"}}>
                    <li>
                        <SummarizeIcon className="icon"/>
                        <span>Informacion Academica</span>
                    </li>
                </Link>
                <li>
                    <BookIcon className="icon"/>
                    <span>Asignaturas</span>
                </li>
                <li>
                    <RuleFolderIcon className="icon"/>
                    <span>Calificacion</span>
                </li>
                <li>
                    <ListAltIcon className="icon"/>
                    <span>Informes</span>
                </li>
                <p className="title">SERVICIO</p>
                <li>
                    <NotificationsIcon className="icon"/>
                    <span>Notificaciones</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Ajustes</span>
                </li>
                <p className="title">USER</p>
                <Link to="/perfil" style={{textDecoration: "none"}}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span>Perfil</span>
                    </li>
                </Link>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar