import { format } from 'date-fns';

export const bookingEmailData = (data) => {
  return `<div>
    <h1 style="font-size: 20px;">
        You have successfully booked the ${
          data.activity.name
        } and the details are mentioned below.
    </h1>
    <div style="margin-top: 20px">
        <p><strong>Booking date: </strong> ${format(
          new Date(data.booking_date),
          'MMM dd, yyyy'
        )}</p>
        <p><strong>Time Slot: </strong> ${
          data.slot === 'morning'
            ? '9 AM - 12 PM'
            : data.slot === 'afternoon'
            ? '12 PM - 3 PM'
            : data.slot === 'evening'
            ? '3 PM - 6 PM'
            : ''
        }</p>
        <p><strong>Name: </strong> ${data.booker.full_name}</p>
        <p><strong>Email: </strong> ${data.booker.email}</p>
        <p><strong>No. of divers: </strong> ${data.no_of_divers}</p>
        <p><strong>Special Request: </strong> ${
          data.special_request || 'N/A'
        }</p>
    </div>
    <p style="margin-top: 20px;">Please contact us if you have any questions.</p>
</div>`;
};
