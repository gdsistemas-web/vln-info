import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Informe seu nome.").max(120),
    company: z.string().max(120).optional().or(z.literal("")),
    email: z.string().email("Informe um e-mail válido.").max(160),
    phone: z.string().min(10, "Informe um telefone válido.").max(20),
    city: z.string().max(100).optional().or(z.literal("")),
    state: z.string().max(2).optional().or(z.literal("")),
    service: z.string().min(2, "Selecione um servico."),
    message: z.string().min(12, "Escreva uma mensagem com mais detalhes.").max(2000),
    privacy: z.boolean().refine((value) => value, "Aceite a Política de Privacidade para continuar."),
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .strict();

export type ContactPayload = z.infer<typeof contactSchema>;
