import React from 'react';
import '../pages/shop.styles.scss';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../components/collection-overview/collection-overview.component';
import CollectionPage from '../components/collection/collection.component';


const Shop = ({match}) =>{
    // console.log(match)
    return ( 
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
)};


export default Shop;