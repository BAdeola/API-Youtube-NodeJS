# Youtube manager.
## Description
Management of videos from the Augusto Galego YouTube channel.
This application allows users to search for videos on YouTube channel Augusto Galego, filter them by name, view details, header image. It is designed to help users easily find and manage their favorite YouTube content.

## Technologies
- Node.js
- TypeScript

## Domain
Youtube videos management.

## Features
- Search for videos on YouTube.
- List videos by channel name.
- Visualize video details.

## How

### Features:
- **Search Videos**: List videos by channel name.
The API rest will return in a Json format the name of the video, the image, and the link to the video.
```js
channel: "Augusto Galego",
videos: [
    {
        title: "Quão util REALMENTE é a IA pra programar?",
        videoId: "ixdabfKYwfA",
        thumbnail: "https://i.ytimg.com/vi/ixdabfKYwfA/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=ixdabfKYwfA",
    },
    {
        title: "OS MELHORES LIVROS DE PROGRAMAÇÃO (2025)",
        videoId: "cz_8yTzM-iY",
        thumbnail: "https://i.ytimg.com/vi/cz_8yTzM-iY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=cz_8yTzM-iY",
    },
]
```
## Software Arquiteture Idea

<img src="./Server.jpg" alt="Software Arquiteture" width="800"/>