import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Plugin de desenvolvimento: serve POST /api/contact localmente, espelhando o
// endpoint serverless de produção (api/contact.ts) através do mesmo core.
function contactApiDevPlugin(env: Record<string, string>): Plugin {
  // Expõe as chaves do .env para o process.env do servidor de dev.
  if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  if (env.CONTACT_TO_EMAIL) process.env.CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL;

  return {
    name: "contact-api-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Método não permitido." }));
          return;
        }

        const chunks: Buffer[] = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", async () => {
          let payload: unknown = {};
          try {
            payload = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          } catch {
            payload = {};
          }

          // Import dinâmico para que o core (Node) não entre no bundle do cliente.
          const { handleContact } = await import("./api/_contact-core");
          const result = await handleContact(payload);

          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.body));
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), contactApiDevPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
