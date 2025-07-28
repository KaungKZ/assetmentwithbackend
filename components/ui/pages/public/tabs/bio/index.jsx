import React, { useContext } from 'react';
import { toReadableDate } from '../../../../../../lib/func/time';
import { BioContext } from '../../store/BioContext';

const Bio = () => {
  const { bio } = useContext(BioContext);

  return (
    <div>
      <h2 className="text-lg">PROFILE DETAILS</h2>

      <div className="flex flex-col gap-2 mt-5 text-gray-500">
        <p className="text-base">
          First Name: <span className="text-black">{bio.first_name}</span>
        </p>
        <p className="text-base">
          Last Name: <span className="text-black">{bio.last_name}</span>
        </p>
        {/* <p className="text-base">
          Date of birth:{' '}
          <span className="text-black">
            {bio.birthday ? toReadableDate(bio.birthday) : 'N/A'}
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default Bio;
