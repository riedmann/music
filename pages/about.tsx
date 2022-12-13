import Head from 'next/head';
import React, { useEffect } from 'react'


export default function About({ props }: any) {
    console.log(props);
    useEffect(() => {
        fetch(`https://api.riedmann.rocks/siurana/items/products?fields=*.*.*&filter[issport]=1&status=published`).then((data) => {
            data.json().then((data) => {
                console.log(data);

            })
        })

    }, [])


    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div>about</div>
        </>

    )
}

//https://api.riedmann.rocks/siurana/items/products?fields=*.*.*&filter[issport]=1&status=published
export async function getServerSideProps() {
    console.log("inside");

    // Fetch data from external API
    const res = await fetch(`https://api.riedmann.rocks/siurana/items/products?fields=*.*.*&filter[issport]=1&status=published`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
