import Link from 'next/link';
import { useContext } from 'react';
import useQRCode from '../../../../../../lib/hooks/useQRCode';
import CopyableBlock from '../../../../internals/parts/CopyableBlock';
import ProfileContext from '../../state/ProfileContext';

const SharingTab = () => {
  const { profile } = useContext(ProfileContext);
  const { qrCode } = useQRCode();

  return (
    <div>
      <h2 className="text-lg">PROFILE SHARING</h2>

      <div className="flex flex-col gap-2 mt-6 text-gray-500">
        <Link
          href={`${process.env.NEXT_PUBLIC_SELF_URL}/bio/${profile.member_no}`}
          target="_blank"
        >
          {qrCode(
            `${process.env.NEXT_PUBLIC_SELF_URL}/bio/${profile.member_no}`
          )}
        </Link>

        <div className="max-w-[400px] mt-4">
          <CopyableBlock
            label="Copy & Share"
            value={`${process.env.NEXT_PUBLIC_SELF_URL}/bio/${profile.member_no}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SharingTab;
