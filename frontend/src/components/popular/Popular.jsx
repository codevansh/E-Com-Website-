import './Popular.css'
import Item from '../item/Item'
import { useState, useEffect } from 'react'
const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen')
            .then(response => (response.json()))
            .then(data => setPopular(data));
    }, [])

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popular.map((item, i) => {
                    return <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}></Item>
                })
                }
            </div>
        </div>
    )
}

export default Popular