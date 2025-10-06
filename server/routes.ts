import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Stripe from "stripe";
import { partnerFormSchema, contactFormSchema } from "@shared/schema";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Partner contact form endpoint
  app.post("/api/partner-contact", async (req, res) => {
    try {
      const validatedData = partnerFormSchema.parse(req.body);
      
      console.log("Partner contact form submitted:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso!" 
      });
    } catch (error: any) {
      console.error("Partner form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Erro ao processar formulário" 
      });
    }
  });

  // General contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("Contact form submitted:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso!" 
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Erro ao processar formulário" 
      });
    }
  });

  // Stripe payment intent endpoint for one-time donations
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount } = req.body;
      
      if (!amount || amount < 1) {
        return res.status(400).json({ 
          message: "Valor inválido" 
        });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "brl",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Stripe payment error:", error);
      res.status(500).json({ 
        message: "Erro ao criar intenção de pagamento: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
