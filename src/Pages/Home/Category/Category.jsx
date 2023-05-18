import React, { useEffect, useState } from 'react';
import CategoryTab from './CategoryTab';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="tabs">
                <a className="tab tab-lg tab-lifted">Large</a>
                <a className="tab tab-lg tab-lifted tab-active">Large</a>
                <a className="tab tab-lg tab-lifted">Large</a>
            </div>
            {
                categories.map(category => <CategoryTab
                    key={category.id}
                    category={category}
                ></CategoryTab>)
            }
        </div>
    );
};

export default Category;