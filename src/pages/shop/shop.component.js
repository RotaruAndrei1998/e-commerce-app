import React, {useState} from 'react';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import SHOP_DATA from './shop.data';

const Shop = (props) => {

    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className='shop-page'>
            {collections &&
                collections.map( ({id, ...other}) => (
                    <CollectionPreview key={id} {...other} />
                ))
            }
        </div>
    )

}

    export default Shop;