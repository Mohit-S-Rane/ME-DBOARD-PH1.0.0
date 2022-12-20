import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MsrFullscreenComponent } from '@msr/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MsrFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        MsrFullscreenComponent
    ]
})
export class MsrFullscreenModule
{
}
