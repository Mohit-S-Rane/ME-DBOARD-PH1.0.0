import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MsrLoadingBarComponent } from '@msr/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        MsrLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        MsrLoadingBarComponent
    ]
})
export class MsrLoadingBarModule
{
}
