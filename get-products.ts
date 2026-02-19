type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
}

type ProductResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}


type DeleteResponse = {
  id: number
  isDeleted: boolean
  deletedOn: string
}

type UpdateProduct = {
  title?: string
  description?: string
  category?: string
  price?: number
  discountPercentage?: number
  rating?: number
  stock?: number
}
type AddResponse = {
id : number

}

async function getProducts(): Promise<ProductResponse> {
  try {
    const response: Response = await fetch('https://dummyjson.com/products');
    const data: ProductResponse = await response.json();
    
    console.log(data);
    
    const firstProduct: Product = data.products[0];
    console.log('First product:', firstProduct);
    
    return data;
    
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


async function deleteProduct(id: number): Promise<DeleteResponse> {
  try {
    const response: Response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE'
    });
    const data: DeleteResponse = await response.json();
    
    console.log('Product deleted:', data);
    return data;
    
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateProduct(id: number, updates: UpdateProduct) : Promise<Product> {
try{
    const response : Response = await fetch(`https://dummyjson.com/products/${id}`,{
        method: 'PUT',
      
    });
      const data: Product = await response.json();
      return data;
    
    }catch(error){
       console.error('Error:', error);
       throw error;
    }
}


getProducts();
