import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text> {JSON.stringify(this.props.userData)} </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userData:state.RegisterReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
