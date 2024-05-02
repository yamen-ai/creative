function addToCart(productId) {
    // Find the product by productId
    var product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      alert(product.name + ' has been added to the cart.');
    }
  }
  
  // Example product data
  var products = [
    { id: 1, name: 'Laptop 1', type: 'Gaming Laptop', color: 'Black', discount: 20, description: 'High performance for gaming and professional work.' },
    { id: 2, name: 'Laptop 2', type: 'Business Laptop', color: 'Silver', discount: 15, description: 'Reliable and secure for business needs.' }
    // Add more products as needed
  ];