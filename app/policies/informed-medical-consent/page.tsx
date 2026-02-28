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
    <p>The benefits of teleconsultation include having access to medical and wellness guidance anywhere you have access to the internet—including from the comfort of your home. Teleconsultation means you don't risk exposure to illness in busy waiting rooms, and you do not have to wait several days for an in-person appointment. Teleconsultation also means you do not have to travel great distances to gain access to specialty care that may not be available in your community.</p>

    <h2>Possible Risks of Using Teleconsultation</h2>
    <p>As with any medical or wellness consultation, there are potential risks associated with the use of teleconsultation. These risks may include, without limitation, the following:</p>
    <ul>
      <li>Delays in evaluation and consultation may occur due to deficiencies or failures of the equipment or the Internet, which may include poor video and data quality, Internet outages, or other service interruption issues. You may reschedule the visit with your provider should these interruptions occur. If you need assistance in the event of an equipment failure, please contact us at: <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>.</li>
      <li>Security protocols could fail, causing a breach of privacy of personal medical or wellness information.</li>
      <li>Because MUSCALAR PRO does not have access to your complete medical records, if you do not disclose to your healthcare provider sufficient information concerning your medical history, including diagnoses, treatments, medications/supplements, and allergies, adverse treatment, drug interactions, or allergic reactions, or other negative outcomes may occur.</li>
      <li>Teleconsultation services are NOT emergency services, and your personal data WILL NOT BE MONITORED 24/7. If you think you are experiencing a medical emergency, CALL 112 OR YOUR LOCAL EMERGENCY SERVICES IMMEDIATELY.</li>
      <li>THE CARE YOU RECEIVE WILL BE AT THE SOLE DISCRETION OF THE HEALTHCARE PROVIDER WHO IS TREATING YOU, WITH NO GUARANTEE OF DIAGNOSIS, TREATMENT, OR PRESCRIPTION. THE HEALTHCARE PROVIDER WILL DETERMINE WHETHER OR NOT THE CONDITION BEING DIAGNOSED AND/OR TREATED IS APPROPRIATE FOR A TELECONSULTATION ENCOUNTER VIA THE SERVICE.</li>
    </ul>

    <h2>Your Rights and Acknowledgements</h2>
    <p>You understand that providing false, misleading, or incomplete health information may result in incorrect treatment, delayed care, or harm. You are responsible for ensuring that all information you provide is accurate, complete, and covers all details relevant to your consultation request, medical history and current condition. You confirm that any additional information you provide to an Affiliated Provider, via secure texting, phone, audio, video, or pictorially, about your medical history and current condition will be truthful, accurate, and complete.</p>
    <ul>
      <li>You understand that you have the option to refuse a teleconsultation visit at any time without affecting your right to future care or treatment and without risking the loss or withdrawal of any benefits to which you would otherwise be entitled.</li>
      <li>You understand that there are no additional or hidden fees associated with the use of teleconsultation.</li>
      <li>You understand that your healthcare information may be shared with other individuals in accordance with the MUSCALAR PRO Terms of Service, MUSCALAR PRO Privacy Policy and applicable regulations or laws in your jurisdiction. You further understand that you have the right to request disclosure of your Healthcare Information to any third party, and that such disclosure will be made upon MUSCALAR PRO's receipt of your signed written authorization.</li>
      <li>You understand that dissemination of any personally identifiable images or information from the teleconsultation visit to researchers or other entities will not occur without your express written consent.</li>
      <li>Teleconsultation may involve electronic communication of your personal medical information to remote healthcare practitioners who may be located outside of your state or country.</li>
      <li>You have the same privacy rights via teleconsultation that you would have during an in-person visit.</li>
      <li>You understand that no results can be guaranteed or assured—you may not achieve the anticipated benefits of the teleconsultation services, and your condition may remain unchanged or worsen despite guidance. You acknowledge that there is no guarantee that you will be issued a prescription and that the decision of whether a prescription is appropriate will be made solely in the professional judgment of your Affiliated Provider. You acknowledge that your Affiliated Provider may determine that your condition requires in-person care, refuse to prescribe a medication, and/or refer you accordingly.</li>
      <li>You understand that a variety of alternative methods of medical care may be available to you, and that you may choose one or more of these at any time.</li>
      <li>You understand that all information submitted to MUSCALAR PRO will be part of your medical record, and you have the right to review and receive copies of your records in accordance with applicable law. For more information on how to access your records, please contact <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>.</li>
      <li>You understand that your teleconsultation visit may be with a non-physician Affiliated Provider. You may request that your visit be scheduled with a physician.</li>
      <li>You acknowledge that there is a risk of technical failures during the teleconsultation visit beyond the control of MUSCALAR PRO and your Affiliated Provider and will hold the Affiliated Provider and MUSCALAR PRO harmless for such loss.</li>
      <li>You will provide your accurate physical location when asked by an Affiliated Provider to ensure that such provider is licensed to provide teleconsultation services to you. Your Affiliated Provider will validate this prior to commencing your visit.</li>
      <li>You consent to the disclosure of any medical records prepared by MUSCALAR PRO to your primary care provider.</li>
      <li>You acknowledge that MUSCALAR PRO Decode Peak Performance [M3] and any dietary supplements offered through the Services are classified as food for special dietary use and are NOT intended to diagnose, treat, cure, or prevent any disease.</li>
      <li>FOR INDIAN RESIDENTS: You acknowledge that teleconsultation services are conducted per the Telemedicine Practice Guidelines, 2020, issued by the Board of Governors in supersession of the Medical Council of India. You may file a complaint with the relevant State Medical Council or the National Medical Commission (NMC).</li>
      <li>You understand that teleconsultation is an evolving field, and its applications may extend beyond what is described in this consent.</li>
    </ul>

    <p>This Teleconsultation Informed Consent is valid for one (1) year from the initiation of your initial teleconsultation visit. If you would like to withdraw consent, you must do so prior to receiving any further treatment by emailing us at <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>. Your withdrawal of consent will not affect your right to future care or treatment.</p>

    <h2>Complaints</h2>
    <p>To file a complaint against a healthcare provider, please contact the relevant State Medical Council or the National Medical Commission. You can find contact information for the National Medical Commission here: <a href="https://www.nmc.org.in" target="_blank" rel="noopener noreferrer">https://www.nmc.org.in</a>.</p>

    <h2>Acceptance</h2>
    <p>By accepting this Consent to Teleconsultation, you agree and acknowledge that you have read and understood this Consent to Teleconsultation, including potential risks and benefits and your rights. By accepting, you consent to receive medical and wellness guidance via teleconsultation from Affiliated Providers (as such term is defined in the MUSCALAR PRO Privacy Policy) through MUSCALAR PRO.</p>
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
