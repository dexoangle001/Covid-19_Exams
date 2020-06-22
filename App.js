import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import BottomTabNavigation from './navigation/BottomTabNavigation';

import {ApolloClient} from "apollo-client";
import {AppRegistry} from "react-native"
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloProvider} from "@apollo/react-hooks";


const client = new ApolloClient({
  link:new HttpLink({uri:'https://covid19-graphql.netlify.app/'}),
  cache:new InMemoryCache()
})

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <StackNavigation  />
      </ApolloProvider>    
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('MyApplication',()=>App);