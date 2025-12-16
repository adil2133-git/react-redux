import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux'


function CakeContainer(props) {
  return (
    <div>
        <h2>No of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps
  )(CakeContainer)