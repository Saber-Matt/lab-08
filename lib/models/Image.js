import { query } from 'pool';

class Image {
  id;
  item;
  quantityOfItems;

  constructor(row) {
    this.id = row.id;
    this.quantityOfItems = row.quantity_of_items;
  }
  static async insert( item, quantity_of_items)
  const { rows } = await query(`
  INSERT INTO images( item, quantity_of items)
  VALUES ($1)
  RETURNING 8
  `, [item, quantityOfItems]
  );

  return new Image(rows[0]);
}

// static async read() {
//   const { rows } = await query(`
//   SELECT * FROM orders`);
// }