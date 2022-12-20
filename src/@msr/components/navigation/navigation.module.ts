import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MsrScrollbarModule } from '@msr/directives/scrollbar/public-api';
import { MsrHorizontalNavigationBasicItemComponent } from '@msr/components/navigation/horizontal/components/basic/basic.component';
import { MsrHorizontalNavigationBranchItemComponent } from '@msr/components/navigation/horizontal/components/branch/branch.component';
import { MsrHorizontalNavigationDividerItemComponent } from '@msr/components/navigation/horizontal/components/divider/divider.component';
import { MsrHorizontalNavigationSpacerItemComponent } from '@msr/components/navigation/horizontal/components/spacer/spacer.component';
import { MsrHorizontalNavigationComponent } from '@msr/components/navigation/horizontal/horizontal.component';
import { MsrVerticalNavigationAsideItemComponent } from '@msr/components/navigation/vertical/components/aside/aside.component';
import { MsrVerticalNavigationBasicItemComponent } from '@msr/components/navigation/vertical/components/basic/basic.component';
import { MsrVerticalNavigationCollapsableItemComponent } from '@msr/components/navigation/vertical/components/collapsable/collapsable.component';
import { MsrVerticalNavigationDividerItemComponent } from '@msr/components/navigation/vertical/components/divider/divider.component';
import { MsrVerticalNavigationGroupItemComponent } from '@msr/components/navigation/vertical/components/group/group.component';
import { MsrVerticalNavigationSpacerItemComponent } from '@msr/components/navigation/vertical/components/spacer/spacer.component';
import { MsrVerticalNavigationComponent } from '@msr/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        MsrHorizontalNavigationBasicItemComponent,
        MsrHorizontalNavigationBranchItemComponent,
        MsrHorizontalNavigationDividerItemComponent,
        MsrHorizontalNavigationSpacerItemComponent,
        MsrHorizontalNavigationComponent,
        MsrVerticalNavigationAsideItemComponent,
        MsrVerticalNavigationBasicItemComponent,
        MsrVerticalNavigationCollapsableItemComponent,
        MsrVerticalNavigationDividerItemComponent,
        MsrVerticalNavigationGroupItemComponent,
        MsrVerticalNavigationSpacerItemComponent,
        MsrVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        MsrScrollbarModule
    ],
    exports     : [
        MsrHorizontalNavigationComponent,
        MsrVerticalNavigationComponent
    ]
})
export class MsrNavigationModule
{
}
