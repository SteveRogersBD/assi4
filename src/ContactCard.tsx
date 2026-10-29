type ContactCardProps = {
  name: string;
  email: string;
  department: string;
  phone: string;
};

// TODO 2: Complete ContactCard so it receives typed props.
// You may use props.name / props.email / ... OR destructuring.
function ContactCard(/* TODO: typed props go here */) {
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
