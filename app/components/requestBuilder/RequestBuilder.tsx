'use client'

import React, { useState } from 'react'
import FormInput from '../input/FormInput'
import { Button,Box } from '@chakra-ui/react'
import JsonFormatter from 'react-json-formatter'

const fetcher = (url:string)=>{
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res=>{
            console.log("correct")
            resolve(res.json())
        })
        .catch(err=>{
            console.log("err")
            reject("rejected")

        })
    })
}


const RequestBuilder = () => {
  const [url,setUrl] = useState("")
  const [response,setResponse] = useState("")
  const handleChange=(e: any)=>{
    setUrl(e.target.value)
  }
  const handleSetResponse=async ()=>{
    const res = await fetcher(url)
    setResponse(JSON.stringify(res))
  }
  return (
    <>
        <FormInput url={url} handleChange={handleChange}/>
        <Button onClick={handleSetResponse}>send</Button>
        <JsonFormatter json={response} tabWith={4}/>
    </>
  )
}

export default RequestBuilder