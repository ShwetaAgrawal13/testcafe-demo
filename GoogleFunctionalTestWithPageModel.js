import GooglePage from './page-model/GooglePage'; //importing Google page
import GoogleResultPage from './page-model/GoogleResultPage'//importing google result page

const googlePage = new GooglePage(); //instantiating google page
const googleResultPage = new GoogleResultPage(); // instantiating google result page

fixture`Validate Google`
    .page('https://www.google.com/')

test('To validate google search', async t => {
    await t
        .expect(googlePage.title.innerText).eql("Google")
        .expect(googlePage.searchTextBox.visible).ok()
        .typeText(googlePage.searchTextBox,"Testcafe")
        .click(googlePage.searchButton)
        .expect(googleResultPage.title.innerText).eql("Testcafe - Google Search")
        .expect(googleResultPage.Results.visible).ok();
});