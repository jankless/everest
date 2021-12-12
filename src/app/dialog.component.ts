import { DOCUMENT } from "@angular/common";
import { Component, HostBinding, Inject, OnInit } from "@angular/core";
import { AfterViewInit, Directive, ElementRef, Renderer2 } from "@angular/core";
import { Subscription, fromEvent, filter } from "rxjs";

@Component({
  selector: "dialog[mp]",
  template: `
    <button (click)="close()" class="close" type="button">
      <small>CLOSE</small>
    </button>
    <ng-content></ng-content>
  `,
})
export class DialogComponent implements OnInit {
  @HostBinding("open") open = true;
  private destroy: Subscription[] = [];
  private name = "DIALOG";
  private windowClicks = fromEvent(this.document, "click").pipe(
    filter(({ target }) => (target as any).nodeName === this.name)
  );

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.destroy.push(this.windowClicks.subscribe(this.close.bind(this)));
    this.document.body.style.overflow = "hidden";
  }

  close() {
    this.open = false;
    this.document.body.style.overflow = "initial";
  }

  ngOnDestroy() {
    this.destroy.forEach((sub) => sub.unsubscribe());
    this.document.body.style.overflow = "initial";
  }
}

@Directive({
  selector: "[focusTrap]",
})
export class FocusTrapDirective implements AfterViewInit {
  private $ = this.el.nativeElement;
  private get focus(): Node[] {
    return Array.from(
      this.$.querySelectorAll("button, video") as NodeList
    ).filter((el: any) => !el.disabled);
  }
  private get first(): HTMLInputElement {
    return this.focus[0] as HTMLInputElement;
  }
  private get last(): HTMLInputElement {
    return this.focus[this.focus.length - 1] as HTMLInputElement;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.first) {
      this.first.focus();
      this.renderer.listen(this.$, "keydown", (e) => {
        if (e.keyCode !== 9) return;

        if (e.shiftKey) {
          if (document.activeElement === this.first) {
            this.last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === this.last) {
            this.first.focus();
            e.preventDefault();
          }
        }
      });
    }
  }
}
