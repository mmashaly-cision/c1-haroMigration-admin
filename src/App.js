import React from "react";
import { Admin, Resource, ListGuesser, fetchUtils, ShowGuesser, EditGuesser } from 'react-admin';
import {PostSubscription} from './PostSubscription'
import { UserList } from "./haroUser";
import dataProviderSpring from "./dataProviderSpring";
import { Route } from 'react-router-dom';


function App() {

  
  const dataProvider = 'http://localhost:8080/api/user';
  const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    } 
    return fetchUtils.fetchJson(url, options);
}

  return (
    <React.Fragment>
      <Admin dataProvider={dataProviderSpring(dataProvider, fetchJson)}>
          <Resource name="postgres" list={UserList} edit={EditGuesser} />
          <Resource name="postgres/subscriptions" list={PostSubscription} />
          <Resource name="migrationStatus" list={ListGuesser} edit={EditGuesser}/>

      </Admin>
    </React.Fragment>
  );
}

export default App;