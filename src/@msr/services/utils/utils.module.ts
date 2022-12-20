import { NgModule } from '@angular/core';
import { MsrUtilsService } from '@msr/services/utils/utils.service';

@NgModule({
    providers: [
        MsrUtilsService
    ]
})
export class MsrUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _msrUtilsService: MsrUtilsService)
    {
    }
}
