import { chromium, webkit, firefox } from "@playwright/test";

export class BrowserUtils {
    constructor(){
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async launchBrowser(browserName)
    {
        if(browserName.toLowerCase() == "chromium")
        {
            this.browser = await chromium.launch({ headless: false });
        }
        else if(browserName.toLowerCase() == "firefox")
        {
            this.browser = await firefox.launch({ headless: false });
        }
        else if(browserName.toLowerCase() == "webkit")
        {
            this.browser = await webkit.launch({ headless: false });
        }   

        this.context = await this.browser.newContext();
        this.page = await this.context.newPage()
        return this.page;
        
    }

    async closeBrowser()
    {
        await this.browser.close()
    }
}