import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import ProductCard from '../../components/ProductCard';
import styles from './index.module.css';

import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';


type Props = {}

const URL = "https://lionfish-app-4qtef.ondigitalocean.app/products";

export default function index({ data }: any) {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(data);

    useEffect(() => {
        // reload();
    }, [])

    const reload = async () => {
        fetch(URL).then((res) => {
            res.json().then((result) => {
                console.log(result);

                setProducts(result);
            })
        });
    }

    const searchChanged = (event: any) => {
        setSearch(event.target.value)
        setFilteredProducts(products.filter((currentValue: any) => {
            console.log(currentValue);
            return currentValue.Description.toLowerCase().includes(search.toLowerCase())

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
                <input type="text" value={search} onChange={searchChanged} />
            </div>
            <div className={styles.productlist}>{getProds()}</div>
        </>
    )
}

export async function getServerSideProps() {

    let request = await fetch(URL);
    let data = await request.json();

    return {
        props: { data: data }
    }
}

index.getLayout = function getLayout(index: any) {
    return (
        <Layout title='Super Ding'>
            <NestedLayout title="test">{index}</NestedLayout>
        </Layout>
    )
}

