import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DialogComponent, FocusTrapDirective } from "./dialog.component";
import { SvgComponent } from "./svg.component";

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    DialogComponent,
    FocusTrapDirective,
  ],
  imports: [BrowserModule],
  providers: [FocusTrapDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
