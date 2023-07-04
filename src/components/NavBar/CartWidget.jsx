import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
    return (
        <div>
       <span href='#'><FontAwesomeIcon icon={faCartShopping} className='cartShop'/><span> 3</span></span>
        </div>
    )
}

export default CartWidget;