'use client'
import {ChakraProvider} from "@chakra-ui/react"
import {CacheProvider} from "@chakra-ui/next-js"

import React from 'react'

type ChildrenProps = {
    children:React.ReactNode
}


const ChakraWrapper = ({children}:ChildrenProps)=>{
    return (
        <>
            <CacheProvider>
                <ChakraProvider>    
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </>
    )
}

export default ChakraWrapper
