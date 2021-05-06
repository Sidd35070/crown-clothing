import React from 'react';
import { CollectionPreview } from '../components/collectionPreview/CollectionPreview.component';
import '../pages/shop.styles.scss';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
    state = { 
        collections: SHOP_DATA
     }
    render() { 
        return ( 
            <div className="shop-page">
                {this.state.collections.map(collection => <CollectionPreview key={collection.id} collection={collection}/> )}
            </div>
         );
    }
}
 
export default Shop;