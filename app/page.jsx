"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";

const timelineConfig = [
  {
    title: "स्टेज्ड शॉट",
    text:
      "नेहा ने स्नाइपर की लाइन-ऑफ-साइट को बदलने के लिए आदित्य को गिराने का नाटक किया। गोली का फेक्ड ब्लड पैक और विशेष जैकेट पहले से तैयार था।"
  },
  {
    title: "क्लीन-अप टीम",
    text:
      "फर्जी एजेंट के आने से स्नाइपर का भरोसा बना रहा। लेकिन जैसे ही 'लाश' उठी, नेहा ने पलटवार का मौका छीन लिया।"
  },
  {
    title: "काउंटर-स्ट्राइक",
    text:
      "नेहा ने स्नाइपर को अपनी स्थिति से बाहर निकालकर वी-लाइन अटैक किया। दो शॉट, एक सेकंड— मिशन कम्प्लीट।"
  },
  {
    title: "रीग्रुप सिग्नल",
    text:
      "जैसे ही धमकी खत्म हुई, आदित्य ने नैनो-कॉम्स के जरिए 'फीनिक्स' कोड भेजा— यही था उनके जीवित होने का संकेत।"
  }
];

const dossier = [
  {
    title: "छलावा जैकेट",
    meta: "Field Tech",
    detail:
      "कार्बन-फाइबर प्लेट्स और प्रेशर-ट्रिगर्ड ब्लड कैप्सूल्स से बना, जिससे गोली लगने का भ्रम पैदा हुआ और स्नाइपर का ध्यान भटका।"
  },
  {
    title: "साइलेंट कोड",
    meta: "Comms",
    detail:
      "आदित्य के माइक्रो-इयरपीस ने थ्री-टैप सिग्नल भेजा— 'हिट ओके, स्टेज टू'— जिसे सिर्फ नेहा ने सुना।"
  },
  {
    title: "रैपलिंग कार",
    meta: "Logistics",
    detail:
      "जो महिला आई थी वह असली एजेंट नहीं, बल्कि प्लांटेड ऑपरेटिव थी। कार की ट्रंक में दूसरा सूट और मेडिकल किट छिपा था।"
  },
  {
    title: "स्नाइपर की आदतें",
    meta: "Intel",
    detail:
      "रीकॉन डेटा से साफ था कि स्नाइपर हमेशा शॉट से पहले दूसरी टीम की पुष्टि का इंतजार करता है। नेहा ने उसी टाइमिंग का फायदा लिया।"
  }
];

const chapters = [
  {
    marker: "एपिसोड 01",
    icon: "01",
    title: "जब सब कुछ उल्टा हुआ",
    body:
      "नेहा का हाथ जैसे ही आदित्य के कंधे के पास गया, आसपास की हवा थम सी गई। अगले पल गोली चली, आदित्य गिर पड़ा। भीड़ की सांसें थम गईं, लेकिन नेहा का चेहरा जरा भी नहीं बदला। वह जानती थी कि चंद सेकंड में असली खेल शुरू होने वाला है।"
  },
  {
    marker: "एपिसोड 02",
    icon: "02",
    title: "सील्ड बैग और उलटा जाल",
    body:
      "सील्ड बैग के साथ आई महिला तेज़ थी, पर नेहा उससे भी तेज़ निकली। उसने एक ही मूव में उसकी गन छीनी, बिना आवाज़ के उसे डाउन किया। उसी शॉट से छिपा स्नाइपर सतर्क हो गया— यही नेहा चाहती थी।"
  },
  {
    marker: "एपिसोड 03",
    icon: "03",
    title: "स्नाइपर बनाम शूटर क्वीन",
    body:
      "ऊपर बिल्डिंग की छत पर बैठे स्नाइपर को लगा कि उसने सब संभाल रखा है। लेकिन नेहा की रणनीति ने उसे खुले में ला दिया। ठीक जैसे ही वो निशाना साध रहा था, नेहा उसके सामने भीड़ की तरह प्रकट हुई— और एक बुलेट से खेल खत्म।"
  },
  {
    marker: "एपिसोड 04",
    icon: "04",
    title: "फीनिक्स सिग्नल",
    body:
      "नेहा जब पलटी, आहत दिख रहे आदित्य ने आंखें खोल दीं। उनका मिशन पूरा हो चुका था। उन्होंने हथेली पर उंगलियों से तीन टैप किए— यही था फीनिक्स सिग्नल, जो बताता था कि दोनों जीवित हैं और प्लान सफल हुआ।"
  }
];

