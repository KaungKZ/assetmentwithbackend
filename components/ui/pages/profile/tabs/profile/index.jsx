import { useContext } from 'react';
import { ucfirst } from '../../../../../../lib/func/text';
import { toReadableDate } from '../../../../../../lib/func/time';
import ProfileContext from '../../state/ProfileContext';

const ProfileTab = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div>
      <h2 className="text-lg">PROFILE DETAILS</h2>

      <div className="flex flex-col gap-2 mt-5 text-gray-500">
        <p className="text-base">
          First Name: <span className="text-black">{profile.first_name}</span>
        </p>
        <p className="text-base">
          Last Name: <span className="text-black">{profile.last_name}</span>
        </p>
        <p className="text-base">
          Phone: <span className="text-black">{profile.phone_no}</span>
        </p>
        <p className="text-base">
          WhatsApp:{' '}
          <span className="text-black">{profile.whatsapp_no || 'N/A'}</span>
        </p>
        <p className="text-base">
          Email: <span className="text-black">{profile.email}</span>
        </p>
        <p className="text-base">
          Date of birth:{' '}
          <span className="text-black">
            {profile.birthday ? toReadableDate(profile.birthday) : 'N/A'}
          </span>
        </p>
        <p className="text-base">
          Place of birth:{' '}
          <span className="text-black">
            {profile.birthplace?.name || 'N/A'}
          </span>
        </p>
        <p className="text-base">
          Nationality:
          <span className="text-black"> {profile.country?.name || 'N/A'}</span>
        </p>
        <p className="text-base">
          Gender:{' '}
          <span className="text-black">{ucfirst(profile.gender) || 'N/A'}</span>
        </p>
        <p className="text-base">
          Equipment Size:{' '}
          <span className="text-black">
            {profile.equipment_size ? profile.equipment_size : 'N/A'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileTab;
