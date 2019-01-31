import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuid from "uuid/v1";

import AppBar from "../components/AppBar";
import Menu from "../components/Menu";
import Alunos from "../containers/Alunos";
import Servicos from "../containers/Servicos";
import Sobre from "../containers/Sobre";

class App extends React.Component {
    state = {
        isMenuOpen: false
    };

    openMenu = () => {
        this.setState({ isMenuOpen: true });
       
    };

    closeMenu=()=>{
        this.setState({ isMenuOpen: false });
    }

    render(){
        const{
            isMenuOpen
        }= this.state;

        return(
            <Router>
                <div >
                    <AppBar onOpenMenu={this.openMenu}/>
                    <div className="container">
                        <React.Fragment>
                            <Route path="/" exact render={()=>(<h1>Início</h1>)}/>
                          
                            <Route path="/alunos" component={Alunos}/>
                            <Route path="/servicos" component={Servicos}/>
                            <Route path="/sobre"  component={Sobre}/>
                            
                        </React.Fragment>       
                    </div>
                    <Menu isOpen={isMenuOpen} onCloseMenu={this.closeMenu}/>
                </div>
            </Router>
        );
    }
}

export default App;