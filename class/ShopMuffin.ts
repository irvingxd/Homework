import { type Locator, type Page } from "@playwright/test";


// This is the class that contains all the methods related to the shop and the purchase flow. 
// It is designed to be reusable across different test scenarios, allowing us to select different products,
// add them to the cart, and proceed through the checkout process.

export class ShopMuffin {
    readonly page: Page;
    readonly addToBagButton: Locator; 
    readonly checkoutButton: Locator; 
    readonly addressInput: Locator; 
    readonly continueButton: Locator;  
    readonly emailInput: Locator;
    readonly nameInput: Locator
    readonly phoneInput: Locator;
    readonly commentInput: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToBagButton = page.getByRole('button', { name: 'Add to bag' }); 
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.addressInput = page.getByPlaceholder('Choose address');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.nameInput = page.getByRole('textbox', { name: 'Your full name' });
        this.phoneInput = page.getByRole('textbox', { name: 'Your phone number' });
        this.commentInput = page.getByRole('textbox', { name: 'Your comment' });
        this.finishButton = page.getByRole('button', { name: 'Place an order' });
    }

    // This method allows us to select any muffin by name, making it reusable for different products.
    async selectMuffin(name: string) {
        await this.page.getByRole('link', { name: name }).click();
    }
    // The rest of the methods remain unchanged, as they are already designed for reuse across different test scenarios.
    async addToCart() {
        await this.addToBagButton.click();
    }
    // Proceeding to checkout after adding the product to the cart.
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
    // Selecting the first available pickup point from the dropdown, which should be present after proceeding to checkout.
    async selectFirstPickUpPoint() {
        await this.addressInput.waitFor({ state: 'visible' });
        await this.addressInput.click({ force: true });
        const firstOption = this.page.getByRole('option').filter({ hasText: /.+/ }).first();
        await firstOption.waitFor({ state: 'visible' });
        await firstOption.click();
    }
    
    // Continuing the purchase flow by clicking the continue button, which should lead us to the Contact Information page.
    async clickContinue() {
        await this.continueButton.click();
    }
    // Filling in the contact information form with the provided details.
    async fillContactInformation(email: string, name: string, phone: string, comment?: string) {
        await this.emailInput.fill(email);
        await this.nameInput.fill(name);
        await this.phoneInput.fill(phone);
        if (comment) {
            await this.commentInput.fill(comment);
        }
    }
    async clickFinish() {
        await this.finishButton.click();
    }
}