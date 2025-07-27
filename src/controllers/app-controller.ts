import { IncomingMessage, ServerResponse } from 'http';

export const getListVideos = async (req: IncomingMessage, res: ServerResponse) => { 
  res.writeHead(200, { 'Content-Type': 'application/json' }); //every response should have a header and content
  res.end(
    JSON.stringify(
      [
        {
            title: "Quão util REALMENTE é a IA pra programar?",
            videoId: "ixdabfKYwfA",
        },
        {
            title: "OS MELHORES LIVROS DE PROGRAMAÇÃO (2025)",
            videoId: "cz_8yTzM-iY",
        },
      ]
    )
  );
};