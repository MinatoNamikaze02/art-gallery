import React from 'react'
import {MainNav, ProductCard} from '../components'
import {useHistory, useLocation} from 'react-router-dom'
import '../App.css'

export default function Products() {
    let item = []
    const history = useHistory()
    const location = useLocation()
    if(location.state){
        item = location.state.item
    }
    return (
        <div>
            <MainNav />
            <div className='main_content'>
                <ProductCard item={item} />
            </div>
        </div>
    )
}

