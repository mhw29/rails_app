import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('C5 should show error with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith@test.com', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Invalid Email or password.')
    })
})

