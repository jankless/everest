import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "main",
  template: `
    <picture>
      <source [srcset]="img.sources.webp.src" [type]="img.sources.webp.type" />
      <source [srcset]="img.sources.png.src" [type]="img.sources.png.type" />
      <img
        [src]="img.sources.png.src"
        [width]="img.width"
        [height]="img.height"
        [alt]="img.alt"
      />
    </picture>

    <p>
      <ng-container *ngFor="let c of p.content">
        <span>
          {{ c }}
        </span>
        <br />
      </ng-container>
    </p>

    <a class="apply" [href]="a.href" [target]="a.target">{{ a.content }}</a>

    <dialog mp focusTrap>
      <video controls [width]="video.width" [poster]="video.poster">
        <source
          [src]="video.sources.webm.src"
          [type]="video.sources.webm.type"
        />
        <source [src]="video.sources.mp4.src" [type]="video.sources.mp4.type" />
        {{ video.content }}
      </video>
    </dialog>

    <video controls [width]="video.width" [poster]="video.poster">
      <source [src]="video.sources.webm.src" [type]="video.sources.webm.type" />
      <source [src]="video.sources.mp4.src" [type]="video.sources.mp4.type" />
      {{ video.content }}
    </video>

    <menu class="social">
      <ng-container *ngFor="let link of social | keyvalue">
        <a [href]="link.value.href" [target]="'_blank'">
          <svg [icon]="link.value.icon" [style.width]="link.value.width"></svg>
        </a>
      </ng-container>
    </menu>
  `,
})
export class AppComponent {
  pageData = {
    seo: {
      title: "Everest 2021",
      description:
        "Trek to the base camp of Mt. Everest, the world’s highest mountain, personally guided by me and my coach Dr. Jon Kedrowski.",
    },
    img: {
      width: 320,
      height: 320,
      alt: "Trek To Everest Base Camp",
      sources: {
        webp: {
          src: "assets/trek-to-everest.webp",
          type: "image/webp",
        },
        png: {
          src: "assets/trek-to-everest.png",
          type: "image/png",
        },
      },
    },
    p: {
      content: [
        "Trek to the base camp of Mt. Everest, ",
        "the world’s highest mountain, personally guided ",
        "by me and my coach Dr. Jon Kedrowski.",
      ],
    },
    video: {
      width: 640,
      poster: "assets/cropped-poster.webp",
      sources: {
        webm: {
          src: "assets/trek-to-everest.webm",
          type: "video/webm",
        },
        mp4: {
          src: "assets/trek-to-everest.mp4",
          type: "video/mp4",
        },
      },
      content: "Sorry, your browser doesn't support embedded videos.",
    },
    a: {
      href: "https://gmfye3cd6yq.typeform.com/to/mggMEVxH",
      target: "_blank",
      content: "Apply",
    },
    social: {
      twitter: {
        href: "http://www.twitter.com/mikeposner",
        icon: "twitter",
        width: 24,
      },
      facebook: {
        href: "http://www.facebook.com/therealmikeposner",
        icon: "facebook",
        width: 24,
      },
      instagram: {
        href: "http://www.instagram.com/mikeposner",
        icon: "instagram",
        width: 24,
      },
      tiktok: {
        href: "http://www.tiktok.com/@mikeposner",
        icon: "tiktok",
        width: 24,
      },
      youtube: {
        href: "http://www.youtube.com/mikeposner",
        icon: "youtube",
        width: 24,
      },
    },
  };

  get seo() {
    return this.pageData.seo;
  }

  get img() {
    return this.pageData.img;
  }
  get p() {
    return this.pageData.p;
  }
  get video() {
    return this.pageData.video;
  }
  get a() {
    return this.pageData.a;
  }
  get social() {
    return this.pageData.social;
  }
}
