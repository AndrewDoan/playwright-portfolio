class CheckoutPage {
    constructor(page){
        this.page = page;
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.confirmationHeader = '.complete-header';
        this.errorMessage = '.error-message-container';
    }

    async fillInfo(firstName, lastName, postalCode){
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
    }

    async continue(){
        await this.page.click(this.continueButton);
    }

    async finish(){
        await this.page.click(this.finishButton);
    }

    async getConfirmation() {
        return this.page.locator(this.confirmationHeader);
    }

    async getErrorMessage(){
        return this.page.locator(this.errorMessage);
    }
}

module.exports = { CheckoutPage };