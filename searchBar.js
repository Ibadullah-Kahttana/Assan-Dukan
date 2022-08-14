import React,{useState} from 'react';
import {Text,} from 'react-native';
import { Container, Header, Item, Input, Icon, List, ListItem, Left, Body,  Thumbnail, Content} from 'native-base';
 import { DATA } from './vegetable';
 
const SearchBar = () => {
   
     const majeed= () =>
      {
        alert('you clicked the msg');
      }
    const [filterData , setfilterData] =  useState(DATA);
    const [search , setSearch] = useState();
    const searchFilter = (text) =>{
      if (text) {
        const newData = DATA.filter((item)=>{
          const itemData = item.location ? item.location.toUpperCase():' ';
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setfilterData(newData);
        setSearch(text);
      }else {
        setfilterData(filterData);
        setSearch(text);
      } 
    }
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
          <Icon name="search" />
          <Input placeholder="Search" 
          value={search}
          onChangeText={(text)=> searchFilter(text)}
          
          />
          </Item>
        </Header>
        <Content>
        
        <List style={{backgroundColor:'#E0FFFF'}}>
         { filterData.map((item )=> 
          
          <ListItem avatar key={item.id}>
         
          <Left>
            <Thumbnail  source={item.image1} />
          </Left>
          <Body>
            <Text style={{fontWeight:'bold'}}> {item.name} </Text>
            
            <Text note onPress={majeed}> {item.description} </Text>
          </Body>
         
          
        </ListItem> 
        
      ) }
  
      </List>
       </Content>
      </Container>
    );
  }



export default SearchBar;