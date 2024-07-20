import React, { Component } from 'react'
import './BtnJoin.css'
export default class BtnJoin extends Component {



  render(props) {

    return (
      <>
        <button style={{ backgroundColor: this.props.bgcolor }} className='btn-join' id='btn-join'>{this.props.name}</button>


      </>
    )
  }
}
BtnJoin.defaultProps = {
  name: 'Join Now',
  bgcolor: '#1FA84F'

}