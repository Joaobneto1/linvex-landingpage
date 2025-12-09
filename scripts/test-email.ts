import { Resend } from 'resend';

async function main() {
  const resend = new Resend('re_59KmR2ki_HAGvs6MuvH56ynY1bPviGsMN');

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'muriloalbuquerquemartins@gmail.com',
      subject: 'Teste direto Resend (dev)',
      html: '<p>Teste local de envio usando <strong>Resend</strong>.</p>',
    });

    if (error) {
      console.error('Erro ao enviar e-mail de teste:', error);
      process.exit(1);
    }

    console.log('E-mail enviado com sucesso:', data);
    process.exit(0);
  } catch (err) {
    console.error('Erro inesperado:', err);
    process.exit(1);
  }
}

main();

