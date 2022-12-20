import { NgModule } from '@angular/core';
import { MsrMediaWatcherService } from '@msr/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        MsrMediaWatcherService
    ]
})
export class MsrMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _msrMediaWatcherService: MsrMediaWatcherService)
    {
    }
}
