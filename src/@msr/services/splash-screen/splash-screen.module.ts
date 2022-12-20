import { NgModule } from '@angular/core';
import { MsrSplashScreenService } from '@msr/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        MsrSplashScreenService
    ]
})
export class MsrSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _msrSplashScreenService: MsrSplashScreenService)
    {
    }
}
