export async function getCategories() {
  return (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
}

export async function getProductsFromCategoryAndQuery({ categoryId = '', query = '' }) {
  return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
}

export async function getProductDescription(productId: string) {
  return (await fetch(`https://api.mercadolibre.com/items/${productId}/description`)).json();
}

export async function getProductById(productId: string) {
  return (await fetch(`https://api.mercadolibre.com/items/${productId}`)).json();
}
