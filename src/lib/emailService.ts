// Email service using EmailJS
// You'll need to sign up at https://www.emailjs.com/ and get your credentials

interface EmailData {
  to_email: string;
  from_name: string;
  from_phone: string;
  from_email?: string;
  message?: string;
  address?: string;
  package?: string;
  additionalInfo?: string;
  formType: 'contact' | 'connection';
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Using EmailJS public API
    const serviceId = 'service_seabird'; // Replace with your EmailJS service ID
    const templateId = data.formType === 'contact' ? 'template_contact' : 'template_connection'; // Replace with your template IDs
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

    const templateParams = {
      to_email: data.to_email,
      from_name: data.from_name,
      from_phone: data.from_phone,
      from_email: data.from_email || 'Not provided',
      message: data.message || 'Not provided',
      address: data.address || 'Not provided',
      package: data.package || 'Not provided',
      additional_info: data.additionalInfo || 'Not provided',
      reply_to: data.from_email || 'noreply@seabird.com',
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};

// Alternative: Simple mailto fallback
export const sendEmailViaMailto = (data: EmailData): void => {
  const subject = data.formType === 'contact' 
    ? `Contact Form Submission from ${data.from_name}`
    : `New Connection Request from ${data.from_name}`;

  let body = `Name: ${data.from_name}\n`;
  body += `Phone: ${data.from_phone}\n`;
  if (data.from_email) body += `Email: ${data.from_email}\n`;
  
  if (data.formType === 'contact') {
    body += `\nMessage:\n${data.message || 'Not provided'}`;
  } else {
    body += `\nPackage: ${data.package || 'Not provided'}\n`;
    body += `Address: ${data.address || 'Not provided'}\n`;
    if (data.additionalInfo) body += `\nAdditional Info:\n${data.additionalInfo}`;
  }

  const mailtoLink = `mailto:${data.to_email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

// Using Web3Forms (free, no signup required for basic usage)
export const sendEmailViaWeb3Forms = async (data: EmailData): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Get free key from https://web3forms.com
    formData.append('subject', data.formType === 'contact' 
      ? `Contact Form: ${data.from_name}`
      : `New Connection Request: ${data.from_name}`
    );
    formData.append('from_name', data.from_name);
    formData.append('email', data.to_email);
    formData.append('phone', data.from_phone);
    
    if (data.from_email) formData.append('reply_to', data.from_email);
    
    if (data.formType === 'contact') {
      formData.append('message', data.message || 'Not provided');
    } else {
      formData.append('package', data.package || 'Not provided');
      formData.append('address', data.address || 'Not provided');
      formData.append('additional_info', data.additionalInfo || 'Not provided');
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Web3Forms error:', error);
    return false;
  }
};
