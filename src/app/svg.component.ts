import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "svg[icon]",
  template: `
    <ng-container #twitter *ngIf="icon === 'twitter'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 30 24"
        xml:space="preserve"
        fill="#fff"
      >
        <path
          d="M24.71 5.89C24 6.2 23.2 6.4 22.4 6.53c0.82-0.5 1.45-1.29 1.75-2.23c-0.77 0.46-1.62 0.8-2.53 1 C20.92 4.5 19.9 4 18.7 4c-2.2 0-3.99 1.81-3.99 4.04c0 0.3 0 0.6 0.1 0.92C11.54 8.8 8.6 7.2 6.6 4.7 C6.3 5.3 6.1 6 6.1 6.77c0 1.4 0.7 2.6 1.8 3.36c-0.65-0.02-1.27-0.2-1.81-0.51c0 0 0 0 0 0.1 c0 2 1.4 3.6 3.2 3.96c-0.34 0.09-0.69 0.14-1.05 0.14c-0.26 0-0.51-0.03-0.75-0.07c0.51 1.6 2 2.8 3.7 2.8 c-1.36 1.08-3.08 1.73-4.95 1.73c-0.32 0-0.64-0.02-0.95-0.06C7.05 19.3 9.1 20 11.4 20c7.33 0 11.34-6.15 11.34-11.49 c0-0.18 0-0.35-0.01-0.52C23.5 7.4 24.2 6.7 24.7 5.89z"
        ></path>
      </svg>
    </ng-container>
    <ng-container #facebook *ngIf="icon === 'facebook'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 30 24"
        xml:space="preserve"
        fill="#fff"
      >
        <path
          d="M16.21 20h-3.26v-8h-1.63V9.24h1.63V7.59c0-2.25 0.92-3.59 3.53-3.59h2.17v2.76H17.3 c-1.02 0-1.08 0.39-1.08 1.11l0 1.38h2.46L18.38 12h-2.17V20z"
        ></path>
      </svg>
    </ng-container>

    <ng-container #instagram *ngIf="icon === 'instagram'">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 30 24"
        style="enable-background:new 0 0 30 24;"
        xml:space="preserve"
        fill="#fff"
      >
        <g>
          <path
            d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                        c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                        c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                        c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                        c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                        c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                        c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                        c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                        c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z"
          ></path>
          <path
            d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                        c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z"
          ></path>
          <path
            d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z"
          ></path>
        </g>
      </svg>
    </ng-container>

    <ng-container #tiktok *ngIf="icon === 'tiktok'">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 30 24"
        style="enable-background:new 0 0 30 24;"
        xml:space="preserve"
        fill="#fff"
      >
        <path
          d="M22,10.4c-0.1,0-0.3,0-0.4,0c-1.5,0-2.9-0.7-3.7-2v6.8c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5l0,0c0.1,0,0.2,0,0.3,0v2.5
                        c-0.1,0-0.2,0-0.3,0c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.7-1.1,2.7-2.5l0-11.5H18c0.2,2.1,1.9,3.8,4,3.9L22,10.4"
        ></path>
      </svg>
    </ng-container>

    <ng-container #youtube *ngIf="icon === 'youtube'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 30 24"
        xml:space="preserve"
        fill="#fff"
      >
        <path
          d="M26.15 16.54c0 0-0.22 1.57-0.9 2.26c-0.87 0.91-1.84 0.91-2.28 0.96C19.78 20 15 20 15 20 s-5.91-0.05-7.74-0.23c-0.51-0.09-1.64-0.07-2.51-0.97c-0.68-0.69-0.91-2.26-0.91-2.26s-0.23-1.84-0.23-3.68v-1.73 c0-1.84 0.23-3.68 0.23-3.68s0.22-1.57 0.91-2.26c0.87-0.91 1.83-0.91 2.28-0.96C10.22 4 15 4 15 4H15c0 0 4.8 0 8 0.2 c0.44 0.1 1.4 0.1 2.3 0.96c0.68 0.7 0.9 2.3 0.9 2.26s0.23 1.8 0.2 3.68v1.73C26.38 14.7 26.1 16.5 26.1 16.54z M12.65 8.56l0 6.39l6.15-3.18L12.65 8.56z"
        ></path>
      </svg>
    </ng-container>
  `,
})
export class SvgComponent {
  @Input() icon!: string;
  constructor() {}
}
