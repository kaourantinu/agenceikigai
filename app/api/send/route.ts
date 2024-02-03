import { EmailTemplate } from '../../components/email-templates/contact-mail';
import { Resend } from 'resend';

const resend = new Resend('re_imDttUk7_Pq8ekrtwioiwVgz7nhHPiitQ');

export async function POST(request: any) {
  try {
    const formData = request.json();

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['corentin.tournier@ikigaifreelance'],
      subject: `${formData.subject}`,
      react: EmailTemplate({ firstName: `${formData.firstName}` }),
      text: 'coucou'
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
