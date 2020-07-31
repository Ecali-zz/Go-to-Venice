import React, {useState} from 'react';
import { Row, Card, Col, Dropdown, DropdownButton, Badge, ButtonGroup } from 'react-bootstrap';

import '../App.css';

import * as Icon from 'react-bootstrap-icons';

function MenuRichieste(){
//0070c7
    const cardStyle = {
        color: '#0070c7',
    }
    const cardHeaderStyle= {
        paddingBottom: 0,
        paddingTop: 20,
        textAlign: 'left',
        color: '#0070c7',
        backgroundColor: '#fff',
        borderBottom: '1px solid #0070c7',
    }
    const leadStyle = {
        marginBottom: 0,
    }
    const rowStyle= {
        fontSize: 11,
        textAlign: 'left',
    }
    const badgeStyle = {
            position: 'absolute',
            top: '-10px',
            right: '-20px'
    }
    return(
        <div className="menu-richieste">
            <Card border="primary" style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><p className='lead' style={leadStyle}>Richieste in Entrata</p></Card.Header>
                <Card.Body>
                    <Card border="primary" >
                        <Card.Body>
                        <Badge pill variant="danger" style={badgeStyle}>
                            NEW
                        </Badge>
                            <Row style={rowStyle}>
                                <Col>
                                    Giorno<br/><strong>31/07/2020</strong>
                                </Col>
                                <Col>
                                    Ore<br/><strong>13:30</strong>
                                </Col>
                                <Col>
                                    Partenza<br/><strong>Nome Attracco</strong>
                                </Col>
                                <Col>
                                    Destinazione<br/><strong>San Marco</strong>
                                </Col>
                               
                                <Col>
                                    <div>
                                        {[DropdownButton].map((DropdownType, idx) => (
                                        <DropdownType
                                            as={ButtonGroup}
                                            key={idx}
                                            id={`dropdown-button-drop-${idx}`}
                                            size="sm"
                                            variant="outline-primary"
                                            title="Assegna"
                                        >
                                            <Dropdown.Item eventKey="1" className='minifontsize'>
                                                <Row>
                                                    <Col xs={4} style={{padding: 0}}>
                                                        <div className='semaforo verde grigio'></div> 
                                                        <div className='semaforo giallo grigio'></div>
                                                        <div className='semaforo rosso'></div>
                                                    </Col>
                                                    <Col xs={8} style={{padding: 0}}>
                                                        Nome Tassista
                                                    </Col>
                                                </Row>
                                              
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2" className='minifontsize'>
                                            <Row>
                                                    <Col xs={4} style={{padding: 0}}>
                                                        <div className='semaforo verde'></div> 
                                                        <div className='semaforo giallo grigio'></div>
                                                        <div className='semaforo rosso grigio'></div>
                                                    </Col>
                                                    <Col xs={8} style={{padding: 0}}>
                                                        Nome Tassista
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="3" className='minifontsize'>
                                            <Row>
                                                    <Col xs={4} style={{padding: 0}}>
                                                        <div className='semaforo verde'></div> 
                                                        <div className='semaforo giallo grigio'></div>
                                                        <div className='semaforo rosso grigio'></div>
                                                    </Col>
                                                    <Col xs={8} style={{padding: 0}}>
                                                        Nome Tassista
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4" className='minifontsize'>
                                            <Row>
                                                    <Col xs={4} style={{padding: 0}}>
                                                        <div className='semaforo verde grigio'></div> 
                                                        <div className='semaforo giallo'></div>
                                                        <div className='semaforo rosso grigio'></div>
                                                    </Col>
                                                    <Col xs={8} style={{padding: 0}}>
                                                        Nome Tassista
                                                    </Col>
                                                </Row>
                                            </Dropdown.Item>
                                        </DropdownType>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                </Card.Body>
            </Card>

        </div>
    )
}

export default MenuRichieste;
