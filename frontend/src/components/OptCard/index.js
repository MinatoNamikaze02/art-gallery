import React from 'react'
import {
    Container,
    Title,
    Text
} from './styles/productCard'

export default function ProductCard({ product }) {
    return (
        <Container>
            <Title>{product.name}</Title>
            <Text>{product.description}</Text>
        </Container>
    )
}