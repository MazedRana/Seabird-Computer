// Email sending utility using Supabase Edge Function
import { supabase } from "@/integrations/supabase/client";

interface EmailData {
  formType: 'contact' | 'connection';
  name: string;
  phone: string;
  email?: string;
  message?: string;
  nid?: string;
  address?: string;
  package?: string;
  billingDate?: string;
  additionalInfo?: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    console.log('Attempting to send email via Supabase function...', { formType: data.formType, name: data.name });
    
    // Use Supabase Edge Function for reliable email delivery
    const { error } = await supabase.functions.invoke("resend-email", {
      body: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        nid: data.nid,
        address: data.address,
        package: data.package,
        billingDate: data.billingDate,
        additionalInfo: data.additionalInfo,
        formType: data.formType,
      },
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw error;
    }

    console.log('Email sent successfully via Supabase function');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}
