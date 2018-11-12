import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { Card, CardItem, Left, Body } from 'native-base';

class Agribank extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            data: []
        };
    }
    async componentWillMount() {
        try {
            await fetch("http://192.168.0.112:8000/get_content/get_ngoaite.php")
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    this.setState({
                        data: responseJson
                    })
                })

        } catch (error) {
            console.log(error)
        }
    }

    // show item ra
    renderItem({ item, index }) {
        return (
            <CardItem style={{backgroundColor: (index%2 === 0) ? '#f9f8eb' : '#ffffd2', marginBottom: 2}}>
                <Left style={{justifyContent: 'space-between'}}>
                    <Text style={{paddingRight: 15, fontWeight: '900'}}>{item.identify}</Text>
                    <Text style={{paddingRight: 15}}>{item.today_tienmat}</Text>
                    <Text style={{paddingRight: 15}}>{item.today_chuyenkhoan}</Text>
                    <Text style={{paddingRight: 10}}>{item.today_banra}</Text>
                </Left>

            </CardItem>
        )
    }
    render() {
        return (
            <Card style={{ flex: 1 }}>
            <CardItem style={{backgroundColor: '#f7de1c', marginBottom: 2}}>
                <Left style={{justifyContent: 'space-between'}}>
                    <Text style={{paddingRight: 5}}>Mã tiền</Text>
                    <Text style={{paddingRight: 5}}>Tiền mặt</Text>
                    <Text style={{paddingRight: 5}}>Chuyển khoản</Text>
                    <Text style={{paddingRight: 5}}>Bán ra</Text>
                </Left>

            </CardItem>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.data}
                    renderItem={({ item, index }) => this.renderItem({ item, index })}
                />
            </Card>
        );
    }
}

export default Agribank;