import ServicePage from "../components/ServicePage";

export default function MedicalPage() {
  return (
    <ServicePage
      color="rose"
      label="Medical Bill Help"
      title="Medical Bill & Hospital Statement Help"
      description="Get help organizing medical bills, hospital statements, insurance records, payment requests, and financial assistance paperwork."
      focus="Medical Bills"
      reviewType="Billing Summary"
      documents={[
        "Hospital bills",
        "Medical collection notices",
        "Insurance explanation of benefits",
        "Payment plan letters",
        "Financial assistance forms",
        "Itemized bill requests",
      ]}
      steps={[
        "Upload or describe the medical bill or billing issue.",
        "We identify provider name, amount billed, insurance status, dates, and payment options.",
        "You receive a plain-English summary and possible self-help document options.",
      ]}
      disclaimer="This page provides educational and self-help information only. It does not provide medical advice, legal advice, billing representation, or professional representation."
      uploadText="Upload Medical Bill"
    />
  );
}
