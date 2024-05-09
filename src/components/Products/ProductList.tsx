import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1">
                List of Products
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
