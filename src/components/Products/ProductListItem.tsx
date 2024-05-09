import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="product-title">Iphone 15 pro</h2>
                <p className="product-description">This is iphone 15pro</p>
                <div className="product-features">Type:phone</div>
                <div className="product-features">Capacity: 128gb</div>
                <div className="product-price">10000$</div>

                <div className="btns-wrap">
                    <Button variant="outlined">Add to card</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
