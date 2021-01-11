import { withRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component, useState, getState} from 'react';
import {Container, Nav, Navbar, Breadcrumb, Card, Button, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';
import { AlertList } from "react-bs-notifier";

class Admin extends Component {
    state = {
        selectedFile: null,
        alerts: [],
        label: 'Buscar aquivo XML'
    }

    fileSelectHandler = event => {
        // Guardar a variável de estado
        this.setState({
            selectedFile: event.target.files[0],
            label: (event.target.files[0]?.name!=undefined)?event.target.files[0]?.name:'Buscar aquivo XML'
        })
    }

    fileUploadHandler = () => {
        console.log('Fazendo o upload do arquivo');
        var form = new FormData();
        form.append('xml',this.state.selectedFile, this.state.selectedFile.name);
        // Só aceitamos a extensão xml
        if(this.state.selectedFile.type==="text/xml"){
            axios('/api/upload',{
                method:"POST",
                data:form,
                "content-type": "multipart/form-data",
            }).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                this.showAlert('danger','Ops! Ocorreu um erro.','Ocorreu um erro ao tentar enviar o arquivo para o servidor.');
            });
        }else{
            this.showAlert('danger','Ops! Ocorreu um erro.','O arquivo enviado não possui a extensão XML.');
        }        
    }

    showAlert = (type,headline,message) => {
        this.setState({
            alerts:[
                {
                    id: new Date().getTime(),
                    type: type,
                    headline: headline,
                    message: message
                }
            ]
        });
    }

    dismissAlert = () => {
        this.setState({
            alerts:[],
        })
    }

    render(){
        let nome;
        if (typeof window !== 'undefined') {
            nome = localStorage.getItem("Nome");
        }
        
        const logout = () => {
            localStorage.removeItem('Nome');
            localStorage.removeItem('UserData');
            this.props.router.push('/');
        }

        return(
            <>
                <AlertList
                    position={'bottom-left'}
                    alerts={this.state.alerts}
                    timeout={5000}
                    onDismiss={this.dismissAlert}
                />
                <Container fluid style={{marginLeft:'0px',marginRight:'0px', padding:'0px'}}>
                    <Row style={{margin:'0px'}} fluid>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width:'100%'}}>
                        <Navbar.Brand href="#home">
                            <img alt=""
                            src="https://images.gupy.io/unsafe/85x85/https://s3.amazonaws.com/gupy5/production/companies/1172/career/1825/images/2020-07-20_19-18_logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            &nbsp;&nbsp;This is Invillia!
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link style={{textAlign:'center'}}>E aí, {nome}!</Nav.Link>
                                <Nav.Link style={{textAlign:'center'}} onClick={logout}>Sair</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </Row>
                    
                    <Row style={{padding:'20px 5% 0px 5%', margin:'0px'}} fluid>
                        <Card style={{width:'100%'}}>
                            <Card.Header><h3>Upload de XML</h3></Card.Header>
                            <Card.Body>
                                <Breadcrumb>
                                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Upload XML</Breadcrumb.Item>
                                </Breadcrumb>
                                <Card.Text style={{padding:'10px',textAlign:'justify'}}>
                                    Aqui você pode fazer o upload dos seus arquivos xml para que o nosso sistema possa processá-lo. Basta incluir os arquivos, clicar em Fazer upload e esperar a mágica acontecer.
                                </Card.Text>
                                <Form style={{width:'100%'}}>
                                    <Form.File 
                                        id="custom-file"
                                        label={this.state.label}
                                        onChange={this.fileSelectHandler}
                                        style={{width:'100%'}}
                                        custom
                                    />
                                </Form>
                                <Button style={{marginTop:'10px'}} variant="primary" onClick={this.fileUploadHandler}>Fazer upload</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        )
    }
}

export default withRouter(Admin);