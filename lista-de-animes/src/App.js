import React, { Component } from 'react';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  
  constructor(){
    super() 
    this.state = {lista:[]};
  }


componentWillMount(){

  fetch('http://api-animes.surge.sh')
       .then(function(res) {res.json()})
       .then(function(posts){console.log(posts)})
       .then(function(resposta){
         console.log(resposta)
         this.state = {lista:resposta};
        })
   
  
  //  newAnime(post){
  //    const options ={
  //      method: 'POST',
  //      body: JSON.stringify(post),
  //      headers: new Headers({
  //        'Content-Type' : 'application/json'
  //      })
  //    }
  
  //    return fetch('http://api-animes.surge.sh', options)
  //      .then(res => res.json())
  //      .then(res => console.log(res))
  //      .catch(error => console.log("Erro!"))
  //  }

}

  render() {
    return (
  <div id="layout">
    <a href="#menu" id="menuLink"  className="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Animes</a>

            <ul  className="pure-menu-list">
                <li  className="pure-menu-item"><a href="#" className="pure-menu-link">Título</a></li>
                <li  className="pure-menu-item"><a href="#" className="pure-menu-link">Ano</a></li>

                <li  className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#"  className="pure-menu-link">Tipo</a>
                </li>

                <li  className="pure-menu-item"><a href="#" className="pure-menu-link">Status</a></li>
            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
            <h1>Lista de animes</h1>
            <h2>Primeiro projeto em React</h2>
        </div>

        <div className="content">
            <h2  className="content-subhead">Cadastro de novos animes assistidos</h2>
            <div id="main">
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form  className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Ano</label> 
                    <input id="ano" type="text" name="ano" />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Tipo</label> 
                    <input id="tipo" type="text" name="tipo"  />                                      
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Status</label> 
                    <input id="status" type="text" name="status"  />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit"  className="pure-button pure-button-primary">Salvar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Ano</th>
                      <th>Tipo</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      {/* <td>Nausicaä Do Vale do Vento</td>                
                      <td>1984</td>                
                      <td>Filme</td>                
                      <td>Completo</td>                 */}
                

                      {
                        this.state.lista.map(function(objeto){
                          return (
                            <tr>
                              <td>{objeto.Nome}</td>
                              <td>{objeto.Ano}</td>
                              <td>{objeto.Tipo}</td>
                              <td>{objeto.Status}</td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>        
        </div>
    </div>
  </div>

      );
  }
}

export default App;
