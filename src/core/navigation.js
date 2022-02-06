import React from 'react';
import "./css/general.css"
import { Link, useNavigate } from "react-router-dom";
import { autenticarUsuario, comprobarAutenticacion, finalizarSesion } from './apiCore';



const Navigation = () => {

  let navigate = useNavigate();
  return (
    <header className="u-clearfix u-header u-palette-1-light-1 u-sticky u-header" id="sec-e2a7">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className="menu-collapse" style={{ "font-size": "1.125rem", "letter-spacing": "0px", "font-weight": "600" }}>
            <a className="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-border-radius u-custom-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="\">
              <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use></svg>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={{ width: "16px", height: "16px" }}>
                  <rect y="1" width="16" height="2"></rect>
                  <rect y="7" width="16" height="2"></rect>
                  <rect y="13" width="16" height="2"></rect>
                </symbol>
              </defs></svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-spacing-15 u-unstyled u-nav-1">
              <li className="u-nav-item">
                <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/" style={{ padding: "14px 40px" }}>Inicio</a>
              </li>
              {!comprobarAutenticacion() && (
                <>
                  <li className="u-nav-item">
                    <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/registrarse" style={{ padding: "14px 40px" }}>Registrarse</a>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/login" style={{ padding: "14px 40px" }}>Iniciar Sesión</a>
                  </li>
                </>
              )}
              {comprobarAutenticacion() && (
                <>
                  <li className="u-nav-item">
                    <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/mesas" style={{ padding: "14px 40px" }}>Mesas</a>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90" href="/platos" style={{ padding: "14px 40px" }}>Platos</a>
                  </li>
                  <li className="u-nav-item">
                    <a className="u-active-palette-1-light-2 u-button-style u-hover-grey-10 u-nav-link u-palette-1-dark-1 u-radius-15 u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      onClick={() =>
                        finalizarSesion(() => {
                          navigate("/login");
                        })}
                        href=''
                      style={{ padding: "14px 40px" }}>Cerrar Sesion</a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-sidenav-overflow">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                  <li className="u-nav-item">
                    <a className="u-button-style u-nav-link" href="/" style={{ padding: "14px 40px" }}>Inicio</a>
                  </li>
                  {!comprobarAutenticacion() && (
                    <>
                      <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/registrarse" style={{ padding: "14px 40px" }}>Registrarse</a>
                      </li>
                      <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/login" style={{ padding: "14px 40px" }}>Iniciar Sesión</a>
                      </li>
                    </>
                  )}
                  {comprobarAutenticacion() && (
                    <>
                      <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/mesas" style={{ padding: "14px 40px" }}>Mesas</a>
                      </li>
                      <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/platos" style={{ padding: "14px 40px" }}>Platos</a>
                      </li>
                      <li className="u-nav-item"><a className="u-button-style u-nav-link" onClick={() =>
                        finalizarSesion(() => {
                          navigate("/login");
                        })}
                        href=''
                        style={{ padding: "14px 40px" }}>Cerrar Sesion</a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        <div className="u-container-style u-group u-shape-rectangle u-white u-group-1">
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <div className="u-absolute-hcenter u-expanded u-grey-10 u-shape u-shape-circle"></div>
            <h3 className="u-text u-text-default u-text-1">Resto<br />
              <span style={{ "font-weight": "700" }}>APP</span>
            </h3>
          </div>
        </div>
      </div></header>
  );
}

export default Navigation;