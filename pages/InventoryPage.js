class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartBadge = '.shopping_cart_badge';
        this.cartLink = '.shopping_cart_link';
        this.sortDropdown = '[data-test="product-sort-container"]';
        this.productNames = '.inventory_item_name';
        this.productPrices = '.inventory_item_price';
    }

    async addItemToCart() {
        await this.page.click(this.addBackpackButton);
    }

    async goToCart(){
        await this.page.click(this.cartLink);
    }

    async sortBy(option){
        await this.page.selectOption(this.sortDropdown, option);
    }

    async getProductNames(){
        return this.page.locator(this.productNames).allTextContents();
    }

    async getProductPrices(){
        return this.page.locator(this.productPrices).allTextContents();
    }
}

module.exports = { InventoryPage };