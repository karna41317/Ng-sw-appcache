import { Cli.MobilePage } from './app.po';

describe('cli.mobile App', () => {
    let page: Cli.MobilePage;

    beforeEach(() => {
        page = new Cli.MobilePage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
