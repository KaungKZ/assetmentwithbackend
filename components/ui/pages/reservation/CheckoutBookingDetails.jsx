import { useContext, useEffect, useState } from 'react';
import CustomDatePicker from '../../forms/v2/CustomDatePicker';
import Select from '../../forms/v2/Select';
import SelectSlot from '../../forms/v2/SelectSlot';
import CheckoutContext from '../../../../lib/store/checkout/CheckoutContext';

const CheckoutBookingDetails = ({ formikValues, setFieldValue }) => {
  const { reservation } = useContext(CheckoutContext);
  const blockedSlots = reservation.blockedSlots;

  const [disableDwn, setDisableDwn] = useState(false);
  const [disableMrn, setDisableMrn] = useState(false);
  const [disableAft, setDisableAft] = useState(false);
  const [disableEvn, setDisableEvn] = useState(false);
  const [disableNgt, setDisableNgt] = useState(false);

  useEffect(() => {
    const slotsFromToday = blockedSlots.filter(
      (blocked) => blocked.date === formikValues.booking_date
    );

    if (slotsFromToday.length > 0) {
      setDisableDwn(false);
      setDisableMrn(false);
      setDisableAft(false);
      setDisableEvn(false);
      setDisableNgt(false);

      slotsFromToday.forEach((slot) => {
        if (
          (formikValues.booking_date === slot.date &&
            reservation.from === slot.type) ||
          (formikValues.booking_date === slot.date && slot.type === 'all')
        ) {
          if (slot.slot === 'dawn') {
            setDisableDwn(true);
          } else if (slot.slot === 'morning') {
            setDisableMrn(true);
          } else if (slot.slot === 'afternoon') {
            setDisableAft(true);
          } else if (slot.slot === 'evening') {
            if (reservation.from === 'boat-dive') {
              setDisableAft(true);
            }

            setDisableEvn(true);
          } else if (slot.slot === 'night') {
            setDisableNgt(true);
          }
        }
      });
    } else {
      setDisableDwn(false);
      setDisableMrn(false);
      setDisableAft(false);
      setDisableEvn(false);
      setDisableNgt(false);
    }
  }, [blockedSlots, formikValues.booking_date, reservation.from]);

  return (
    <div className="px-8 pt-8 pb-10 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-lg font-bold text-gray-700 font-poppins">
        Booking Details
      </h2>

      <div className="flex flex-col grid-cols-5 gap-3 sm:grid">
        <div className="col-span-1">
          <CustomDatePicker
            label="Booking Date*"
            name="booking_date"
            setFieldValue={setFieldValue}
          />
        </div>

        <div className="sm:col-span-3">
          <SelectSlot
            label="Time Slot*"
            slot={formikValues.slot}
            type={
              reservation.id === 10
                ? 'boat-dsd'
                : reservation.id === 8
                ? 'certified-dive-trip'
                : 'dsd'
            }
            disableDwn={disableDwn}
            disableMrn={disableMrn}
            disableAft={disableAft}
            disableEvn={disableEvn}
            disableNgt={disableNgt}
          />
        </div>

        <div className="col-span-1">
          <Select label="Special Request" name="special_request">
            <option value="none">None</option>
            <option value="Marriage Proposal">Marriage Proposal</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Select>
        </div>
      </div>

      {reservation.id === 8 && (
        <span className="text-red-500 text-[10px]">
          *Schedules are subject to be changed as per sea conditions
        </span>
      )}
    </div>
  );
};

export default CheckoutBookingDetails;
