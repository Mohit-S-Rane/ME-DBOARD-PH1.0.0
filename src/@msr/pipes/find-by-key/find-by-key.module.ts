import { NgModule } from '@angular/core';
import { MsrFindByKeyPipe } from '@msr/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        MsrFindByKeyPipe
    ],
    exports     : [
        MsrFindByKeyPipe
    ]
})
export class MsrFindByKeyPipeModule
{
}
