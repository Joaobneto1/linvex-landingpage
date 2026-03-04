import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

async function createDevServer() {
  const app = express();

  // Middleware para parse JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route - Processar rotas da API antes do Vite
  app.post('/api/lead', async (req, res) => {
    try {
      // Importar handler dinamicamente
      const { default: handler } = await import('./api/lead.ts');

      // Converter Express req/res para formato Vercel
      const vercelReq = {
        method: req.method,
        body: req.body,
        headers: req.headers,
        query: req.query,
        url: req.url,
      };

      const vercelRes = {
        status: (code) => ({
          json: (data) => {
            res.status(code).json(data);
          },
        }),
        json: (data) => {
          res.json(data);
        },
      };

      await handler(vercelReq, vercelRes);
    } catch (error) {
      console.error('[Dev Server] Erro ao processar /api/lead:', error);
      res.status(500).json({
        ok: false,
        error: 'Erro interno do servidor',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  });

  // Criar servidor Vite
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  // Usar middleware do Vite para servir arquivos estáticos e SPA
  app.use(vite.middlewares);

  const port = 8080;
  app.listen(port, () => {
    console.log(`🚀 Servidor de desenvolvimento rodando em http://localhost:${port}`);
    console.log(`📧 API disponível em http://localhost:${port}/api/lead`);
    console.log(`📝 RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✅ Configurada' : '❌ Não configurada'}`);
    console.log(`📧 EMAIL_TO: ${process.env.LEAD_EMAIL || process.env.EMAIL_TO || 'limvextec@gmail.com'}`);
  });
}

createDevServer().catch(console.error);
