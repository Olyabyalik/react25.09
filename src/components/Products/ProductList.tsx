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
                    <ProductListItem
                        title="Iphone 15 pro"
                        description="This is iphone 15 pro"
                        capacity="128"
                        type="phone"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="Iphone 14 promax"
                        description="This is iphone 14 promax"
                        capacity="254"
                        type="phone"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="Iphone 13 pro"
                        description="This is iphone 13 pro"
                        capacity="64"
                        type="phone"
                        price={750}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
