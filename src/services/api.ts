export async function getCategories() {
  return (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '',
  query = '',
) {
  return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
}

export async function searchByIdCategoryOrQuery(search: string) {
  const listCategories = await getCategories();
  const findListCategories = listCategories.find((categorie:
  { id: string, name:string, }) => categorie.id === search);
  if (findListCategories) {
    return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${search}`)).json();
  }
  if (findListCategories === undefined) {
    return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${search}`)).json();
  }
}

export async function getProductById(id: string) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const requestJson = await request.json();
  return requestJson;
}
