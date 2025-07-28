export const emailData = (data) => {
  return `
  <div>
    <h1 style="font-size: 20px;">
      You have successfully booked the '${data.course.short_name}' course and the details are mentioned below.
    </h1>
    <div style="margin-top: 20px">
      <p><strong>Name: </strong> ${data.lead.first_name} ${data.lead.last_name}</p>
      <p><strong>Email: </strong> ${data.lead.email}</p>
      <p><strong>No. of students: </strong> ${data.no_of_students}</p>
    </div>
    <p style="margin-top: 20px;">Please make a payment and your enrollment will be confirmed.</p>
  </div>
  `;
};
