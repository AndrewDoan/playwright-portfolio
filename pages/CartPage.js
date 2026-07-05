class CartPage{
    constructor(page){
          this.page = page;
          this.checkoutButton = '[data-test="checkout"]';
          this.cartItems = '.cart_item';
          this.removeButton = '[data-test="remove-sauce-labs-backpack"]';
    }

    async checkout() {
        await this.page.click(this.checkoutButton);
    }

    async getCartItems() {
        return this.page.locator(this.cartItems);
    }

    async removeItem() {
        await this.page.click(this.removeButton);
    }
}

module.exports = { CartPage };