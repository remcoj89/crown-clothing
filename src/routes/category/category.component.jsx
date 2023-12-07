import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import {CategoriesContext} from '../../contexts/categories.contexts'

import ProductComponent from '../../components/product-card/product-card.component'

const Category = () => {
 const { category } = useParams();
 const { categoriesMap } = useContext(CategoriesContext);
 const [products, setProducts] = useState(categoriesMap[category])

 useEffect(() => {
  setProducts(categoriesMap[category])
 }, [category, categoriesMap])

  return (
    <Fragment>
      <h2>{category}</h2>
      <div className='category-container'>
        {
         products && products.map((product) => <ProductComponent product={product} key={product.id}/> )
        }

      </div>
    </Fragment>
    )
};

export default Category;
