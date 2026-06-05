import ServicePage from "../components/ServicePage";

export default function ConsumerPage() {
  return (
    <ServicePage
      color="purple"
      label="Consumer Help"
      title="Consumer Complaint & Company Dispute Help"
      description="Get help organizing complaints involving billing problems, refunds, defective products, service disputes, scams, and unfair business practices."
      focus="Consumer Disputes"
      reviewType="Complaint Summary"
      documents={[
        "Refund disputes",
        "Unauthorized charges",
        "Service cancellations",
        "Defective products",
        "Subscription billing problems",
        "Delivery or contractor disputes",
      ]}
      steps={[
        "Upload or describe the company dispute or complaint.",
        "We identify the company name, issue, dates, amount involved, and response history.",
        "You receive a plain-English summary and possible self-help complaint options.",
      ]}
      disclaimer="This page provides educational and self-help information only. It does not provide legal advice, consumer protection representation, or professional representation."
      uploadText="Start a Consumer Complaint"
    />
  );
}
