import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  metadataBase: new URL('https://doctorsai.elpisverse.com'),
  title: 'Doctors AI - Advanced AI Medical Assistant for Healthcare Professionals',
  description: 'The ultimate AI-powered medical platform for doctors, medical professionals, and students. Features AI diagnosis, SOAP notes, radiology analysis, evidence-based journals, medical podcasts, and a global healthcare community.',
  keywords: [
    'AI medical assistant',
    'medical AI',
    'AI diagnosis tool',
    'SOAP notes generator',
    'ai medical scribe',
    'Doctor AI Report Expert',
    'Doctorsai',
    'AI radiology',
    'medical journals AI',
    'healthcare AI',
    'medical chat AI',
    'doctors community',
    'clinical notes AI',
    'medical podcasts',
    'evidence based medicine',
    'anki',
    'anki flashcards',
    'AI anki medical flashcards',
    'AI symptom checker',
    'discharge summary generator',
    'medical students AI',
    'medical students app',
    'healthcare professionals app'
    
  ],
  authors: [{ name: 'Doctors AI' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://play.google.com/store/apps/details?id=com.kingrittik.doctors',
    title: 'Doctors AI - Advanced AI Medical Assistant for Healthcare Professionals',
    description: 'Transform your medical practice with AI-powered diagnosis, clinical documentation, radiology analysis, and evidence-based research. Join thousands of healthcare professionals worldwide.',
    images: [
      {
        url: 'https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors_ai.png?raw=true',
        width: 1200,
        height: 630,
        alt: 'Doctors AI Platform'
      }
    ],
    siteName: 'Doctors AI',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Doctors__AI',
    creator: '@Doctors__AI',
    title: 'Doctors AI - Advanced AI Medical Assistant for Healthcare Professionals',
    description: 'Transform your medical practice with AI-powered diagnosis, clinical documentation, radiology analysis, and evidence-based research. Join thousands of healthcare professionals worldwide.',
    images: ['https://github.com/RittikSoni/assets/blob/main/doctorsai/doctors_ai.png?raw=true'],
  },
  icons: {
    icon: 'https://github.com/RittikSoni/assets/blob/main/doctorsai/app_logo-doctors_ai.png?raw=true',
    apple: 'https://github.com/RittikSoni/assets/blob/main/doctorsai/app_logo-doctors_ai.png?raw=true',
  },
  alternates: {
    canonical: 'https://play.google.com/store/apps/details?id=com.kingrittik.doctors',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#0A4D8C',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Doctors AI",
              "operatingSystem": "Android",
              "applicationCategory": "MedicalApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "1000"
              },
              "description": "The ultimate AI-powered medical platform for doctors, medical professionals, and students. Features AI diagnosis, SOAP notes, radiology analysis, evidence-based journals, medical podcasts, and a global healthcare community.",
              "image": "https://github.com/RittikSoni/assets/blob/main/doctorsai/app_logo-doctors_ai.png?raw=true",
              "url": "https://play.google.com/store/apps/details?id=com.kingrittik.doctors",
              "author": {
                "@type": "Organization",
                "name": "Doctors AI"
              },
              "featureList": [
                "AI Medical Diagnosis",
                "SOAP Notes Generator",
                "AI Radiology Analysis",
                "Evidence-Based Medical Journals",
                "Medical Podcasts",
                "Discharge Summaries",
                "Lab Reports Analysis",
                "Surgery Reports",
                "Clinical Notes",
                "Global Doctors Community",
                "AI Symptom Checker",
                "Custom Medical Templates"
              ],
              "sameAs": [
                "https://x.com/Doctors__AI",
                "https://www.instagram.com/doctorsaiofficial/",
                "https://www.youtube.com/@DoctorsAIofficial",
                "https://www.linkedin.com/company/doctors-ai/",
                "https://discord.gg/BRv9ZfjaD2"
              ]
            })
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uzss6sz0nd");
            `
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
