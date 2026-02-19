import Footer from "components/layout/footer";
import Prose from "components/prose";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informed Medical Consent | MUSCALAR PRO",
  description:
    "Informed Medical Consent for teleconsultation services through MUSCALAR PRO.",
};

export default function InformedMedicalConsentPage() {
  const content = `
    <h1>Informed Medical Consent</h1>
    <p>Last Updated and Effective: 18.02.2026</p>

    <h2>What is Teleconsultation?</h2>
    <p>Teleconsultation is the delivery of healthcare and wellness services, including examination, consultation, diagnosis, and treatment guidance, through electronic communication technologies when you (the patient or user) are located in a different location than your healthcare provider. This includes consultations related to your use of MUSCALAR PRO dietary supplements and personalized wellness protocols.</p>

    <h2>Benefits of Using Teleconsultation</h2>
    <p>The benefits of teleconsultation include having access to medical and wellness guidance anywhere you have access to the internet—including from the comfort of your home. Teleconsultation means you don't risk exposure to illness in busy waiting rooms, and you do not have to wait several days for an in-person appointment.</p>

    <h2>Possible Risks of Using Teleconsultation</h2>
    <p>As with any medical or wellness consultation, there are potential risks associated with the use of teleconsultation. These risks may include, without limitation, the following:</p>
    <ul>
      <li>Delays in evaluation and consultation may occur due to deficiencies or failures of the equipment or the Internet.</li>
      <li>Security protocols could fail, causing a breach of privacy of personal medical or wellness information.</li>
      <li>Adverse treatment, drug interactions, or allergic reactions may occur if sufficient information is not disclosed.</li>
      <li>Teleconsultation services are NOT emergency services. If you think you are experiencing a medical emergency, CALL 112 OR YOUR LOCAL EMERGENCY SERVICES IMMEDIATELY.</li>
    </ul>

    <h2>Your Rights and Acknowledgements</h2>
    <ul>
      <li>You understand that providing false, misleading, or incomplete health information may result in incorrect treatment.</li>
      <li>You understand that you have the option to refuse a teleconsultation visit at any time.</li>
      <li>You understand that your healthcare information may be shared with other individuals in accordance with the MUSCALAR PRO Terms of Service and Privacy Policy.</li>
      <li>You understand that no results can be guaranteed or assured.</li>
      <li>You acknowledge that MUSCALAR PRO Decode Peak Performance [M3] and any dietary supplements offered through the Services are classified as food for special dietary use and are NOT intended to diagnose, treat, cure, or prevent any disease.</li>
      <li>FOR INDIAN RESIDENTS: You acknowledge that teleconsultation services are conducted per the Telemedicine Practice Guidelines, 2020.</li>
    </ul>

    <p>This Teleconsultation Informed Consent is valid for one (1) year from the initiation of your initial teleconsultation visit. If you would like to withdraw consent, you must do so by emailing us at support@muscularpro.com.</p>

    <h2>Complaints</h2>
    <p>To file a complaint against a healthcare provider, please contact the relevant State Medical Council or the National Medical Commission (https://www.nmc.org.in).</p>

    <h2>Acceptance</h2>
    <p>By accepting this Consent to Teleconsultation, you agree and acknowledge that you have read and understood this Consent to Teleconsultation, including potential risks and benefits and your rights.</p>
  `;

  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <Prose className="mb-12" html={content} />
          </div>
        </div>
      </section>
      
    </>
  );
}
