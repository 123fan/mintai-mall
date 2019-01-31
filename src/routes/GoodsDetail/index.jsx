import React from 'react'
import './style.css'
import {connect} from 'react-redux';
import {Button, Cascader, Input} from 'antd';
import  NumberInput  from '../../components/AppCommon/NumberInput'

const Search = Input.Search;

class GoodsDetail extends React.Component {

    state = {
        updateData: {goodsNum: 1},
        sizeIndex: 0,
        introIndex: 0
    };
    handleChange = (e) => {
        let o = {};
        o[e.target.name] = e.target.value;
        let data = {...this.state.updateData, ...o};
        this.setState({updateData: data});
    };
    changeNum = (type) => {
        let data = {};
        if (type === 'add') {
            data = {...this.state.updateData, goodsNum: this.state.updateData.goodsNum + 1};
        }
        else {
            data = {...this.state.updateData, goodsNum: this.state.updateData.goodsNum - 1};
        }
        this.setState({updateData: data});
    };
    onChange = (e) => {
        console.log(e);

    };

    render() {
        const options = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];
        return (
            <div style={{minHeight: 1000}}>
                <div className="detail">
                    <div style={{fontSize: 8, position: 'relative'}} className="align_between wrap">
                        <p style={{marginRight: '42px'}} className="boldSize">
                            产品分类
                        </p>
                        <Cascader options={options} onChange={this.onChange} placeholder="Please select"/>
                        <ul className="statusUl">
                            {
                                ['全部订单', '待支付', '待发货', '待收货'].map(item => {
                                    return <li>{item}</li>
                                })
                            }
                        </ul>
                        <Search
                            placeholder="输入搜索条件"
                            enterButton="搜索"
                            size="default"
                            onSearch={value => console.log(value)}
                            style={{width: 250, height: 26}}
                            allowClear
                        />
                        <div className="myShopBtn" onClick={() => this.props.history.push('/home/shoppingCar')}>
                            <img src="" alt=""/>
                            <span style={{color: '#6B441A'}}>我的购物车 >></span>
                        </div>
                    </div>
                    <div className="middle wrap">
                        <p className="headText">
                            当前位置: 商城 > 商品详情
                        </p>
                        <div className="goodsImgBox align_between">
                            <div className="goodsImg">
                                <div style={{width: 300, height: 300, border: '1px solid grey'}}>
                                    <img src="" width="100%"/>
                                </div>
                                <ul style={{marginTop: 3}} className="align_between">
                                    {
                                        [0, 1, 2].map(item => {
                                            return <li className="littleImg" key={item}><img src="" width="100%"/></li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="mes">
                                <p className="title">
                                    云南白药 云南白药创可贴
                                </p>
                                <p>
                                    <label htmlFor="">
                                        价格
                                    </label>
                                    <span className="price">
                              ￥  16.89
                          </span>
                                </p>
                                <p className="numBox">
                                    <label htmlFor="">
                                        数量
                                    </label>
                                    <NumberInput actionFuc={this.changeNum} goodsNum={this.state.updateData.goodsNum} inputChange={this.handleChange}/>
                                </p>
                                <p className="sizeBox">
                                    <label htmlFor="">规格</label>
                                    {
                                        ['s', 'm', 'l'].map((item, index) => {
                                            return <span onClick={() => {
                                                this.setState({sizeIndex: index})
                                            }}
                                                         className={['sizeBtn', this.state.sizeIndex === index ? 'sizeClick' : ''].join(' ')}
                                                         key={item}>{item}</span>
                                        })
                                    }
                                </p>
                                <div className="buyBox">
                                    <Button type="primary">加入购物车</Button>
                                    <Button type="primary">立即购买</Button>
                                    <span>
                                  <img src="" alt=""/>
                                  <span>收藏</span>
                              </span>
                                </div>
                                <div className="biaoBox">
                                    <label className="biao">351人购买</label>
                                    <label className="biao">月销量992</label>
                                    <label className="biao">库存992</label>
                                    <label className="biao">起批件数10</label>
                                </div>

                            </div>
                        </div>
                        {/*bottom*/}
                        <div className="">
                            {
                                ['产品参数', '图文介绍'].map((item, index) => {
                                    return <span
                                        className={["introduce", this.state.introIndex === index ? 'selectCss' : ''].join(' ')}
                                        onClick={() => this.setState({introIndex: index})}>{item}</span>
                                })
                            }
                            <div className="heng"></div>
                            {
                                [0, 1, 2, 3].map(item => {
                                    return <p className="introDetail">
                                        <span style={{marginRight: 24, fontWeight: 'bold'}}>包装方式</span>
                                        <span>袋袋wasdasdw</span>
                                    </p>
                                })
                            }

                        </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail);
