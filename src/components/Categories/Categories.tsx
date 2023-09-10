import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryType } from '../../types';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { CategoryList, CategoryTitle, CategoryItem } from './style';
import { updateProductListAction } from '../../redux/actions';

function Categories() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const handleClick = async (categoryId: string) => {
    const products = await getProductsFromCategoryAndQuery({ categoryId });
    dispatch(updateProductListAction(products.results));
  };

  useEffect(() => {
    const getCategoriesFromApi = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);
    };
    getCategoriesFromApi();
  }, []);

  return (
    <CategoryList>
      <CategoryTitle>
        <h2>Categórias</h2>
      </CategoryTitle>
      {categories
        .map((category) => {
          return (
            <CategoryItem
              key={ category.id }
            >
              <button
                onClick={ () => handleClick(category.id) }
                data-testid="category"
              >
                {category.name}
              </button>
            </CategoryItem>
          );
        })}
    </CategoryList>
  );
}

export default Categories;
