import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Container, Row, Col, Jumbotron, Button, Navbar, Card, Form} from 'react-bootstrap';


export default function Home() {
  
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  return (
    <Container fluid style={{marginLeft:'0px',marginRight:'0px'}}>
      <Head>
        <title>Challenge-php, an ultimate challenge for PHP Developers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row fluid>
        <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://images.gupy.io/unsafe/85x85/https://s3.amazonaws.com/gupy5/production/companies/1172/career/1825/images/2020-07-20_19-18_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;&nbsp;This is Invillia!
          </Navbar.Brand>
        </Navbar>
      </Row>

      <Row fluid>
        <Jumbotron style={{width:'100%',textAlign:'center',marginTop:'5%',backgroundColor:'#fff'}}>
          <div align="center">
            <Col xs={12} xl={4} lg={4}>
              <Card>
                <Card.Header><h3>Área restrita</h3></Card.Header>
                <Card.Body>
                  <Card.Title>Digite seu E-mail e Senha para continuar.</Card.Title>
                  <br/>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <div align="left">&nbsp;<Form.Label>Endereço de e-mail:</Form.Label></div>
                      <Form.Control type="email" placeholder="Digite seu e-mail aqui" onChange={event=>setEmail(event.target.value)} />
                      <Form.Text className="text-muted">
                        Nós nunca iremos compartilhar seu e-mail com ninguém ;)
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <div align="left">&nbsp;<Form.Label>Senha:</Form.Label></div>
                      <Form.Control type="password" placeholder="Digite sua senha aqui" onChange={event=>setSenha(event.target.value)} />
                      <Form.Text className="text-muted">
                        Você esqueceu sua senha? Clique <Link href="https://www.google.com.br/">aqui</Link>.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={()=>login({email:email,senha:senha})}>Fazer login</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Link href="https://www.google.com.br/">
                      <Button variant="primary">Voltar</Button>
                    </Link>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Jumbotron>
      </Row>
    </Container>
  )
}

function login(userData){
  // Vamos pegar esses dados e utilizar o AXIOS para mandar um post e receber o nosso token em caso de usuário ou senha incorretos
  const axios = require('axios').default;
  axios.post('http://localhost:8082/authentication/login',{
    email:userData.email,
    senha:userData.senha
  }).then(function(response){
    localStorage.setItem('UserData',response.data.token);
    localStorage.setItem('Nome',response.data.nome);
    console.log(response.data);
  }).catch(function(err){
    // Fazer tratamento de erros
    // 422 - Email e/ou senha em formato incorreto
    console.log(err.response.status);
  });
}
