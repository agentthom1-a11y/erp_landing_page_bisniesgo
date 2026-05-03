import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, perusahaan, email, whatsapp, tanggal, waktu, modul, pesan } = body;

    // Validate required fields
    if (!nama || !perusahaan || !email || !whatsapp) {
      return NextResponse.json(
        { success: false, message: 'Field wajib tidak boleh kosong.' },
        { status: 400 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const modulList = Array.isArray(modul) && modul.length > 0
      ? modul.join(', ')
      : 'Belum ditentukan';

    const jadwal = tanggal
      ? `${tanggal}${waktu ? ' pukul ' + waktu : ''}`
      : 'Fleksibel (tim kami akan menghubungi untuk konfirmasi)';

    // Email to internal team (erp@bisnies.id)
    const internalMailOptions = {
      from: `"SINAR ERP Website" <${process.env.SMTP_USER}>`,
      to: 'erp@bisnies.id',
      subject: `🔔 Permintaan Demo Baru: ${perusahaan} - ${nama}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #0f1117; color: #ffffff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #1a1d27; border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #98D600, #7ab800); padding: 32px; text-align: center; }
            .header h1 { color: #0f1117; font-size: 24px; font-weight: 900; margin: 0; }
            .header p { color: #0f1117; opacity: 0.8; margin: 8px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .badge { display: inline-block; background: #98D600; color: #0f1117; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 100px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; }
            .field:last-child { border-bottom: none; }
            .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #98D600; margin-bottom: 6px; }
            .field-value { font-size: 16px; color: #ffffff; font-weight: 500; }
            .footer { background: #0f1117; padding: 24px 32px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); }
            .cta { margin: 24px 0; text-align: center; }
            .cta a { display: inline-block; background: #98D600; color: #0f1117; padding: 14px 32px; border-radius: 100px; font-weight: 700; font-size: 14px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 Permintaan Demo Baru</h1>
              <p>SINAR ERP — Custom ERP System</p>
            </div>
            <div class="body">
              <span class="badge">🔔 Lead Baru Masuk</span>
              
              <div class="field">
                <div class="field-label">Nama Lengkap</div>
                <div class="field-value">${nama}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Perusahaan</div>
                <div class="field-value">${perusahaan}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #98D600;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">No. WhatsApp</div>
                <div class="field-value"><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #98D600;">${whatsapp}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Jadwal Demo yang Diinginkan</div>
                <div class="field-value">${jadwal}</div>
              </div>

              <div class="field">
                <div class="field-label">Modul ERP yang Diminati</div>
                <div class="field-value">${modulList}</div>
              </div>
              
              ${pesan ? `
              <div class="field">
                <div class="field-label">Catatan / Pesan</div>
                <div class="field-value">${pesan}</div>
              </div>
              ` : ''}
              
              <div class="cta">
                <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}">💬 Hubungi via WhatsApp</a>
              </div>
            </div>
            <div class="footer">
              Dikirim otomatis dari SINAR ERP Landing Page • ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to the prospect
    const confirmationMailOptions = {
      from: `"SINAR ERP" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `✅ Permintaan Demo Anda Telah Diterima — SINAR ERP`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #f5f5f5; color: #1a1a1a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0f1117, #1a1d27); padding: 40px 32px; text-align: center; }
            .logo { font-size: 28px; font-weight: 900; color: #98D600; margin-bottom: 8px; }
            .header p { color: rgba(255,255,255,0.6); font-size: 14px; margin: 0; }
            .body { padding: 40px 32px; }
            .greeting { font-size: 22px; font-weight: 700; color: #0f1117; margin-bottom: 16px; }
            .text { color: #555; font-size: 15px; line-height: 1.7; margin-bottom: 16px; }
            .summary-box { background: #f8fff0; border: 1px solid #98D600; border-radius: 12px; padding: 24px; margin: 24px 0; }
            .summary-box h3 { margin: 0 0 16px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #5a8200; }
            .summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.06); font-size: 14px; }
            .summary-row:last-child { border-bottom: none; }
            .summary-label { color: #888; font-weight: 500; }
            .summary-value { color: #0f1117; font-weight: 600; text-align: right; max-width: 60%; }
            .cta-section { text-align: center; margin: 32px 0; }
            .cta-btn { display: inline-block; background: #98D600; color: #0f1117; padding: 16px 36px; border-radius: 100px; font-weight: 700; font-size: 15px; text-decoration: none; }
            .highlight { color: #5a8200; font-weight: 700; }
            .footer { background: #f8f8f8; padding: 24px 32px; text-align: center; font-size: 12px; color: #aaa; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">SINAR ERP</div>
              <p>Custom ERP System by Bisniesgo</p>
            </div>
            <div class="body">
              <div class="greeting">Halo, ${nama}! 👋</div>
              
              <p class="text">
                Terima kasih telah menghubungi kami. Permintaan demo SINAR ERP untuk <span class="highlight">${perusahaan}</span> telah berhasil kami terima.
              </p>
              
              <p class="text">
                Tim ahli kami akan segera menghubungi Anda dalam <span class="highlight">1×24 jam kerja</span> untuk mengkonfirmasi jadwal dan menyiapkan sesi demo yang dipersonalisasi sesuai kebutuhan bisnis Anda.
              </p>
              
              <div class="summary-box">
                <h3>📋 Ringkasan Permintaan Anda</h3>
                <div class="summary-row">
                  <span class="summary-label">Nama</span>
                  <span class="summary-value">${nama}</span>
                </div>
                <div class="summary-row">
                  <span class="summary-label">Perusahaan</span>
                  <span class="summary-value">${perusahaan}</span>
                </div>
                <div class="summary-row">
                  <span class="summary-label">Jadwal Demo</span>
                  <span class="summary-value">${jadwal}</span>
                </div>
                <div class="summary-row">
                  <span class="summary-label">Modul Diminati</span>
                  <span class="summary-value">${modulList}</span>
                </div>
              </div>
              
              <p class="text">
                Pertanyaan? Hubungi langsung tim kami:
              </p>
              
              <div class="cta-section">
                <a href="mailto:erp@bisnies.id" class="cta-btn">📧 erp@bisnies.id</a>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} Bisniesgo — SINAR ERP &nbsp;|&nbsp; <a href="https://sinar-erp.bisniesgo.cloud" style="color: #98D600; text-decoration: none;">sinar-erp.bisniesgo.cloud</a>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(internalMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { success: true, message: 'Demo berhasil dijadwalkan! Cek email Anda.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Demo submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal mengirim. Silakan coba lagi atau hubungi erp@bisnies.id langsung.' },
      { status: 500 }
    );
  }
}
