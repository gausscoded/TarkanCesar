// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Welcome to Top Service Cesar',
      subtitle: "Your reliable partner for car rental, temporary work, and personnel placement in Berlin.",
      contact: 'Contact Us',
      home: 'Home',
      about: 'About Us',
      aboutPage: {
        title: 'About Us',
        subtitle: 'Learn more about our company',
        description: 'Top Service Cesar Services is an owner-managed company that specializes in professional personnel placement with passion and expertise. Since our founding, we have pursued one central goal: to connect companies and qualified workers precisely, efficiently, and sustainably. Our focus is not only on speed and reliability, but above all on people. Our many years of experience in the industry allow us to respond with a keen sense to the complex requirements of the modern labor market. We understand the challenges companies face today, whether in times of economic dynamism, seasonal order peaks, or structural shortages of skilled workers. At the same time, we know what job seekers expect today: clarity, fairness, prospects, and a true partner at their side. What sets us apart is our personal commitment and individualized support, which goes far beyond simple placement. We invest time in personal discussions, analyze needs precisely, and specifically address the wishes and requirements of both sides. Our aim is not just to fill vacancies, but to build sustainable, long-term relationships based on equality and trust. Because we are convinced: Successful recruitment begins where people are truly understood, with their skills, goals, and stories. CVs are important, but they only tell part of the truth. We take a closer look and find exactly the personalities who are a good fit both professionally and personally. Top Service Cesar Services stands for reliability, transparency, and quality. Our customers value direct communication, short decision-making processes, and individual solutions that are perfectly tailored to their specific needs—whether its short-term support, temporary project assignments, or the permanent filling of qualified positions. Top Service Cesar Services because personnel means more than just workers. Its about values, trust, and, above all, people.',
      },
      career: 'Career',
      // contact: 'Contact',
      description: 'We provide qualified personnel for various industries and work with you to find tailored solutions.',
       address: {
        street: "Uhlandstraße 64",
        city: "10719 Berlin, Germany",
        phone: "Phone: +49 163 4914343"
      },
      careerPage: {
        title: 'Career at Top Service Cesar',
        subtitle: 'Your future starts here',
        description: 'Whether you are a career starter, an experienced professional, or looking for a new challenge – at Top Service Cesar, you will find not just a job, but real prospects. Become part of a dedicated team that recognizes and promotes your strengths.',
      },
      privacy: 'Privacy Policy',
      privacyPage: {
        title: 'Privacy Policy',
        subtitle: 'Your privacy is important to us',
        description: 'At Top Service Cesar, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, and protect your information when you visit our website or use our services. We are committed to ensuring that your privacy is protected and that your personal data is handled in accordance with applicable data protection laws.',
      },
      impressum: 'Imprint',
      impressumPage: {
        title: 'Imprint',
        subtitle: 'Legal Information about Top Service Cesar',
        description: 'Top Service Cesar. Information according to § 5 TMG, Owner: Da Cunha Pereira Da Mota, Cesar, Services is a registered company in Berlin, Germany. For more information, please contact us at the address below.',
        address: {
          street: "Uhlandstraße 64",
          city: "10719 Berlin, Germany",
          phone: "Phone: +49 163 4914343",
          email: "Email: topservicecesar@gmail.com"
        },
      },
    },
  },
  de: {
    translation: {
      title: 'Willkommen bei Top Service Cesar',
      contact: 'Kontaktiere uns',
      home: 'Startseite',
      about: 'Über uns',
      aboutPage: {
        title: 'Über uns',
        subtitle: 'Wer wir sind – Top Service Cesar Dienstleistungen',
        description: "Top Service Cesar Dienstleistungen ist ein inhabergeführtes Unternehmen, das sich mit Leidenschaft und Fachkompetenz auf die professionelle Personalvermittlung spezialisiert hat. Seit unserer Gründung verfolgen wir ein zentrales Ziel: Unternehmen und qualifizierte Arbeitskräfte passgenau, effizient und nachhaltig miteinander zu verbinden. Dabei stehen für uns nicht nur Geschwindigkeit und Zuverlässigkeit im Fokus  sondern vor allem der Mensch.Unsere langjährige Erfahrung in der Branche erlaubt es uns, mit einem feinen Gespür auf die komplexen Anforderungen des modernen Arbeitsmarktes einzugehen. Wir kennen die Herausforderungen, vor denen Unternehmen heute stehen  sei es in Zeiten wirtschaftlicher Dynamik, bei saisonalen Auftragsspitzen oder bei strukturellem Fachkräftemangel. Gleichzeitig wissen wir, was Arbeitsuchende heute erwarten: Klarheit,Fairness, Perspektiven und einen echten Partner an ihrer Seite.Was uns besonders macht, ist unser persönlicher Einsatz und die individuelle Betreuung,die weit über eine einfache Vermittlung hinausgeht. Wir investieren Zeit in persönliche Gespräche, analysieren den Bedarf genau und gehen gezielt auf die Wünsche und Anforderungen beider Seiten ein. Unser Anspruch ist es, nicht nur offene Stellen zu besetzen, sondern tragfähige und langfristige Beziehungen aufzubauen  auf Augenhöhe und mit Vertrauen.Denn wir sind überzeugt: Erfolgreiche Personalvermittlung beginnt dort, wo Menschen wirklich verstanden werden  mit ihren Fähigkeiten, Zielen und Geschichten. Lebensläufe sind wichtig, aber sie erzählen nur einen Teil der Wahrheit. Wir schauen genauer hin und finden genau die Persönlichkeiten, die fachlich und menschlich passen. Top Service Cesar Dienstleistungen steht für Verlässlichkeit, Transparenz und Qualität. Unsere Kunden schätzen die direkte Kommunikation, kurze Entscheidungswege und individuelle Lösungen, die perfekt auf ihren konkreten Bedarf zugeschnitten sind  ob es um kurzfristige Unterstützung, temporäre Projekteinsätze oder die dauerhafte Besetzung qualifizierter Positionen geht. Top Service Cesar Dienstleistungen  weil Personal mehr bedeutet als nur Arbeitskräfte. Es geht um Werte, Vertrauen  und vor allem um Menschen.",
      },

      // contact:'Kontakt',
      subtitle: "Ihr zuverlässiger Partner für Mietwagen, Leiharbeit und Personalvermittlung in Berlin.",
      description: "Wir vermitteln qualifiziertes Personal für verschiedene Branchen, analysieren gemeinsam mit Ihnen Ihren individuellen Bedarf, um passgenaue Lösungen anzubieten.",
      address: {
        street: "Uhlandstraße 64",
        city: "10719 Berlin, Deutschland",
        phone: "Telefon: +49 163 4914343"},
        career:'Karriere', 
        careerPage: {
        title: 'Karriere bei Top Service Cesar',
        subtitle: 'Ihre Zukunft beginnt hier',
        description: 'Ob Sie Berufseinsteiger*in, erfahrene Fachkraft oder auf der Suche nach einer neuen Herausforderung sind – bei Top Service Cesar Dienstleistungen finden Sie nicht nur einen Job, sondern echte Perspektiven. Werden Sie Teil eines engagierten Teams, das Ihre Stärken erkennt und fördert.',
        },
      privacy: 'Datenschutz',
      privacyPage: {
        title: 'Datenschutz',
        subtitle: 'Ihr Datenschutz ist uns wichtig',
        description: 'Bei Top Service Cesar nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen erheben, verwenden und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen. Wir verpflichten uns, sicherzustellen, dass Ihre Privatsphäre geschützt ist und dass Ihre persönlichen Daten in Übereinstimmung mit den geltenden Datenschutzgesetzen behandelt werden.',
      },
      impressum: 'Impressum',
      impressumPage: {
        title: 'Impressum',
        subtitle: 'Rechtliche Informationen zu Top Service Cesar',
        description: 'Top Service Cesar. Angaben gemäß § 5 TMG,Inhaber: Da Cunha Pereira Da Mota , Cesar, Dienstleistungen ist ein eingetragenes  Unternehmen in Berlin, Deutschland. Für weitere Informationen kontaktieren Sie uns bitte unter der unten angegebenen Adresse.',
        address: {
          street: "Uhlandstraße 64",
          city: "10719 Berlin, Deutschland",
          phone: "Telefon: +49 163 4914343",
          email: "E-Mail:topservicecesar@gmail.com"
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
