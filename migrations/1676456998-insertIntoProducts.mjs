const products = [
  {
    id: 1,
    product: 'Model',
    price: '29',
    accessory: 'Prototyping',
    solution_name: 'Modeling',
    text_one:
      'Improvements in image capturing and modeling, virtual showrooms, and computer vision will make VR and AR more efficient and more effective. These trends and other will help make 3D a critical part of future eCommerce.',
    text_two:
      'Developing 3D marketing materials: VR and AR can be used in your marketing to tell your brands story, showcase your products and create promotional content. However you need to tell a great story.',
  },
  {
    id: 2,
    product: 'Render',
    price: '69',
    accessory: 'product images',
    solution_name: 'Rendering',
    text_one:
      'Improvements in image capturing and modeling, virtual showrooms, and computer vision will make VR and AR more efficient and more effective. These trends and other will help make 3D a critical part of future eCommerce.',
    text_two:
      'Developing 3D marketing materials: VR and AR can be used in your marketing to tell your brands story, showcase your products and create promotional content. However you need to tell a great story.',
  },
  {
    id: 3,
    product: 'Animate',
    price: '169',
    accessory: 'digital content',
    solution_name: 'Animation',
    text_one:
      'Improvements in image capturing and modeling, virtual showrooms, and computer vision will make VR and AR more efficient and more effective. These trends and other will help make 3D a critical part of future eCommerce.',
    text_two:
      'Developing 3D marketing materials: VR and AR can be used in your marketing to tell your brands story, showcase your products and create promotional content. However you need to tell a great story.',
  },
  {
    id: 4,
    product: 'Visualize',
    price: '229',
    accessory: 'brand recognition',
    solution_name: 'Product Visualisation',
    text_one:
      'Improvements in image capturing and modeling, virtual showrooms, and computer vision will make VR and AR more efficient and more effective. These trends and other will help make 3D a critical part of future eCommerce.',
    text_two:
      'Developing 3D marketing materials: VR and AR can be used in your marketing to tell your brands story, showcase your products and create promotional content. However you need to tell a great story.',
  },
];

export async function up(sql) {
  await sql`
  INSERT INTO products ${sql(
    products,
    'product',
    'price',
    'accessory',
    'solution_name',
    'text_one',
    'text_two',
  )}
  `;
}

export async function down(sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
