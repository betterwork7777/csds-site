import ServicePage from "../components/ServicePage";

export default function HousingPage() {
  return (
    <ServicePage
      color="emerald"
      label="Housing Help"
      title="Rent, Landlord & Housing Notice Help"
      description="Get help organizing rent notices, eviction-related papers, landlord letters, repair requests, lease issues, and housing documents."
      focus="Housing Notices"
      reviewType="Notice Summary"
      documents={[
        "Rent notices",
        "Eviction notices",
        "Late payment letters",
        "Lease violation notices",
        "Security deposit disputes",
        "Repair or habitability complaints",
      ]}
      steps={[
        "Upload or describe the housing notice or landlord issue.",
        "We identify dates, deadlines, rent amount, landlord claims, and missing details.",
        "You receive a plain-English summary and possible self-help document options.",
      ]}
      disclaimer="This page provides educational and self-help information only. It does not provide legal advice, eviction defense representation, landlord-tenant legal advice, or professional representation."
      uploadText="Upload a Housing Notice"
    />
  );
}
