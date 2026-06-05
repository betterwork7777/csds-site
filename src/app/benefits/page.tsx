import ServicePage from "../components/ServicePage";

export default function BenefitsPage() {
  return (
    <ServicePage
      color="orange"
      label="Benefits Help"
      title="Public Benefits Notice & Paperwork Help"
      description="Get help organizing notices and paperwork related to public benefits, renewals, missing documents, eligibility issues, and agency communication."
      focus="Benefits Notices"
      reviewType="Notice Summary"
      documents={[
        "DSHS notices",
        "SNAP renewal letters",
        "ABD paperwork",
        "Medicaid notices",
        "Eligibility review letters",
        "Missing document requests",
      ]}
      steps={[
        "Upload or describe the benefits notice or paperwork issue.",
        "We identify agency name, deadline, requested documents, benefit type, and next steps.",
        "You receive a plain-English summary and possible self-help response options.",
      ]}
      disclaimer="This page provides educational and self-help information only. It does not provide legal advice, benefits representation, or professional representation."
      uploadText="Upload Benefits Notice"
    />
  );
}
