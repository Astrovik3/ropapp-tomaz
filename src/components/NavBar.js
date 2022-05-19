import React from 'react';
import ItemListContainer from './ItemListContainer';
import { Grid, AppBar } from '@mui/material';

const NavBar = () => {

  return (
    <AppBar>
      <Grid id='navBar'>
        <p id='titleBrand'>
          ROPAPP
        </p>
        
        <ul id='menuNavBar'>
          <li>home</li>
          <li>shop</li>
          <li>men</li>
          <li>women</li>
          <li>search</li>
        </ul>

        <ItemListContainer />
      </Grid>
    </AppBar>
  );
};

export default NavBar;