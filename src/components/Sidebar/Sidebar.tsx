import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';

import { CategoryResponse } from '../../types';

function Sidebar() {
  const [categoryList, setCategoryList] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const categorysResponse = await getCategories();
      setCategoryList(categorysResponse);
    };
    getCategory();
  }, []);

  return (
    <aside>
      <ul>
        {categoryList.map((category) => {
          return (
            <li key={ category.id }>
              <button data-testid="category">{category.name}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
