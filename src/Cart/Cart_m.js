import { connect } from 'react-redux';


function CartMobile(props){
    return(
        <div className="cart-m-content">
            {
                props.cartInfo
                ? props.cartInfo.map(function(a,i){
                    return(
                        <div className="cart-list" key={i}>
                            <div className="cart-image">
                                <img src={a.thum} alt=""/>
                            </div>
                            <div className="cart-m-info">
                                <p className="title">{a.title}</p>
                                <p className="size">사이즈 <span>{a.size}</span></p>
                                <p className="color">색상 <span>{a.color}</span></p>
                                <p className="price">가격 <span>{a.price}</span></p>
                                <div className="cart-select">
                                    <button>삭제</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
                : null
            }
        </div>
    )
}

function takeCart (state){
    return{
        cartInfo : state.UserArray
    }
}

export default connect(takeCart)(CartMobile);