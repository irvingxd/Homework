import { test, expect } from '@playwright/test';
import { MainWebsite } from '../class/MainWebsite';
import { ShopMuffin } from '../class/ShopMuffin';


// This is the test flow from going from the main website
// towards the shop, selecting a product, adding it to the cart,
// proceeding to checkout, selecting the first pickup point, and finally clicking continue.

test('Full purchase flow start to finish', async ({ page }) => {
    const mainSite = new MainWebsite(page);
    const shopMuffin = new ShopMuffin(page);

    // Initial navigation to website & shop
    await mainSite.goto();
    await mainSite.navigateToShop();

    // Selecting product, adding to cart, and proceeding to checkout
    await shopMuffin.selectMuffin('Blueberry Burst Muffins');
    // await shopMuffin.selectMuffin('Glazed Paradise Donuts'); // Works as well if we use a different product.
    await shopMuffin.addToCart();
    await shopMuffin.proceedToCheckout();

    // Choosing the first Omniva pickup point
    await shopMuffin.selectFirstPickUpPoint();

    // Finalizing the purchase by clicking continue
    await shopMuffin.clickContinue();
    // Moving onto the the Contact Information, verifying that we're on correct page
    await expect(page.getByText('Contact information')).toBeVisible();

    // Adding the mandatory information to proceed further with test
    await shopMuffin.fillContactInformation(
        'mantas@testingthis1234.xyz', // Email 
        'Mantas Testas', // Full name
        '+37061234567', // Phone number
        'Žiūrim ar veikia' // Special dietary requests/comment 
    );
    
    // Continuing
    await shopMuffin.clickContinue();
    // Finalizing the order
    await shopMuffin.clickFinish();
    // The test finishes -> an image pops up that the order was placed successfully.
});