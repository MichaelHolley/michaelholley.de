# Wie du deine Web-App installierst

## Deine Web-App installierbar machen: `manifest.json`

Willst du deiner Webanwendung ein nativeres Gefühl verleihen und sie direkt vom Desktop oder Homescreen aus startbar machen? Der Schlüssel dazu ist eine kleine Konfigurationsdatei: `manifest.json`.

Hier ist ein minimales Beispiel (anhand einer meiner Web-Anwendungen "Tshopper") das alles Nötige enthält, um deine Seite in Chrome installierbar zu machen:

```json
{
  "name": "Tshopper",
  "short_name": "Tshopper",
  "start_url": "/",
  "display": "standalone",
  "background_color": "oklch(20.8% 0.042 265.755)",
  "icons": [
    {
      "src": "/icon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

### Was bedeuten diese Zeilen?

- `name` **&** `short_name`: Definiert den Namen deiner App, der bei der Installation und auf dem Homescreen angezeigt wird.

- `start_url`: Legt die Startseite fest, die beim Öffnen der App geladen wird. `/` verweist auf das Stammverzeichnis deiner Domain.

- `display: "standalone"`: Das ist der entscheidende Punkt. `standalone` sorgt dafür, dass die App in einem eigenen Fenster ohne Browser-UI (Adressleiste, etc.) geöffnet wird – genau wie eine native Anwendung.

- `background_color`: Bestimmt die Hintergrundfarbe für den Ladebildschirm (Splash Screen), der kurz angezeigt wird, während die App startet. Die Verwendung des modernen `oklch()`-Farbraums ist hier ein nettes Detail.

- `icons`: Definiert das App-Icon. Ein Vektor-Icon (`.svg`) mit `sizes: "any"` ist die effizienteste Lösung, da es auf jede Größe skaliert werden kann.

### Wie wird's eingebunden?

Damit der Browser dein Manifest findet, füge einfach folgenden Link-Tag in den `<head>` deiner HTML-Datei ein:

```html
<link rel="manifest" href="/manifest.json" />
```

Das war's schon! Mit dieser einfachen JSON-Datei und einer einzigen Zeile HTML erkennt Chrome deine Seite als installierbare App und bietet Nutzern die Möglichkeit, sie direkt auf ihrem Gerät zu speichern.

## Feinschliff: Metadaten und Nutzererlebnis

Eine installierbare App ist der erste Schritt. Im nächsten Schritt verfeinern wir das Manifest mit Metadaten, die das Nutzererlebnis weiter verbessern und die App für ein breiteres Publikum zugänglich machen.

Diese Konfiguration fügt wichtige kontextbezogene Informationen hinzu:

```json
{
  "name": "Tshopper",
  "short_name": "Tshopper",
  "description": "Shopping list app",
  "start_url": "/",
  "display": "standalone",
  "background_color": "oklch(20.8% 0.042 265.755)",
  "theme_color": "oklch(79.2% 0.209 151.711)",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ],
  "lang": "en-US",
  "dir": "ltr"
}
```

### Die neuen Eigenschaften im Detail

- `description`: Eine kurze Beschreibung deiner App. Diese Information kann in Installationsaufforderungen oder PWA-Stores angezeigt werden und verbessert die Auffindbarkeit.

- `orientation`: Hiermit erzwingst du eine bestimmte Bildschirmausrichtung. `portrait-primary` sperrt die App im Hochformat. Das ist ideal für Anwendungen wie eine Einkaufsliste, die für eine vertikale Ansicht optimiert sind.

- `lang` **&** `dir`: Diese Felder sind entscheidend für die Internationalisierung (i18n) und Barrierefreiheit.

  - `lang` definiert die Hauptsprache der App (hier: US-Englisch).

  - `dir` legt die Textrichtung fest (`ltr` = left-to-right). Dies hilft assistiven Technologien und Browsern, deine Inhalte korrekt darzustellen.

Durch das Hinzufügen dieser Metadaten wird deine PWA nicht nur funktionaler, sondern auch zugänglicher und für ein globales Publikum besser vorbereitet.
