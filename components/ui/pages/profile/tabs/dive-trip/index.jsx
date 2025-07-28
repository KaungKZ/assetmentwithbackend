import { useContext, useState } from 'react';
import DiveTripContext from '../../../../../../lib/store/profile/dive-trip/DiveTripContext';
import SimpleButton from '../../../../buttons/SiimpleButton';
import AddNew from './AddNew';
import BookedDives from './BookedDives';

const DiveTripTab = () => {
  const { bookedDives } = useContext(DiveTripContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AddNew open={open} setOpen={setOpen} />

      <div className="flex items-center mb-6 gap-x-2">
        <h2 className="text-lg uppercase">Dive Trips</h2>
        <SimpleButton sm onClick={() => setOpen(true)}>
          Add New
        </SimpleButton>
      </div>

      {bookedDives?.length > 0 ? (
        <BookedDives bookedDives={bookedDives} />
      ) : (
        <div className="p-4 text-base border border-gray-100 rounded shadow">
          No records found.
        </div>
      )}
    </div>
  );
};

export default DiveTripTab;
