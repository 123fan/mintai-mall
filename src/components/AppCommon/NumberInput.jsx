import React from 'react'
import {withRouter} from 'react-router-dom'

import PropTypes from "prop-types";

class NumberInput extends React.Component {

    state = {}
    static propTypes={
        // actionFuc:PropTypes.func.isRequired,
        goodsNum:PropTypes.number,
        inputChange:PropTypes.func.isRequired,
    };
    render() {
        const {actionFuc,goodsNum,inputChange} =this.props;
        return (
            <span>
             <span className="align_between">
                                  <span className="delBtn" onClick={() => actionFuc?actionFuc('del'):''}>-</span>
                                  <input type="text" name="goodsNum" className="numInput"
                                         value={goodsNum} onChange={e => {
                                      inputChange(e)
                                  }}/>
                                  <span className="addBtn" onClick={() =>actionFuc? actionFuc('add'):''}>+</span>
               </span>
            </span>
        )
    }
}

export default withRouter(NumberInput)
