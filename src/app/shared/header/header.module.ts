import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';

import { HeaderComponent } from '../header/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule],
    exports: [HeaderComponent]
})
export class HeaderModule { }
