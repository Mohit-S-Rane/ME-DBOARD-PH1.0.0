import { NgModule } from '@angular/core';
import { MsrScrollbarDirective } from '@msr/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        MsrScrollbarDirective
    ],
    exports     : [
        MsrScrollbarDirective
    ]
})
export class MsrScrollbarModule
{
}
