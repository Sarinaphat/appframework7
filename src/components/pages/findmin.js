import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button} from 'framework7-react';

export default class findmin extends React.Component {

  constructor(props){
    super(props);
    this.state = {input1:0,input2:0,input3:0,input4:0,input5:0,min:0}
  }
       points=()=>{
        // var input1,input2,input3,input4,input5=this.state;
        // var points=[0];
        var {input1,input2,input3,input4,input5,min} = this.state;

        var stringInput = input1+"|"+input2+"|"+input3+"|"+input4+"|"+input5;
        console.log(stringInput);

        var dataArray = stringInput.split("|");
        console.log(dataArray);
        min = 1000000;

        for (var i = 0; i < dataArray.length; i++) {
          if(parseInt(dataArray[i])<min){
            min = dataArray[i];
          }
        }

        this.setState({min});
      }


      render(){

    return (

        <Page>
            <Navbar title="findmin" backLink="Back" sliding />
            <ContentBlock inner>

            <List form>
                <ListItem>
                    <FormInput type="number" value={this.state.input1} placeholder="number"
                    onChange={(e)=>this.setState({input1:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value={this.state.input2} placeholder="number"
                    onChange={(e)=>this.setState({input2:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value={this.state.input3} placeholder="number"
                    onChange={(e)=>this.setState({input3:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value={this.state.input4} placeholder="number"
                    onChange={(e)=>this.setState({input4:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value={this.state.input5} placeholder="number"
                    onChange={(e)=>this.setState({input5:parseInt(e.target.value)})} />
                </ListItem>
                </List>
                <List form>
                    <ListItem title={this.state.min}>
                    </ListItem>
                </List>

                  <GridRow >
                      <GridCol><Button big fill color="blue" onClick={this.points}>min</Button></GridCol>
                  </GridRow>



            </ContentBlock>
        </Page>
    );
  }
};
