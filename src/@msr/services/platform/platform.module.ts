import { NgModule } from '@angular/core';
import { MsrPlatformService } from '@msr/services/platform/platform.service';

@NgModule({
    providers: [
        MsrPlatformService
    ]
})
export class MsrPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _msrPlatformService: MsrPlatformService)
    {
    }
}
