-- creating a table
CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product varchar(30) NOT NULL,
    etc.

)

-- inserting product
INSERT INTO products
(product, price, accessory, solution_name, text_one, text_two)
VALUES
('Model', '29', 'Prototyping', 'Modeling', 'Improvements in image capturing, modeling and
    computer vision will make VR and AR more efficient. These trends will help make 3D a critical part
    of future eCommerce.', 'Developing 3D marketing materials: VR and AR can be used in your
    marketing to tell your brands story, showcase your products and
    create promotional content. ');

('Render', '69', 'product images', 'Rendering', 'Improvements in image capturing, modeling and
    computer vision will make VR and AR more efficient. These trends will help make 3D a critical part
    of future eCommerce.', 'Developing 3D marketing materials: VR and AR can be used in your
    marketing to tell your brands story, showcase your products and
    create promotional content. ');

('Animate', '169', 'digital content', 'Animation', 'Improvements in image capturing, modeling and
    computer vision will make VR and AR more efficient. These trends will help make 3D a critical part
    of future eCommerce.', 'Developing 3D marketing materials: VR and AR can be used in your
    marketing to tell your brands story, showcase your products and
    create promotional content. ');

('Visualize', '229', 'brand recognition', 'Product Visualisation', 'Improvements in image capturing, modeling and
    computer vision will make VR and AR more efficient. These trends will help make 3D a critical part
    of future eCommerce.', 'Developing 3D marketing materials: VR and AR can be used in your
    marketing to tell your brands story, showcase your products and
    create promotional content. ');

-- Get all products
SELECT * FROM products
