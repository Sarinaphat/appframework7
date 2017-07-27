import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel} from 'framework7-react';

const pStyle = {margin: '1em 0'};
export default class Profile extends React.Component {
  constructor(props){
    super(props);
}
  render(){
      return (
        <Page>
            <Navbar title="CaseStatusButton" backLink="Back" sliding />
            <List>
              <ListItem style={{textAlign:'center'}}>
                <img style={{margin:'auto',maxHeight:80}} src={"http://vspace.in.th/uploads/20170513_105802_file_picture_profile_f7089865063676d2df918ee350eb6b92.jpg"}/>
              </ListItem>
            </List>

              <List form>
                <ListItem>
                  <FormLabel>Name:</FormLabel>
                  <FormInput type="text"   />
                </ListItem>
                <ListItem>
                  <FormLabel>E-mail:</FormLabel>
                  <FormInput type="text"   />
                </ListItem>
                <ListItem>
                  <FormLabel>Phone:</FormLabel>
                  <FormInput type="text"   />
                </ListItem>
                <ListItem>
                  <FormLabel>Company:</FormLabel>
                  <FormInput type="text"   />
                </ListItem>
              </List>
            <List>
              <ListItem style={{textAlign:'center'}}>
                <img style={{margin:'auto',maxHeight:80}} src="http://vspace.in.th/uploads/_5efc18ca80efb4a082027ceb62955513.png"  width="100" height="50" position="center"/>
              </ListItem>
              <ListItem style={{textAlign:'center'}}>
                <img style={{margin:'auto',maxHeight:80}} src="http://vspace.in.th/uploads/20170513_104413_company_logo_f7089865063676d2df918ee350eb6b92.gif"  width="100" height="50" position="center"/>
              </ListItem>
            </List>
        </Page>
    );
  }
};
