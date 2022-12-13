import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

export default function Car(props: any) {
    const [on, setOn] = useState(false);

    console.log(props);
    

    const router = useRouter();
    const { id } = router.query;

    const myLoader = () => {
        return props.obj.data.image.data.full_url;
      }
    return (
        <div onClick={() => { setOn(!on) }}>
            <div>Car {id} is {on ? "on" : "off"}</div>
            <div>{props.obj.data.description}</div>
            <Image src={ props.obj.data.image.data.full_url} width={400} height={200} alt="image of i"></Image>
            <Link href="/products" >Back</Link>
        </div>
    )
}

export async function getStaticProps({ params }: any) {
    console.log(params);
    
    //https://api.riedmann.rocks/siurana/items/products/33?fields=*.*.*&filter[issport]=1&status=published
    const res = await fetch(`https://api.riedmann.rocks/siurana/items/products/`+ params.id + `?fields=*.*.*&filter[issport]=1&status=published`)
    const data = await res.json()

   

    // Pass data to the page via props
    return {
        props: { obj: data }
    }
}

export async function getStaticPaths() {
    console.log("in get Path");

    const res = await fetch(`https://api.riedmann.rocks/siurana/items/products?fields=*.*.*&filter[issport]=1&status=published`)
    const data = await res.json()

    const paths = data.data.map((element: { id: number }) => {
        return { params: { id: element.id.toString() } }
    });

    return {
        paths,
        fallback: false
    }

}