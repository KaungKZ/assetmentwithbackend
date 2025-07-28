export const contactEmailData = (data) => {
  return `
    <div>
    <h1 style="font-size: 20px;">'${data.full_name}' recently sent us a message with his details.</h1>
    <div style="margin-top: 20px">
        <p><strong>Full Name: </strong> ${data.full_name}</p>
        <p><strong>Phone Number: </strong> ${data.phone_no}</p>
        <p><strong>Email: </strong> ${data.email}</p>
        <p><strong>Subject: </strong> ${data.subject}</p>
        <p><strong>Message: </strong> ${data.message}</p>
    </div>
    <p style="margin-top: 20px;">(Note: This form was submitted from Contact Page. Please follow up and update the status on the admin dashboard.)</p>
</div>
    `;
};
