import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { OrderStatus } from './entities/interfaces/order-status';
import { Messaging } from './messaging';
import { Persistency } from './persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Boné', 30.99));
shoppingCart.addItem(new Product('Bermuda', 69.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();