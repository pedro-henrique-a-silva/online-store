export async function getCategories() {
  return (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`)).json();
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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
