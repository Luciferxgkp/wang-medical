import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acupuncture - Wang Medical",
  description: "Acupuncture - Wang Medical",
};

const Acupuncture = () => {
  return (
    <div className="w-full px-4 md:px-16">
      <Header header="Acupuncture" />
      <div className="grid grid-cols-1 md:grid-cols-1 p-4 mt-20 gap-20">
        <div className="w-full text-primary flex flex-col gap-10">
          <h2 className="text-2xl tracking-tight">What Is Acupuncture?</h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              Acupuncture is an effective form of medical treatment that has
              evolved into a complete holistic health care system. Practitioners
              of acupuncture and Chinese medicine have used this noninvasive
              treatment method to help millions of people become well and stay
              well.
            </p>
            <p>
              Acupuncture promotes natural healing. It can enhance recuperative
              power and immunity, support physical and emotional health, and
              improve overall function and well-being. It is a safe, painless
              and effective way to treat a wide variety of medical problems.
            </p>
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10">
          <h2 className="text-2xl tracking-tight">What is Qi?</h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              {` At the core of this ancient medicine is the philosophy that Qi
              (pronounced “chee”), or vital energy, flows throughout the body.
              Qi animates the body and protects it from illness, pain and
              disease. A person's health is influenced by the quality, quantity
              and balance of Qi.`}
            </p>
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10">
          <h2 className="text-2xl tracking-tight">How does Qi move?</h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              Qi flows through specific pathways called meridians. There are
              fourteen main meridians inside the body. The diagram to the left
              shows the meridian pathways in the body. Each of these is
              connected to specific organs and glands.
            </p>
            <p>
              Meridian pathways are like rivers flowing inside the body. Where a
              river flows, it transports life-giving water that provides
              nourishment to the land, plants and people. Similarly, where
              meridian pathways flow, they bring life-giving Qi that provides
              nourishment to every cell, organ, gland, tissue and muscle in the
              body.
            </p>
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10">
          <h2 className="text-2xl tracking-tight">How is Qi disrupted?</h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              {` An obstruction to the flow of Qi is like a dam. When Qi becomes
              backed up in one part of the body, the flow becomes restricted in
              other parts. This blockage of the flow of Qi can be detrimental to
              a person's health, cutting off vital nourishment to the body,
              organs and glands.`}
            </p>
            <p>
              Physical and emotional trauma, stress, lack of exercise,
              overexertion, seasonal changes, poor diet, accidents, or excessive
              activity are among the many things that can influence the quality,
              quantity and balance of Qi.
            </p>
            <p>
              Normally, when a blockage or imbalance occurs, the body easily
              bounces back, returning to a state of health and well-being.
              However, when this disruption is prolonged or excessive, or if the
              body is in a weakened state, illness, pain, or disease can set in.
            </p>
          </div>
        </div>
        <div className="w-full text-primary flex flex-col gap-10">
          <h2 className="text-2xl tracking-tight">
            What does an acupuncturist do?
          </h2>
          <div className="tracking-tight font-light text-lg flex flex-col gap-4">
            <p>
              During the initial exam a full health history is taken. Questions
              are asked regarding health, symptoms and lifestyle. An appropriate
              physical exam is conducted, including pulse and tongue diagnosis.
            </p>
            <p>
              {` Gathering this information enables the practitioner to effectively
              diagnose and detect any specific imbalances of Qi that may have
              contributed to a person's health problems. The practitioner can
              then create a well-structured treatment plan.`}
            </p>
            <p>
              {`Once the imbalances of Qi are detected, an acupuncturist will
              place fine, sterile needles at specific acupoints along meridian
              pathways. This safe and painless insertion of the needles can
              unblock the obstruction and balance Qi where it has become
              unbalanced. Once this is done, Qi can freely circulate throughout
              the body, providing adequate nourishment to cells, organs, glands,
              tissues and muscles. This can eliminate pain and restore balance
              and harmony, as well as the body's ability to heal
              itself—ultimately leading to optimal health and well-being.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acupuncture;
