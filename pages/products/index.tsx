import React from 'react'

type Props = {}

export default function index({ data }: any) {
    const getProds = () => {
        let html: any = [];
        data.data.forEach((element: any) => {
            html.push(<div key={element.id}>{element.name}</div>)
        });
        return html;
    }

    return (
        <div>
            <h1>Cars</h1>
            <div>{getProds()}</div>
        </div>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`https://api.riedmann.rocks/siurana/items/products?fields=*.*.*&filter[issport]=1&status=published`)
    const data = await res.json();
  
    // Pass data to the page via props
    return { props: { data } }

}

