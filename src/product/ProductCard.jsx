import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                <Card.Img src={`http://localhost:8585/${product.Image}` }/>
                <Card.Body>
                    <Card>id:{product.id}</Card>
                    <Card.Title>Title: {product.Nom}</Card.Title>
                    <Card.Title>Price: ${product.Prix}</Card.Title>
                    <Card.Text>
                        Description: {product.Description.slice(0,100)}
                    </Card.Text>
                    <Card.Text>
                        canal de vente : {product.SellWay}
                    </Card.Text>
                 
                    <Link to={`ProductDetail/${product.id}`}>
                        <Button>Detail</Button>
                    </Link>
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}

export default ProductCard
