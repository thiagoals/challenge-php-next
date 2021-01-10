import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Jumbotron, Button, Navbar, Card} from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid style={{marginLeft:'0px',marginRight:'0px',padding:'0px'}}>
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

                  <Button variant="primary">Fazer login</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Link href="https://www.google.com.br/">
                    <Button variant="primary">Voltar</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Jumbotron>
      </Row>
    </Container>
  )
}
