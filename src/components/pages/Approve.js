import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel,ButtonsSegmented,ListButton} from 'framework7-react';
const pStyle = {margin: '1em 0'};


export default class Approve extends React.Component {
  constructor(props){
    super(props);
    this.state={
      sum1:'-',sum2:'-'
    }
}
 submit=()=>{
   var {sum1,sum2}=this.state;
   console.log(this.state);
 }

  render(){
      return (
        <Page>
            <Navbar title="Approve" backLink="Back" sliding />
              <ContentBlock inner>
                  <List>

                  </List>
              </ContentBlock>
            <Button fill style={pStyle} onClick={()=>this.submit()}>อนุมัติ</Button>
            <Button fill style={pStyle} onClick={()=>this.submit()} color='orange' >ไม่อนุมัติ</Button>

            <List>
              <ListButton style={{background:'#00bcd4'}} color="white">Red Button</ListButton>
              <ListButton style={{background:'#00bcd1'}} color="white">Green Button</ListButton>
            </List>
            <List>

            </List>
        </Page>
    );
  }
};
