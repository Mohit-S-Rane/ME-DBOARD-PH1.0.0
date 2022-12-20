import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MsrConfirmationModule } from '@msr/services/confirmation';
import { MsrLoadingModule } from '@msr/services/loading';
import { MsrMediaWatcherModule } from '@msr/services/media-watcher/media-watcher.module';
import { MsrPlatformModule } from '@msr/services/platform/platform.module';
import { MsrSplashScreenModule } from '@msr/services/splash-screen/splash-screen.module';
import { MsrUtilsModule } from '@msr/services/utils/utils.module';

@NgModule({
    imports  : [
        MsrConfirmationModule,
        MsrLoadingModule,
        MsrMediaWatcherModule,
        MsrPlatformModule,
        MsrSplashScreenModule,
        MsrUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class MsrModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: MsrModule)
    {
        if ( parentModule )
        {
            throw new Error('MsrModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
