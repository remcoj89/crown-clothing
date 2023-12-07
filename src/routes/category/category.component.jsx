import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import {CategoriesContext} from '../../contexts/categories.contexts'
import ProductComponent from '../../components/product-card/product-card.component'

import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
 const { category } = useParams();
 const { categoriesMap } = useContext(CategoriesContext);
 const [products, setProducts] = useState(categoriesMap[category])

 useEffect(() => {
  setProducts(categoriesMap[category])
 }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {
         products && products.map((product) => <ProductComponent product={product} key={product.id}/> )
        }

      </CategoryContainer>
    </Fragment>
    )
};

export default Category;
