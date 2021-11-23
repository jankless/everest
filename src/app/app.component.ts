import { Component } from "@angular/core";

@Component({
  selector: "body",
  template: `
    <main>
      <picture>
        <source
          [srcset]="img.sources.webp.src"
          [type]="img.sources.webp.type"
        />
        <source [srcset]="img.sources.png.src" [type]="img.sources.png.type" />
        <img [src]="img.sources.png.src" [width]="img.width" [alt]="img.alt" />
      </picture>

      <p>
        {{ p.content }}
      </p>

      <video controls [width]="video.width" [poster]="video.poster">
        <source
          [src]="video.sources.webm.src"
          [type]="video.sources.webm.type"
        />
        <source [src]="video.sources.mp4.src" [type]="video.sources.mp4.type" />
        {{ video.content }}
      </video>

      <a [href]="a.href" [target]="a.target">{{ a.content }}</a>
    </main>
  `,
})
export class AppComponent {
  pageData = {
    seo: {
      title: "Everest 2021",
      description:
        "Ullam laboriosam obcaecati dolorum illum aut quam vitae maxime tenetur explicabo ipsa voluptates quisquam est sit similique, ab rem, eveniet, placeat iusto?",
    },
    img: {
      width: 320,
      alt: "Mike Posner branded Everest Guided Tour logo",
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
      content:
        "Trek to the base camp of Mt. Everest, the world’s highest mountain, personally guided by me and my coach Dr. Jon Kedrowski.",
    },
    video: {
      width: 640,
      poster: "assets/poster.png",
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
      content: "Sign Up",
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
}
