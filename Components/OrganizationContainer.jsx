import React , {useState} from 'react';
import styled from 'styled-components';
const OrganizationContainer = () => {
   const [activeTab,setActiveTab] = useState("Softway")  
  return <Container>
      <h1>Organization That I have worked with</h1>
  </Container>;
};
export default OrganizationContainer;

export const Container  =styled.div`

`
