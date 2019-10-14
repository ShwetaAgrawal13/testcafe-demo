import { Selector } from 'testcafe';

fixture`Validate Google`
    .page('https://www.google.com/')

test('To validate google search', async t => {
    await t
        .expect(Selector('title').innerText).eql("Google")
        .expect( Selector('[name="q"]').visible).ok()
        .typeText( Selector('[name="q"]'),"Testcafe123")
        .click(Selector('[type="submit"]'))
        .expect(Selector('title').innerText).eql("Testcafe - Google Search")
        .expect(Selector('#search').visible).ok();
});