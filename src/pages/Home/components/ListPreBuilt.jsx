import React from 'react'
import PreBuiltItem from './PreBuiltItem';

const ListPreBuilt = () => {
    // goi api
    // lay ve mang
    const array = [{
        name: 'Ten PC 1',
        price: 12000
    },
    {
        name: 'PC 2',
        price: 15000
    }];
    return (
        <React.Fragment>
            <div>ListPreBuilt</div>
            {array && array.length > 0 ? (
                array.map(item => <PreBuiltItem key={item.id} item={item} />)
            ) : (
                <p>No items to display.</p> 
            )}
        </React.Fragment>

    )
}

export default ListPreBuilt