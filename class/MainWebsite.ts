import { type Locator, type Page } from "@playwright/test";

// This is a simple class, with an initial plan of setting up entirety of the website
// navigation here. For now, we only have the "Shop" link, but it has the possibility to add
// more links and navigation methods if needed.

export class MainWebsite {
    readonly page: Page;
    readonly shopLink: Locator;
    // Initial constructor to set up the main page and the link to Shop.
    // There's also a possibility to use /Shop/ in case if there's icons or other elements,
    // as from my own personal testing, Firefox does not like icons.
    constructor(page: Page) {
        this.page = page;
        this.shopLink = page.getByRole('link', { name: 'Shop' }); 
    }
    // A simple method to initially navigate to the website & shop
    async goto() {
        await this.page.goto('https://lightgrey-antelope-m7vwozwl8xf7l3y2.builder-preview.com/');
    }
    
    async navigateToShop() {
        await this.shopLink.click();
    }
}
// This class could have multiple others, as long as the constructor has them added as well and the methods are created. 
// For example, if we wanted to navigate to the Menu or About page.

// I would like to get more insights on the Line 15 if we were to pass:
// judging from our /pricing and /lt/planai as an example - how that could remain fully modular across all locales?