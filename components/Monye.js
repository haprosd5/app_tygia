import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
import BIDV from './monye/BIDV';
import VietCom from './monye/VietCom';
import Agribank from './monye/Agribank';
import TyGiaChung from './monye/TyGiaChung';
class Monye extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container style={{backgroundColor: '#ff9234'}}>
                <Header style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 17, fontWeight: '900'}}>Ngoại Tệ</Text>
                </Header>
                <Tabs style={{backgroundColor: '#ff9234'}}>
                    <Tab initialPage heading="Chung">
                        <TyGiaChung />
                    </Tab>
                    <Tab heading="VietCom">
                        <VietCom />
                    </Tab>
                    <Tab heading="BIDV">
                        <BIDV />
                    </Tab>
                    <Tab heading="Agri">
                        <Agribank />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Monye;