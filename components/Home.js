import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, Button } from 'native-base';

// import cac thanh phan

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5yFol-zHKAVE1PrNRmMOo8zBMOLyst7gYdZzVQdrGfDpRwFL' }}
                    style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: 100, marginTop: 90 }} />
                <Text style={{ fontWeight: '900', fontSize: 20, marginBottom: 20 }}>TỶ GIÁ</Text>
                <Content  >

                    <Button
                        style={{ paddingHorizontal: 40, marginBottom: 10, backgroundColor: '#ff9234' }}
                        block rounded
                        onPress={() => navigate('Monye')}
                    >
                        <Text style={{ color: '#fff' }}>Ngoại tệ</Text>
                    </Button>
                    <Button
                        style={{ paddingHorizontal: 40, marginBottom: 10, backgroundColor: '#ffcd3c' }}
                        block rounded
                        onPress={() => navigate('Gold')}
                    >
                        <Text style={{ color: '#fff' }}>Vàng</Text>
                    </Button>
                    <Button
                        style={{ paddingHorizontal: 40, marginBottom: 10, backgroundColor: '#f9ad8d' }}
                        block rounded
                        onPress={() => navigate('Interest')}
                    >
                        <Text style={{ color: '#fff' }}>Lãi xuất</Text>
                    </Button>
                    <Button
                        style={{ paddingHorizontal: 40, marginBottom: 10, backgroundColor: '#35d0ba' }}
                        block rounded
                        onPress={() => navigate('Adstory')}
                    >
                        <Text style={{ color: '#fff' }}>Tư vấn</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

export default Home;