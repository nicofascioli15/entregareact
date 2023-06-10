import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
    return (
        <div>
       <a href='#'><FontAwesomeIcon icon={faCartShopping} className='cartShop'/><span> 3</span></a>
        </div>
    )
}

export default CartWidget;