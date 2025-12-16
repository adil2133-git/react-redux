import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../Redux'


function IceCreamContainer(props) {
  return (
    <div>
        <h2>No of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCreams
  }
}

const mapDispatchProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps
  )(IceCreamContainer)