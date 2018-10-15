import React, { Component } from 'react';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class App extends Component {
  
  constructor(){
    super() 
    this.state = {lista:[], Nome:'',Ano:'',Tipo:'',Status:''};
    // this.enviaFormAJAX = this.enviaFormAJAX.bind(this);
    this.enviaFormFETCH = this.enviaFormFETCH.bind(this);

    this.setNome = this.setNome.bind(this);
    this.setAno = this.setAno.bind(this);
    this.setTipo = this.setTipo.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  pegarAnimesFETCH(){

    fetch('http://api-animes.surge.sh')
    .then(resposta => resposta.json())
    .then(animes => {this.setState({lista:animes})})
    // .then(animes => {console.log(animes)})

  }

  pegarAnimesAJAX(){
    
    $.ajax({
        url:'http://api-animes.surge.sh/',
        dataType: 'json',
        success:function(resposta){
            // console.log(this)
            this.setState({lista:resposta});
          }.bind(this)
    });
  }


  enviaFormAJAX(evento){
    evento.preventDefault();
    // console.log(this)
    console.log('Enviando dados via AJAX');
    $.ajax({
      url:'http://api-animes.surge.sh',
      contentType:'application/json',
      dataType:'json',
      type:'POST',
      headers:{'X-Requested-With': 'XMLHttpRequest'},
      data:JSON.stringify({Nome:this.state.nome,Ano:this.state.ano,Tipo:this.state.tipo,Status:this.state.status}),
      success:function(resposta){
        console.log(resposta)
        console.log('Deu certo!');
      },
      error:function(resposta){
        console.log('Deu erro!');
      }
    })
  }

  enviaFormFETCH(evento){
    evento.preventDefault();
    console.log('Enviando dados via FETCH');
    fetch('http://api-animes.surge.sh', { 
    method: 'POST', 
    body: JSON.stringify({Nome:this.state.nome,Ano:this.state.ano,Tipo:this.state.tipo,Status:this.state.status}), 
    headers: new Headers({'Content-Type': 'application/json'}),
  })
      .then(resposta => resposta.json()) 
      // .then(resposta => (console.log(resposta)))
  }

  setNome(evento){
    console.log("setNome")
    this.setState({Nome:evento.target.value});
  }

  setAno(evento){
    this.setState({Ano:evento.target.value});
  }

  setTipo(evento){
    this.setState({Tipo:evento.target.value});
  }

  setStatus(evento){
    this.setState({Status:evento.target.value});
  }

  componentDidMount(){
    console.log('DidMounttt')
    // this.pegarAnimesFETCH()    
    this.pegarAnimesAJAX()    
          
  }

  render() {
    console.log('render')
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
                <form  className="pure-form pure-form-aligned" onSubmit={this.enviaFormFETCH} method="post">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Ano</label> 
                    <input id="ano" type="text" name="ano" value={this.state.ano} onChange={this.setAno}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Tipo</label> 
                    <input id="tipo" type="text" name="tipo" value={this.state.tipo} onChange={this.setTipo} />                                      
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="nome">Status</label> 
                    <input id="status" type="text" name="status" value={this.state.status} onChange={this.setStatus}/>                                      
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
