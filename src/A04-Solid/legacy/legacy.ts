type CartItem = { name: string, price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'open';

    addItem(item: CartItem): void {
        this._items.push(item);
    };

    removeItem(index: number): void {
        this._items.splice(index, 1);
    };

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total(): number {
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log("Empty Order");
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean { return this._items.length === 0; }

    sendMessage(message: string): void { console.log('Mensagem enviadoa'); }

    saveOrder(): void { console.log('Pedido salvo'); }

    clear(): void {
        console.log('Carrinho limpo');
        this._items.length = 0;
    }

}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.99 });
shoppingCart.addItem({ name: 'Bermuda', price: 30.80 });
shoppingCart.addItem({ name: 'Boné', price: 20.00 });