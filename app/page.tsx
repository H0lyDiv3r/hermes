import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@chakra-ui/react'
import FormInput from './components/input/FormInput'
import RequestBuilder from './components/requestBuilder/RequestBuilder'

export default function Home() {
  return (
    <main>
      <Box>
        <RequestBuilder/>
      </Box>
    </main>
  )
}
