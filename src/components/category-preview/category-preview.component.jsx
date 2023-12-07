import ProductCard from '../product-card/product-card.component';

import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles'

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
        <Title to={`${title}`} className='title'>{title.toUpperCase()}</Title>
      <Preview>
        {
          products.filter((_, index) => index < 4)
          .map((product) => <ProductCard product={product} key={product.id}/>)
        }
      </Preview>
    </CategoryPreviewContainer>
  )
};

export default CategoryPreview;
