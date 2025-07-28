/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import SimpleButton from '../../buttons/SiimpleButton';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import MyConfetti from '../../MyConfetti';
import OutlinedButton from '../../buttons/OutlinedButton';

const DSDRegistration = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <MyConfetti />

      <div className="flex flex-col items-center gap-4 text-green-600">
        <HiOutlineCheckCircle size={120} />

        <h1 className="flex items-center justify-start gap-2 text-lg">
          YOU ARE REGISTERED!
        </h1>
      </div>

      <div className="mt-4 text-center">
        {!!data.form_id ? (
          <p className="text-sm text-red-600">
            Please take a screenshot of this for reference. You will have to
            show this at the center before diving.
          </p>
        ) : (
          <p className="text-sm">
            <span className="text-black">
              Congratulations
              {data.first_name && <span>, {data.first_name}</span>}!
            </span>{' '}
            Get ready to experience the thrill of breathing underwater and
            discover the amazing marine life that surrounds us!.
          </p>
        )}

        <p className="mt-3 text-sm">
          <span className="text-black">
            Please check your email for a copy of the form submission.
          </span>{' '}
          (You may need to wait for a while to receive the email in peak hours.)
        </p>

        {data.form_id && (
          <p className="mt-2 -mb-2">
            <img
              src={`https://www.webarcode.com/barcode/image.php?code=-${data.form_id}&type=C128B&xres=1&height=70&width=167&font=5&output=jpeg&style=36`}
              alt="the barcode printer: free barcode generator"
              className="w-full"
            />
            <span className="text-xs">{data.form_id}</span>
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-6 md:flex-row">
        {!data.form_id ? (
          <OutlinedButton onClick={() => router.push('/')}>
            Back To Home
          </OutlinedButton>
        ) : (
          <SimpleButton onClick={() => router.back()}>
            Submit Another Form
          </SimpleButton>
        )}
      </div>
    </div>
  );
};

export default DSDRegistration;

// /* eslint-disable @next/next/no-img-element */
// import { useRouter } from 'next/router';
// import SimpleButton from '../../buttons/SiimpleButton';
// import { HiOutlineCheckCircle } from 'react-icons/hi';
// import OutlinedButton from '../../buttons/OutlinedButton';
// import MyConfetti from '../../MyConfetti';

// const DSDRegistration = ({ data }) => {
//   const router = useRouter();

//   return (
//     <div>
//       <MyConfetti />

//       <div className="flex flex-col gap-4">
//         <h1 className="flex items-center justify-start gap-2 text-lg text-green-600">
//           <HiOutlineCheckCircle size={28} /> YOU ARE REGISTERED!
//         </h1>
//       </div>

//       <div className="mt-4">
//         <p className="text-base">
//           <span className="text-black">
//             Congratulations
//             {data.first_name && <span>, {data.first_name}</span>}!
//           </span>{' '}
//           Get ready to experience the thrill of breathing underwater and
//           discover the amazing marine life that surrounds us!.
//         </p>

//         <p className="mt-3 text-base">
//           <span className="text-black">Check your email now.</span> (You may
//           need to wait for a while to receive the email in peak hours.)
//         </p>

//         {data.form_id && (
//           <p className="mt-2 -mb-2">
//             <img
//               src={`https://www.webarcode.com/barcode/image.php?code=-${data.form_id}&type=C128B&xres=1&height=70&width=167&font=5&output=jpeg&style=36`}
//               alt="the barcode printer: free barcode generator"
//               className="width-[167px] height-[70px] -ml-6 -mb-3 sm:-mb-4"
//             />
//             <span className="text-xs">
//               Form ID: <span className="text-black">{data.form_id}</span>
//             </span>
//           </p>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 mt-6 sm:items-center sm:flex-row">
//         <OutlinedButton onClick={() => router.push('/')}>
//           Back To Home
//         </OutlinedButton>

//         <SimpleButton onClick={() => router.back()}>
//           Submit Another Form
//         </SimpleButton>
//       </div>
//     </div>
//   );
// };

// export default DSDRegistration;
