import { handleContact } from "./_contact-core";

// Endpoint serverless (Vercel-style): POST /api/contact
// Tipagem mínima para não depender de @vercel/node.
interface ApiRequest {
  method?: string;
  body?: unknown;
}
interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ message: "Método não permitido." });
    return;
  }

  // Em alguns runtimes o body chega como string.
  let payload: unknown = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      payload = {};
    }
  }

  const result = await handleContact(payload);
  res.status(result.status).json(result.body);
}
