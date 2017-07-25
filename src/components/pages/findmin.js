import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button} from 'framework7-react';

export const findmin = () => {

      var points=()=>{
        var input1,input2,input3,input4,input5=this.state;
        var points=[0];
        points.sort(function(a, b){return b-a});
        this.setState({points:{result}});
      }

  // var {result,points}=this.state;

    return (

        <Page>
            <Navbar title="findmin" backLink="Back" sliding />
            <ContentBlock inner>

            <List form>
                <ListItem>
                    <FormInput type="number" value="" placeholder="number"
                    onChange={(e)=>this.setState({input1:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value="" placeholder="number"
                    onChange={(e)=>this.setState({input2:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value="" placeholder="number"
                    onChange={(e)=>this.setState({input3:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value="" placeholder="number"
                    onChange={(e)=>this.setState({input4:parseInt(e.target.value)})} />
                </ListItem>
                <ListItem>
                    <FormInput type="number" value="" placeholder="number"
                    onChange={(e)=>this.setState({input5:parseInt(e.target.value)})} />
                </ListItem>
                </List>
                <List form>
                    <ListItem>
                        <FormInput type="number" value="" placeholder="sort"  />
                    </ListItem>
                </List>
                {result}
                  <GridRow >
                      <GridCol><Button big fill color="blue" onClick={this.points}>min</Button></GridCol>
                  </GridRow>



            </ContentBlock>
        </Page>
    );
};
