import React from "react";
import classNames from "classNames";
import { withRouter } from "react-router-dom";

const Menu=({isOpen, onCloseMenu, history})=>(
    <div className={classNames("menu", {
        "menu--open": isOpen
      })}>
        <div className="menu__head">
            <button className="menu__head__button" onClick={onCloseMenu}>
                <i className="material-icons">close</i>
            </button>
        </div>
        <div className="menu__list">
            <button
                className="_menu__item"
                onClick={() => {onCloseMenu();history.push("/");
                }}
            >
                <i className="material-icons">home</i>Início
            </button>
            
            <button
                className="_menu__item"
                onClick={() => {onCloseMenu();history.push("/alunos");
                }}
            >
                <i className="material-icons">group</i>Alunos
            </button>
            <button
                className="menu__item"
                onClick={() => {onCloseMenu();history.push("/servicos");
                }}
            >
                <i className="material-icons">beenhere</i>Serviços
                </button>

            <button
                className="menu__item"
                onClick={() => {onCloseMenu(); history.push("/sobre");
                }}
            ><i className="material-icons">visibility</i>Sobre
            </button>
        </div>

    </div>
);
export default withRouter(Menu);

