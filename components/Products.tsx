import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import styles from './products.module.css';
import mainStyle from '../styles/Home.module.css'

type Props = {}

const URL = "http://localhost:3000/items.json";

export default function Products({ data }: any) {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState(data||[]);
    const [filteredProducts, setFilteredProducts] = useState(data||[]);

    useEffect(() => {
        reload();
    }, [])

    const reload = async () => {
        fetch(URL).then(res => res.json()).then((result) => {
            setProducts(result.value);
            setFilteredProducts(result.value);
        });
    }

    const searchChanged = (event:any)=>{
        setSearch(event.target.value)
        setFilteredProducts(products.filter((currentValue:any)=>{
            console.log(currentValue);
            return currentValue.Description.includes(search)
            
        }));

    }

    const getProds = () => {
        let html: any = [];
        filteredProducts.forEach((element: any) => {
            html.push(<div key={element.ETag}>
                <ProductCard name={element.Description} inventory={element.Inventory} />
            </div>)
        });
        return html;
    }

    return (
        <>

            <div>
                <input type="text" value={search} onChange={searchChanged}/>
            </div>
            <div className={styles.productlist}>{getProds()}</div>
        </>


    )
}



export async function getServerSideProps() {

    let request = await fetch(URL);
    let products = await request.json();

    
    return {
        props: { data: products.value }
    }
}

