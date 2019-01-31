import React from 'react'
import './style.css'
import {connect} from "react-redux";
import AppOrderNav from '../../components/AppOrderNav'
import {Table,Button} from 'antd';
import  NumberInput  from '../../components/AppCommon/NumberInput'

class ShoppingCar extends React.Component {
    state = {}
    handleChange = (e) => {
        let o = {};
        o[e.target.name] = e.target.value;
        let data = {...this.state.updateData, ...o};
        this.setState({updateData: data});
    };
    render() {
        const columns = [{
            title: '商品',
            dataIndex: 'name',
            render: text =>
                <p className="align_between">
                    <img src="http://cdn.e-shine.shop/loves-images/waitao4.jpg" width="50px" height="50px"/>
                    <a style={{verticalAlign:'top'}} className="boldSize">{text}</a>
                </p>
        }, {
            title: '属性',
            dataIndex: 'size',
            render: text =>
                    <a>规格:{text}</a>
        }, {
            title: '单价',
            dataIndex: 'price',
            render: text =>
                    <a style={{verticalAlign:'top',color:'#EB4F50'}}>￥{text}</a>
        }, {
            title: '数量',
            dataIndex: 'num',
            render:text=>
                <NumberInput actionFuc={this.changeNum} goodsNum={2} inputChange={this.handleChange}/>
        },
            {
                title: '小计',
                dataIndex: 'simpleT',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) => (
                    <div>
                        <p>删除</p>
                        <p>收藏</p>
                    </div>
                ),
            },
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            }, {
                key: '2',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            }, {
                key: '3',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            }, {
                key: '4',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            }, {
                key: '5',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            }, {
                key: '6',
                name: 'John Brown',
                size: 32,
                price: 30,
                num: 20,
                simpleT: 300,
            },

        ];

// rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div className="shopCar wrap">
                <AppOrderNav currentPosition={0} goodsNum={3}/>
                <Table size="small" columns={columns} dataSource={data} rowSelection={rowSelection}
                       style={{marginTop: 20}} pagination={false}/>
                <div className="bottomTotal align_between">
                   <p>全选</p>
                    <p style={{marginLeft:730}}>已选商品<span>4</span>件</p>
                    <p style={{margin:'0 10px 0 20px'}}>总价(不含运费) <span style={{color:'#EB4F50'}}>￥4230.00</span></p>
                    <Button style={{color:'white',backgroundColor:'#EB4F50',marginLeft: 26,marginRight:0,height:'100%'}}>去结算</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.counter;
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getBanner:(data) => {
        //     dispatch(getBanner(data))
        // },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);
