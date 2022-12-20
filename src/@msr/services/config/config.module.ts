import { ModuleWithProviders, NgModule } from '@angular/core';
import { MsrConfigService } from '@msr/services/config/config.service';
import { MSR_APP_CONFIG } from '@msr/services/config/config.constants';

@NgModule()
export class MsrConfigModule
{
    /**
     * Constructor
     */
    constructor(private _msrConfigService: MsrConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<MsrConfigModule>
    {
        return {
            ngModule : MsrConfigModule,
            providers: [
                {
                    provide : MSR_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
