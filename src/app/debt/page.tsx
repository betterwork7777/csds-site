import ServicePage from "../components/ServicePage";

export default function DebtPage() {
  return (
    <ServicePage
      color="blue"
      label="Debt Help"
      title="Debt & Collection Notice Help"
      description="Get help understanding collection letters, credit card debt notices, medical bills, payment demand letters, and debt-related paperwork."
      focus="Debt Notices"
      reviewType="Document Summary"
      documents={[
        "Collection notices",
        "Credit card debt letters",
        "Medical bills sent to collections",
        "Payment demand letters",
        "Debt lawsuit or court notices",
        "Settlement offer letters",
      ]}
      steps={[
        "Upload or describe the notice you received.",
        "We identify creditor name, amount claimed, deadlines, and warning language.",
        "You receive a plain-English summary and suggested document options.",
      ]}
      disclaimer="This page provides educational and self-help information only. It does not provide legal advice, financial advice, debt settlement services, or professional representation."
      uploadText="Upload a Debt Notice"
    />
  );
}
