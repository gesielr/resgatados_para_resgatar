import { z } from "zod";

export const partnerFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export const newsletterSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

export const donationSchema = z.object({
  amount: z.number().min(1, "Valor deve ser maior que R$ 0"),
  frequency: z.enum(["once", "monthly", "quarterly", "annual"]),
  paymentMethod: z.enum(["pix", "card"]),
});

export type PartnerForm = z.infer<typeof partnerFormSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type NewsletterForm = z.infer<typeof newsletterSchema>;
export type DonationForm = z.infer<typeof donationSchema>;

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "rescue" | "worship" | "partnership" | "community";
  image: string;
  fullDescription: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  type: "church" | "company" | "therapeutic-center";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}
