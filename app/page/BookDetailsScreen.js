import React from 'react';
import {
  View,
  Text,
}from 'react-native';

export default class BookDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
          const { params } = this.props.navigation.state;
        return(
            <View>
                <Text>
                	{JSON.stringify(params)}
                </Text>
                <View>
                </View>
            </View>
        )
    }
}