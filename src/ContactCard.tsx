type ContactCardProps = {
  name: string;
  email: string;
  department: string;
  phone: string;
};

function ContactCard({ name, email, department, phone }: ContactCardProps) {
  return (
    <article className="contact-card">
      {/* TODO 3: Replace the placeholders below with values from props. */}
      <h3>Contact Name</h3>
      <p><strong>Department:</strong> Department</p>
      <p><strong>Email:</strong> Email</p>
      <p><strong>Phone:</strong> Phone</p>
    </article>
  );
}

export default ContactCard;
