type ContactCardProps = {
  name: string;
  email: string;
  department: string;
  phone: string;
};

function ContactCard({ name, email, department, phone }: ContactCardProps) {
  return (
    <article className="contact-card">
      <h3>{name}</h3>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </article>
  );
}

export default ContactCard;
