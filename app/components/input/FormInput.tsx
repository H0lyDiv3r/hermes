import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import {beautify} from "json-beautify"
import React from 'react'

type func = (arg:any) =>void
type URL = {
    url?:string,
    handleChange: func
}

const FormInput = ({url,handleChange}:URL) => {
  return (
    <FormControl>
        <FormLabel display={"none"}>URL</FormLabel>
        <Input placeholder={'url goes here'} value={url} onChange={e=>handleChange(e)}/>
    </FormControl>
  )
}

export default FormInput