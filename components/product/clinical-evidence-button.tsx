"use client";

type ClinicalEvidenceButtonProps = {
  /** Client callback to open the clinical trials panel when inside ClinicalTrialsProvider */
  openClinicalTrialsCallback?: () => void;
};

export function ClinicalEvidenceButton({
  openClinicalTrialsCallback,
}: ClinicalEvidenceButtonProps = {}) {
  const handleClick = () => {
    if (openClinicalTrialsCallback) {
      openClinicalTrialsCallback();
    } else {
      const event = new CustomEvent("openClinicalTrials");
      window.dispatchEvent(event);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block text-base font-medium text-black underline transition-colors hover:text-black/80 cursor-pointer"
    >
      See Clinical Evidence
    </button>
  );
}
