import { NgModule } from '@angular/core';
import { MsrScrollResetDirective } from '@msr/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        MsrScrollResetDirective
    ],
    exports     : [
        MsrScrollResetDirective
    ]
})
export class MsrScrollResetModule
{
}
