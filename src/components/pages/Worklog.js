import React from 'react';
import {Page, ContentBlock, Navbar,List,ListItem,FormInput,GridRow,GridCol,Button,FormLabel,Card} from 'framework7-react';
const pStyle = {margin: '1em 0'};


export default class Worklog extends React.Component {
  constructor(props){
    super(props);
}

worklogging=()=>{
var worklog = [
	{message:'123455',created_by:'keaw', created_datetime:'0000-00-00'},
	{message:'123455',created_by:'keaw', created_datetime:'0000-00-00'},
  {message:'123455',created_by:'keaw', created_datetime:'0000-00-00'},
  {message:'123455',created_by:'keaw', created_datetime:'0000-00-00'}
]
this.state = {
	data:worklog
}

  render(){
    var data=this.state;
      return (
        <Page>
            <Navbar title="Worklog" backLink="Back" sliding />
                <List mediaList>
                    data.map((item,i)=>{
                    	return <ListItem key={i} >{item.message}{item.created_by}{item.created_datetime}</ListItem>

                    });
                </List>
        </Page>
    );
  }
};
