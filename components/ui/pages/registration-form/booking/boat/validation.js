import { differenceInYears, format, parseISO, sub } from 'date-fns';
import * as yup from 'yup';

const requiredText = 'This field is required';
const phoneText = 'This phone is invalid';
const answeredYes = "If you answered 'Yes', you can't proceed";
const agreedText = 'You must agree to the terms and conditions';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

const phoneNumberRegex = /^(?:[+0]{1})?[0-9]{6,14}$/;

export const initValuesBoat = (data) => {
  return {
    first_name: data?.first_name || '',
    last_name: data?.last_name || '',
    phone_no: data?.phone_no || '',
    whatsapp_no: data?.whatsapp_no || '',
    email: data?.email || '',
    instructor_name: data?.instructor_name || '',
    gender: data?.gender || '',
    birthday:
      data?.birthday || format(sub(new Date(), { years: 10 }), 'yyyy-MM-dd'),
    country_id: data?.country_id || '',
    birthplace: data?.birthplace || '',
    // equipment_size: data?.equipment_size || '',
    address: data?.address || '',
    emergency_contact_no: data?.emergency_contact_no || '',
    emergency_contact_name: data?.emergency_contact_name || '',
    how_heard_us: data?.how_heard_us || '',
    share_on_social: data?.share_on_social || '',
    visa_status: data?.visa_status || '',
    instagram: data?.instagram || '',
    facebook: data?.facebook || '',
    activityId: data?.activityId || '8',
    emirates_id: data?.emirates_id || '',
    diving_license: data?.diving_license || '',
  };
};

export const validateValuesBoat = yup.object().shape({
  first_name: yup.string().required(requiredText),
  last_name: yup.string().required(requiredText),
  email: yup.string().email('Invalid email').required(requiredText),
  phone_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  whatsapp_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  instructor_name: yup.string().when('activityId', {
    is: 9,
    then: yup.string().required(requiredText),
  }),
  gender: yup.string().required(requiredText),
  birthday: yup
    .date()
    .required(requiredText)
    .test('age', 'You must be at least 10 years old', (value) => {
      const age = differenceInYears(new Date(), value);
      return age >= 10;
    }),
  country_id: yup.string().required(requiredText),
  birthplace: yup.string().required(requiredText),
  // equipment_size: yup.string().required(requiredText),
  address: yup.string().required(requiredText),
  emergency_contact_no: yup
    .string()
    .matches(phoneNumberRegex, phoneText)
    .max(15, phoneText)
    .required(requiredText),
  emergency_contact_name: yup.string().required(requiredText),
  how_heard_us: yup.string().required(requiredText),
  share_on_social: yup.string().required(requiredText),
  visa_status: yup.string().required(requiredText),
  instagram: yup.string(),
  facebook: yup.string(),
  activityId: yup.string().required(requiredText),
  emirates_id: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    })
    .required(requiredText),
  diving_license: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    })
    .required(requiredText),
});

export const initValuesDiveDetails = (data) => {
  return {
    equipment_rental: '',
    weight: '',
    tank: '',
    nitrox_license: '',
    mask: '',
    bcd: '',
    regulator: '',
    fins: '',
    wetsuit: '',
    rental_terms_conditions: '',
    liability_release: '',
    accept_the_risk_and_participate: '',
    bermuda_terms_conditions: '',
    last_logged_date: '',
    agree_all_the_terms: '',
    understand_refund_policy: '',
    have_own_smb: '',
  };
};

export const validateValuesDiveDetails = yup.object().shape({
  equipment_rental: yup.string().required(requiredText),
  weight: yup.string().when('equipment_rental', {
    is: (er) => ['yes', 'no'].includes(er),
    then: yup.string().required(requiredText),
  }),
  tank: yup.string().when('equipment_rental', {
    is: (er) => ['yes', 'no'].includes(er),
    then: yup.string().required(requiredText),
  }),
  nitrox_license: yup
    .mixed()
    .test({
      name: 'fileSize',
      message: 'Maximum size: 5 MB',
      test: (value) => {
        if (value) {
          return value.size <= fileSize;
        }
        return true;
      },
    })
    .test({
      name: 'fileType',
      message: 'Invalid file type',
      test: (value) => {
        if (value) {
          return allowedMimeTypes.includes(value.type);
        }
        return true;
      },
    })
    .when('tank', {
      is: 'nitrox',
      then: yup.mixed().required(requiredText),
    }),
  mask: yup.string().when('equipment_rental', {
    is: 'yes',
    then: yup.string().required(requiredText),
  }),
  bcd: yup.string(),
  regulator: yup.string().when('equipment_rental', {
    is: 'yes',
    then: yup.string().required(requiredText),
  }),
  fins: yup.string(),
  wetsuit: yup.string(),
  rental_terms_conditions: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  liability_release: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  accept_the_risk_and_participate: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  bermuda_terms_conditions: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  last_logged_date: yup.date().required(requiredText),
  agree_all_the_terms: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  understand_refund_policy: yup
    .boolean()
    .oneOf([true], agreedText)
    .required(requiredText),
  have_own_smb: yup.boolean().oneOf([true], agreedText).required(requiredText),
});

