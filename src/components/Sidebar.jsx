import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      {/* Botão para exibir o sidebar em dispositivos móveis */}
      <nav className="navbar navbar-light bg-light d-md-none">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      {/* Sidebar que colapsa em telas pequenas */}
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="img-fluid mb-3" />
          <h4>SmartFin</h4>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              <i className="bi bi-house-door"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/contas' ? 'active' : ''}`} to="/contas">
              <i className="bi bi-wallet"></i> Contas
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/relatorios' ? 'active' : ''}`} to="/relatorios">
              <i className="bi bi-graph-up"></i> Relatórios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="bi bi-gear"></i> Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
