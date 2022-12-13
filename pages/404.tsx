import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {}

export default function NotFound({}: Props) {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },1000)
    })
  return (
    <div>NotFound</div>
  )
}