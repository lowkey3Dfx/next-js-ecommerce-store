export async function up(sql) {
  await sql`
CREATE TABLE products
( id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product varchar(30) NOT NULL,
price varchar(30) NOT NULL,
accessory varchar(40),
solution_name varchar(30) NOT NULL,
text_one varchar(400),
text_two varchar(400)
);

`;
}

export async function down(sql) {
  await sql`
  DROP TABLE products
  `;
}
