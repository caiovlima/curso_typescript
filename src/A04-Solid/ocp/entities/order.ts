import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../messaging';
import { Persistency } from '../persistency';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(private readonly cart: ShoppingCart, private readonly messaging: Messaging, private readonly persistency: Persistency){}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("Empty Order");
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(`Seu pedido com total de ${this.cart.total()} foi recebido`);
        this.persistency.saveOrder();
        this.cart.clear();
    }

}