import './product-card.styles.scss'
import Button from '../button/button.component'

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`Crown Clothing -- ${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>€{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    )
}

export default ProductCard;