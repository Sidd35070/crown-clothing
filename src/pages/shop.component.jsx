import React from 'react';
import '../pages/shop.styles.scss';

import CollectionsOverview from '../components/collection-overview/collection-overview.component';


const Shop = (props) => ( 
    <div className="shop-page">
        <CollectionsOverview />
    </div>
);


export default Shop;