export default function Page() {
  const [activeIntel, setActiveIntel] = useState(0);

  const signalStatus = useMemo(
    () => [
      { label: "फेज़ 01", status: "Executed", risk: "2%" },
      { label: "फेज़ 02", status: "Adapted", risk: "12%" },
      { label: "फेज़ 03", status: "Critical", risk: "27%" },
      { label: "फीनिक्स", status: "Delivered", risk: "<1%" }
    ],
    []
  );

  return (
    <>
      <div className="backdrop-orbs">
        <span className="orb-1" />
        <span className="orb-2" />
        <span className="orb-3" />
      </div>
      <main>
        <section className="frame hero">
          <div className="hero-heading">
            <span className="tagline">ओपरेशन फीनिक्स</span>
            <h1 className="title">नेहा का परफेक्ट प्लान</h1>
            <p className="subtitle">
              गोलियों की गूंज, छिपे हुए नजरें और अनकहा भरोसा— यह कहानी है एक
              ऐसे प्लान की जिसने मौत को भी धोखा दे दिया। नेहा और आदित्य का
              मिशन आपकी स्क्रीन पर एक सिनेमैटिक अनुभव बनकर जीवंत होता है।
            </p>
          </div>
        </section>

        <section className="frame grid">
          {dossier.map((item, index) => (
            <article
              key={item.title}
              onMouseEnter={() => setActiveIntel(index)}
              onFocus={() => setActiveIntel(index)}
              tabIndex={0}
              className={clsx("card", {
                "card-active": index === activeIntel
              })}
            >
              <div className="card-meta">{item.meta}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="frame chapter">
          <div className="chapter-indicator">
            <span className="chapter-icon">Ξ</span>
            ऑपरेशन लॉग
          </div>
          <div className="split">
            <div>
              <h2>हर मोड़ पर एक नया ट्विस्ट</h2>
              <p>
                नेहा को पता था कि स्नाइपर के सामने सीधा जाना मौत को बुलावा देना
                है। इसलिए उसने अपने सबसे प्यारे इंसान को ‘गिरा’ कर खेल बदला।
                यह सिर्फ अभिनय नहीं, बल्कि बुलेट और भरोसे के बीच की साझी रणनीति
                थी।
              </p>
            </div>
            <div className="overlay-card">
              <div className="badge">
                <span className="badge-dot" />
                रियल टाइम डेटा
              </div>
              <div className="timeline">
                {signalStatus.map((signal) => (
                  <div className="timeline-item" key={signal.label}>
                    <div className="timeline-title">{signal.label}</div>
                    <div className="timeline-text">
                      स्टेटस: {signal.status} · रिस्क: {signal.risk}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {chapters.map((chapter) => (
          <section className="frame chapter" key={chapter.marker}>
            <div className="chapter-indicator">
              <span className="chapter-icon">{chapter.icon}</span>
              {chapter.marker}
            </div>
            <h2>{chapter.title}</h2>
            <p>{chapter.body}</p>
          </section>
        ))}

        <section className="frame chapter">
          <div className="chapter-indicator">
            <span className="chapter-icon">⚡</span>
            मिशन पल्स
          </div>
          <h2>श्रापित गोली या सुनियोजित भ्रम?</h2>
          <p>
            जब सायरन बज रहे थे और हर आंख उन्हें तलाश रही थी, नेहा ने स्नाइपर को
            ठीक उसी क्षण पकड़ा जब वह अपनी पोज़िशन बदल रहा था। यह प्लान सिर्फ
            एजेंसी के लिए नहीं, बल्कि उनके उस भविष्य के लिए था जिसमें भय नहीं,
            भरोसा थामे रहता है।
          </p>
          <div className="signal">
            <span className="signal-dot" />
            <div>
              <strong>ऑप्स चैनल · फीनिक्स ऑनलाइन</strong>
              <div>“लक्ष्य एलिमिनेटेड। टीम सेफ। एक्सट्रैक्शन शुरू करो।”</div>
            </div>
          </div>
        </section>

        <section className="frame cta">
          <h3>मिशन फिर से जीना चाहते हैं?</h3>
          <p>
            नेहा और आदित्य की यह कहानी उसी शहर में फिर गूंजेगी जहां भरोसा भी
            हथियार बन जाता है। तैयार रहिए— अगला ऑपरेशन जल्द ही आपके सामने होगा।
          </p>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
          >
            टॉप पर लौटें
          </button>
        </section>
      </main>
    </>
  );
}
