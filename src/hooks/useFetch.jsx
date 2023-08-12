import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoader(true)
            const req = await fetch(url)
            const res = await req.json()
            setData(res)
            setLoader(false)
        }
        fetchData()
    },[url])

  return {data, loader}
}

export {useFetch}