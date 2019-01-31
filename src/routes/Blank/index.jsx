import React from 'react'
import './style.css'
import {connect} from "react-redux";
// import AppFooter from '../../components/AppFooter'
class Blank extends React.Component {

  state = {}

  render () {
    return (
      <div>
        <div className='banner'></div>
        <div className='wrap content'>
          <div className='left_box'>
             <div className='title'>【关 于 我 们】</div>
              <p>
              浙江民泰医药有限公司成立于2016年03月02日，地址：杭州市萧山区萧绍东路136-1号，电话：0571-57137680，2017年4月27日取得《药品经营许可证》和《药品经营质量管理规范》认证证书，批发：中药材和中药饮片，仓库总面积5489平方米，其中常温库3466.9平方米，阴凉库2022.1平方米。分别设有总经办、综合办公室、业务部、质管部、财务部、信息部、储运部七个部门。现有员工50人，其中执业中药师2人，从业中药师1人，中药士2人，药学技术人员9人。公司质量体系正常有效运行，2017年被定为中国医药行业十大品牌诚信单位。
              </p>
              <p>浙江民泰医药有限公司同时100%控股两个中药饮片生产企业：杭州民泰中药饮片有限公司和杭州民泰（亳州）中药饮片有限公司,已正常生产运营长达十年，拥有员工215人。其中杭州民泰中药饮片有限公司在职员工51名，执业药师有4名。杭州民泰（亳州）中药饮片有限公司在职员工114人，执业药师2名。杭州民泰中药饮片有限公司2017年销售中药饮片8400万元，杭州民泰（亳州）中药饮片有限公司2017年销售中药饮片14291.9万元。共可生产742个中药饮片品种，2560个品规，2017年度生产3500吨中药饮片，生产的品种达到实现全检的能力，充分具备中药饮片及小包装中药饮片的充足供货。</p>
              <p>我公司有独立的煎药房，地址：杭州市萧山区萧绍东路136-1号，同时也是杭州市萧山区中医院等29家医疗单位的代煎点，使用面积1600平方米。我公司免费提供代煎、代熬膏、免费快递服务，与顺丰快递签订了长年合作协议，专用运输中药车辆6辆，节假日正常开展业务。</p>
          </div>
          <div className="right_box">

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
export default connect(mapStateToProps, mapDispatchToProps)(Blank);
