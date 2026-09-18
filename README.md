# Michael Holley

Overall, my intention was to build a portfolio website that showcased my skills and expertise as a developer, while also creating a great user experience and promoting my personal brand. By using the latest web development technologies and creating visually appealing and interactive elements, I hoped to make a strong impression on potential clients and employers.

[Open](https://michaelholley.de)

## Install

`pnpm install`

## Run

`pnpm dev`

## Build

`pnpm build`

## Analytics

Tracking runs via a self-hosted [Umami](https://umami.is/) instance. The tracker is restricted to the
production domains via `data-domains`, so local and preview traffic is never counted. Core Web Vitals
(LCP, INP, CLS, FCP, TTFB) are collected via `data-performance`.

Custom events are declared and typed in `src/lib/analytics/umami.ts`:

| Event                | Data                                             | Fired when                              |
| -------------------- | ------------------------------------------------ | --------------------------------------- |
| `contact-click`      | `location: header \| footer`                     | Mail link clicked                       |
| `social-click`       | `network: github \| linkedin`, `location`        | Social link clicked                     |
| `project-open`       | `project`                                        | Project card clicked                    |
| `project-link-click` | `project`, `target: demo \| github`              | Outbound link on a project page clicked |
| `blog-open`          | `blog`, `location: blogs-section \| blogs-index` | Article opened from a list              |
| `blog-index-open`    | `location: blogs-section`                        | "Alle Artikel" clicked                  |
| `section-view`       | `section: dev \| experience \| projects \| blog` | Homepage section scrolled into view     |
| `article-read`       | `blog`                                           | End of an article reached               |

To keep your own visits out of the data, run this once per browser on the production domain:

```javascript
localStorage.setItem('umami.disabled', 1);
```

## Strapi

I am using [strapi](https://strapi.io/) as a CMS to feed content, which can be setup locally and configred via the `env` file arguments.
