import { Container, TextInput } from '@mantine/core'
import UrlForm from '../Pages/UrlForm'
import UrlResponse from '../Pages/UrlResponse';
import { useState } from 'react';

export default function UrlShortner() {
  

  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )

}
