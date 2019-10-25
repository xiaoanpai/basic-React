import React from 'react'
import {PropTypes} from 'prop-types'
import { addColor } from '../storeFactory/ActionFunc';
import {connect} from 'react-redux'
import child from './child'

const mapStateToProps = state => 
  ({
      color: state.colors[0].title
  })

const mapDispatchToProps = dispatch => 
  ({
      onAddColor(id){
          dispatch(addColor('testTitle','#0000'))
      },
      onLog(e){
          console.warn('onLog:',e)
      }
  })

  export const Color = connect(
      mapStateToProps,
      mapDispatchToProps
  )(child)