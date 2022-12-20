import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsrLoadingInterceptor } from '@msr/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: MsrLoadingInterceptor,
            multi   : true
        }
    ]
})
export class MsrLoadingModule
{
}
