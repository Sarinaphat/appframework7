import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel,Card} from 'framework7-react';
const pStyle = {margin: '1em 0'};

var worklog = [
	{message:'123455',created_by:'keaw', created_datetime:'0000-00-00'},
	{message:'123456',created_by:'mas', created_datetime:'0000-00-00'},
  {message:'123457',created_by:'nat', created_datetime:'0000-00-00'},
  {message:'123458',created_by:'film', created_datetime:'0000-00-00'}
]
export default class Worklog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	data:worklog
    }
}

  render(){
    var {data}=this.state;
      return (
        <Page>
            <Navbar title="Worklog" backLink="Back" sliding />
                <List mediaList>
                    {
                      data.map((item,i)=>{
                    	   return <ListItem key={i} title={item.created_by} subtitle={item.created_datetime} text={item.message} />
                      })
                    }
                </List>
        </Page>
    );
  }
};
