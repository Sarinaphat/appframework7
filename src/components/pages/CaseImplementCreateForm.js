import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button} from 'framework7-react';

export default class CaseImplementCreateForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {input1:0,input2:0,input3:0,input4:0,input5:0,min:0}
  }



      render(){

    return (

        <Page>
            <Navbar title="CaseImplementCreateForm" backLink="Back" sliding />
            <ContentBlock inner>
            <List form>

              <ListItem>
                <FormInput type="text" />
              </ListItem>
              <ListItem>
                <FormInput type="number" />
              </ListItem>

            <ListItem smartSelect smartSelectBackOnSelect title="Owner">
              <select name="mac-owner">
                <option value="autsakorn">Autsakorn</option>
                <option value="sarinaphat">Sarinaphat</option>
              </select>
            </ListItem>


          </List>






            </ContentBlock>
        </Page>
    );
  }
};