export const agreements = [
  {
    label:
      'By selecting this checkbox, I acknowledge that I have read and agree to the terms and conditions.',
    name: 'rental_terms_conditions',
    content: (
      <div className="flex flex-col gap-y-2">
        <p className="text-xs">
          I will examine all rented equipment (if any) and will find it in good
          working order before boat departure, and I hereby declare that I am
          fully responsible for its lost and/or damage due to misuse and/or
          negligence. I certify that I am trained in the use of scuba equipment
          or attending a diving here at the BERMUDA DIVING CENTER. I further
          hold harmless the BERMUDA DIVING CENTER and its agents from any
          accident occurring during the use of said equipment.
        </p>
      </div>
    ),
  },
  {
    label:
      'By selecting this checkbox, I acknowledge that I have read and agree to the terms and conditions.',
    name: 'liability_release',
    content: (
      <div className="flex flex-col gap-y-2">
        <p className="text-xs text-black">
          BERMUDA DIVING CENTER SCUBA DIVING LIABILITY RELEASE AND ASSUMPTION OF
          RISK
        </p>

        <p className="text-xs">
          I understand the purpose of signing digitally/Agree Button of this
          document is to exempt and release BERMUDA DIVING CENTER as well all
          team members on the trip, all vessels (whether owned, operated ,
          leased or chartered ) and all other involved personnel including but
          not limited to the owners, employees, crew, volunteers, designees,
          agents, sponsors and advertisers (hereinafter the “released parties”)
          and to hold these entities and individuals harmless from my any and
          all liability arising as a result of any acts or omissions on their
          part, including, but not limited to, active or passive negligence or
          negligence of any type.
        </p>

        <p className="text-xs">
          I understand the scuba diving and technical diving is a hazardous
          activity with inherent risk and dangers associated there with
          including, but not limited to, training accidents, risks associated
          with equipment failure, perils of the sea, as well as acts of fellow
          divers which could result in my serious injury or death. BY WAY OF MY
          DIGITAL SIGNATURE/AGREE BUTTON, I EXPRESSLY ASSUME ALL RISKS OF SCUBA
          DIVING INCLUDING DEEP TECHNICAL DIVING AND MIXED GAS DIVING and all
          associated risks (whether directly related to diving or not), whether
          these risks are specifically set forth or not. IT IS MY INTENTION TO
          RELEASE THE RELEASED PARTIES FOR ANYTHING THAT MAY HAPPEN TO ME WHICH
          RESULTS IN PERSONAL INJURY OR DEATH.
        </p>

        <p className="text-xs">
          By my digital signature/Agree Button on this release, I hereby affirm
          that I have been advised and informed of the inherent hazards of scuba
          diving activities, technical diving. I understand that breathing
          compressed gas underwater such as; compressed atmospheric air, oxygen,
          enriched air (Nitrox), oxygen and/or helium (Trimix and/or Heliox)
          and/or neon in either Open Circuit, Semi-Closed Circuit or Closed
          Circuit Rebreathers involves inherent risks including, but not limited
          to, decompression illness (decompression sickness and air embolism
          injuries), oxygen toxicity, inert gas narcosis, marine life injuries
          and other barotraumas/hyperbaric injuries which can occur and that
          would require treatment in a recompression chamber or hospital. I
          understand that scuba diving trips, which are necessary for training
          and certification, may be conducted at a site that is remote, either
          by the time or distance or both from a recompression chamber or from
          any medical facility. Nonetheless, I expressly wish to proceed with
          this diving activity and assume all risks. I hereby waive any
          obligation on the part of the released parties to provide first aid,
          rescue, recovery, resuscitation or medical assistance.
        </p>

        <p className="text-xs">
          I understand that scuba diving activities are physically strenuous and
          that I will be exerting myself during this scuba diving course, dive
          safari or related activities. If I am injured or killed as a result of
          cardiac arrest, Panic, hyperventilation, oxygen toxicity, inert gas
          narcosis, drowning, medical events, or for any other reason, I
          expressly assume all risks and will not hold the released parties
          responsible for same.
        </p>
        <p className="text-xs">
          I understand that I am digitally signing/pressing agree button on this
          release, without modification or any other promises, in consideration
          of being permitted to enroll in this course or diving safari and
          participate in the diving activities. I will be responsible for
          inspecting all my dive equipment prior to each dive to ensure that I
          have all the necessary equipment for the dive including the hiring of
          rental gear, and that equipment is in proper working order with the
          correct gas percentage and sufficient gas supply for the dive. I will
          not hold anyone responsible for my failure to inspect the equipment I
          use, analyze the gases I use to plan my dive.
        </p>
      </div>
    ),
  },
  {
    label:
      'By selecting this checkbox, I acknowledge that I have read and agree to the terms and conditions.',
    name: 'accept_the_risk_and_participate',
    content: (
      <div className="flex flex-col gap-y-2">
        <p className="text-xs">
          <span className="text-black">
            IT IS MY EXPRESS INTENTION AS WELL AS THOSE OF MY HEIRS, EXECUTORS
            OR REPRESENTATIVES IN ANY WAY TO SUE ALL INDIVIDUALS OR ENTITIES OR
            VESSELS
          </span>{' '}
          referred to herein (“the released parties”) whether specifically named
          or not, from all liability arising as a consequence of any act or
          omissions including, but not limited to, active or passive negligence
          of any type, including wrongful death. I make this agreement on behalf
          of myself, my heirs, executors and assigns. I expressly and
          contractually assume all risks in connection with scuba diving
          activities whether directly related to diving or not. I understand and
          agree that it is my responsibility to make my family aware of the
          risks of injury or death from diving related activities, that I accept
          these risks and choose to participate anyway. I hereby represent that
          I, or my estate, shall be liable in full for any claim brought on my
          behalf by my family, estate or heirs, arising from my injury or death
          while participating in diving related activities.
        </p>

        <p className="text-xs">
          BY WAY OF MY VOLUNTARY DIGITAL SIGNATURE/AGREE BUTTON, I AGREE THAT I
          HAVE FULLY READ AND UNDERSTAND THIS DOCUMENT IN IT’S ENTIRELY. I
          UNDERSTAND THAT THIS IS A LEGALLY BINDING CONTRACT NOT TO SUE.
        </p>

        <p className="text-xs">{`If the participant is under the age of 18 years, then the parent or legal guardian must digital sign/"agree button" this agreement and agree to be legally bound by it and furthermore to be legally responsible for the minor participant, including being responsible for damage, injury or death which may occur as a result of the minor’s participation in diving related activities . The parent or guardian hereby agrees to be fully responsible to the released parties for any damage, injury or death caused by the minor, including actions brought on by the minor, for any damages whatsoever.
BERMUDA DIVING CENTER accepts no responsibility for any personal belongings that are lost, stolen, damaged, left behind after an excursion or broken during an excursion.`}</p>
      </div>
    ),
  },
  {
    label:
      'By selecting this checkbox, I acknowledge that I have read and agree to the terms and conditions.',
    name: 'bermuda_terms_conditions',
    content: (
      <div>
        <ul className="flex flex-col ml-2 list-disc gap-y-2">
          <li className="text-xs">
            BOOKING POLICY: A COMPLETED BOOKING FORM AND DEPOSIT IS REQUIRED TO
            CONFIRM ANY BOOKING AND THAT NO BOOKING IS CONFIRMED UNTIL BERMUDA
            DIVING CENTER HAS CONFIRMED THE BOOKING.
          </li>
          <li className="text-xs">
            CANCELLATION POLICY: DUE TO THE EXCLUSIVE SERVICE THAT WE PROVIDE TO
            OUR CLIENTS, ALL CANCELLATIONS AND/OR RESERVATIONS CHANGES CAN HARM
            OUR BUSINESS. ALL OTHER CANCELLATIONS AND/OR RESERVATION CHANGES
            MADE LESS THAN 48 HOURS PRIOR TO THE CONFIRMED DATE AND TIME OF THE
            BOOKING FOR ANY REASON WHATSOEVER, WILL RESULT IN THE LOSS OF THE
            DEPOSIT IN FULL. WE DO THANK YOU FOR YOUR UNDERSTANDING.
          </li>
          <li className="text-xs">
            BOOKINGS POLICY: BOOKINGS WILL NOT BE REFUNDABLE IN CASE OF A NO
            SHOW ON EXACT TIMESLOT. BOOKINGS ARE NOT REFUNDABLE IF THE
            PARTICIPANT DOES NOT MEET THE REQUIREMENTS AS ACKNOWLEDGED AT THE
            TIME OF BOOKING. BOOKINGS WILL BE CONSIDERED A NO SHOW IF THE
            CUSTOMER(S) FAIL TO SHOW UP ON THEIR BOOKED TIME SLOT. IN CASE YOU
            ARE UNABLE TO JOIN YOUR BOOKING DUE TO YOUR OWN MISCONDUCT
            (RESCHEDULING YOUR BOOKING WITHOUT A MINIMUM OF 48 HOURS NOTICE,
            FAILURE TO SHOW UP ON TIME, BEING UNDER THE INFLUENCE OF ALCOHOL OR
            DRUGS BEFORE YOUR DIVE OR NOT FOLLOWING OTHER INSTRUCTIONS AND
            REQUIREMENTS) YOU WILL NOT BE ENTITLED TO GET REFUND.
          </li>
          <li className="text-xs">
            DIVING AS A CERTIFIED DIVER: ALL CERTIFIED DIVERS MUST SHOW PROOF OF
            CERTIFICATION AND TO BE SCUBA DIVED NOT MORE THAN 6 MONTHS AGO. THIS
            IS REQUIRED TO DIVE AS A CERTIFIED DIVER, IF YOU FORGET TO BRING IT
            WITH YOU, WE WILL DO OUR BEST TO LOOK YOU UP ONLINE (PADI), HOWEVER,
            FAILURE OF ABOVE REQUIRMENTS WILL RESULT IN NOT BEING ABLE TO DIVE
            AS A CERTIFIED DIVER AND FORFEITURE OF THE DEPOSIT.
          </li>
          <li className="text-xs">
            PADI INSTRUCTION: YOU WILL BE REQUIRED TO COMPLETE A MEDICAL AND
            LIABILITY RELEASE IN ORDER TO COMPLETE ANY PADI COURSES, SHOULD YOU
            HAVE ANY MEDICAL ISSUES OR CONCERNS ON ELIGIBILITY, PLEASE INQUIRE
            IF THIS WILL AFFECT YOU DIVING PRIOR TO BOOKING ANY SERVICES.
          </li>
          <li className="text-xs">
            ONCE PADI INSTRUCTION HAS BEGAN: DUE TO ALLOCATION OF INSTRUCTORS,
            SHOULD YOU FAIL TO SHOW UP FOR AN APPOINTMENT OR REQUEST A CHANGE OF
            DATE AND/OR TIME LESS THAN 48 HRS PRIOR TO THE CONFIRMED DATE AND/OR
            TIME FOR ANY PART OF YOUR PADI INSTRUCTION, WE RESERVE THE RIGHT TO
            CHARGED AN ADDITIONAL 200 AED RESCHEDULING FEE PER PERSON
            ADDITIONALLY TO THE COST OF THE SESSION, FOR US TO RESCHEDULE YOU.
            ONCE THE DIVER GEAR UP AND/OR ENTERED WATER AND CANCELLED ANYTIME
            FOR ANY REASON IT WILL COUNT AS A COMPLETED DIVE.
          </li>
          <li className="text-xs">
            USE OF CAMERAS: IT IS BOTH A PADI AND RSTC (RECREATIONAL SCUBA
            TRAINING COUNCIL) STANDARD NOT TO ALLOW STUDENTS CONDUCTING A PADI
            DISCOVER SCUBA (TRYDIVE), PADI SCUBA DIVER OR PADI OPEN WATER COURSE
            TO USE ANY FORM OF CAMERA EQUIPMENT INCLUDING HANDS FREE CAMERAS
            LIKE “GOPRO” WHILE DIVING AS YOUR SAFETY IS THE PRIMARY CONCERN.
            CERTIFIED DIVERS HOWEVER MAY USE CAMERA EQUIPMENT IF THEY DESIRE AT
            ANY TIME. ON THE RARE OCCASION THAT CAMERA EQUIPMENT USED DURING A
            VIDEO-RECORDED EXPERIENCE MALFUNCTIONS OR THERE IS A TECHNICAL
            GLITCH THAT IS BEYOND OUR CONTROL, THE CUSTOMER IS ONLY ELIGIBLE FOR
            A REFUND OF ANY EXTRA MONEY PAID SPECIFICALLY FOR THE VIDEO
            EXPERIENCE. VIDEO EXPERIENCES INCLUDED IN THE BOOKING PRICE ARE NOT
            ELIGIBLE FOR REFUND.
          </li>
          <li className="text-xs">
            PERSON NOT ELIGIBLE: AS YOU COMFORT AND SAFETY IS PARAMOUNT,
            PREGNANT WOMEN ARE NOT PERMITTED TO SCUBA DIVE, WE ALSO RESERVE THE
            RIGHT TO NOT ALLOW ANY PERSONS UNDER THE INFLUENCE OF DRUGS OR
            ALCOHOL. WE THANK YOU FOR UNDERSTANDING.
          </li>
          <li className="text-xs">
            FORECAST: DEPTH AND VISIBILITY OF THE WATER ARE SUBJECTED TO NATURAL
            WEATHER CONDITION. REFUND WILL NOT BE ELIGABLE.
          </li>
          <li className="text-xs">
            IN CASE OF RED BEACH SAFETY FLAG THE DIVE WILL BE RESCHEDULE FOR THE
            NEXT AVAILABLE SLOT/DATE. REFUND WILL NOT BE ELIGABLE.
          </li>
          <li className="text-xs">
            AS THERE IS LIMITED SPACE, ONLY REGISTERED PARTICIPANTS DIVERS CAN
            ATTEND, ALONG PERSON IS NOT ALLOWED.
          </li>
          <li className="text-xs">
            LIABILITY RELEASE: NEITHER THE DIVE PROFESSIONALS CONDUCTING THIS
            PROGRAM, NOR THE FACILITY THROUGH WHICH THIS PROGRAM IS OFFERED, NOR
            BERMUDA DIVING CENTER, NOR PADI AMERICAS, INC., NOR ITS AFFILIATE OR
            SUBSIDIARY CORPORATIONS, NOR ANY OF THEIR RESPECTIVE EMPLOYEES,
            OFFICERS, AGENTS OR ASSIGNS (HEREINAFTER REFERRED TO AS “RELEASED
            PARTIES”) MAY BE HELD LIABLE OR RESPONSIBLE IN ANY WAY FOR ANY
            INJURY, DEATH OR OTHER DAMAGES IN ANY SPORT ACTIVITY (PADDLE
            BOARDING, SNORKELING, FLYBOARDING, SCUBA DIVING, KITE SURFING) TO
            ME, MY FAMILY, ESTATE, HEIRS OR ASSIGNS THAT MAY OCCUR AS A RESULT
            OF MY PARTICIPATION IN THIS PROGRAM OR AS A RESULT OF THE NEGLIGENCE
            OF THE RELEASED PARTIES, WHETHER PASSIVE OR ACTIVE.
          </li>
          <li className="text-xs">
            PARTICIPANTS SHALL BEAR THE ENTIRE RISK OF LOSS, THEFT, DESTRUCTION
            OF OR DAMAGE TO THE EQUIPMENT OR ANY ITEM THEREOF (HEREIN &apos;LOSS
            OR DAMAGE&apos;) FROM ANY CAUSE WHATSOEVER.
          </li>
          <li className="text-xs">
            MANAGEMENT WILL NOT ACCEPT RESPONSIBILITY FOR THE LOSS OR DAMAGE TO
            ANY PERSONAL BELONGINGS LEFT UNATTENDED IN OR OUT OF THE DIVE CENTER
            AND DIVE SITE.
          </li>
          <li className="text-xs">PRICING: ALL PRICES ARE AS PER WEBSITE.</li>
        </ul>
      </div>
    ),
  },
];
