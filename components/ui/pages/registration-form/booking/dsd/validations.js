import { differenceInYears } from 'date-fns';
import * as yup from 'yup';
import {
  ageText,
  ageTextBM,
  agreedText,
  answeredYesText,
  emailText,
  englishOnly,
  englishOnlyText,
  invalidFileText,
  max5MBText,
  phoneNumberRegex,
  phoneText,
  requiredText,
} from '../../../../../../lib/func/text';

const fileSize = 5 * 1024 * 1024; // 5mb
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export const initValuesDSD = (data) => {
  return {
    first_name: data?.first_name || '',
    last_name: data?.last_name || '',
    gender: data?.gender || '',
    email: data?.email || '',
    phone_no: data?.phone_no || '',
    whatsapp_no: data?.whatsapp_no || '',
    birthday: data?.birthday || '',
    country_id: data?.country_id || '',
    equipment_size: data?.equipment_size || '',
    address: data?.address || '',
    how_heard_us: data?.how_heard_us || '',
    share_on_social: data?.share_on_social || '',
    visa_status: data?.visa_status || '',
    instagram: data?.instagram || '',
    facebook: data?.facebook || '',
    type: data?.type || 'dsd',
    emirates_id: data?.emirates_id || '',
  };
};

export const validateValuesDSD = (lang = 'en', activityId) => {
  return yup.object().shape({
    first_name: yup
      .string()
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    last_name: yup
      .string()
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    gender: yup.string().required(requiredText(lang)),
    email: yup
      .string()
      .email(emailText(lang))
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    phone_no: yup
      .string()
      .matches(phoneNumberRegex, phoneText(lang))
      .max(15, phoneText(lang))
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    whatsapp_no: yup
      .string()
      .matches(phoneNumberRegex, phoneText(lang))
      .max(15, phoneText(lang))
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    birthday: yup
      .date()
      .required(requiredText(lang))
      .test(
        'age',
        activityId == 49 ? ageTextBM(lang) : ageText(lang),
        (value) => {
          const age = differenceInYears(new Date(), value);

          // If activityId is 49 (Bubblemaker), restrict age between 8 and 10
          if (activityId === '49') {
            return age >= 8 && age <= 10;
          }

          return age >= 10;
        }
      ),
    country_id: yup.string().required(requiredText(lang)),
    equipment_size: yup.string().required(requiredText(lang)),
    address: yup
      .string()
      .required(requiredText(lang))
      .matches(englishOnly, englishOnlyText(lang)),
    how_heard_us: yup.string().required(requiredText(lang)),
    share_on_social: yup.string().required(requiredText(lang)),
    visa_status: yup.string().required(requiredText(lang)),
    instagram: yup.string().matches(englishOnly, englishOnlyText(lang)),
    facebook: yup.string().matches(englishOnly, englishOnlyText(lang)),
    type: yup.string().required(requiredText(lang)),
    emirates_id: yup
      .mixed()
      .when('type', {
        is: (value) =>
          value === 'dsd-boat' ||
          value === 'dsd-boat-tourism' ||
          value === 'dsd',
        then: yup.mixed().required(requiredText(lang)),
        otherwise: yup.mixed(),
      })
      .test({
        name: 'fileSize',
        message: max5MBText(lang),
        test: (value) => {
          if (value) {
            return value.size <= fileSize;
          }
          return true;
        },
      })
      .test({
        name: 'fileType',
        message: invalidFileText(lang),
        test: (value) => {
          if (value) {
            return allowedMimeTypes.includes(value.type);
          }
          return true;
        },
      }),
  });
};

export const initValuesMedical = (data) => {
  return {
    surgery_in_12_months_or_ongoing: '',
    current_ear_infection: '',
    is_pregnant: '',
    ear_disease_or_problem: '',
    ear_sinus_surgery_history: '',
    current_cold_congestion_sinusitis_bronchitis: '',
    respiratory_problems: '',
    pneumothorax_or_chest_surgery_history: '',
    asthma_or_history_of_emphysema: '',
    medication_of_impairment_physical_or_mental: '',
    mental_or_psychological_problems: '',
    history_of_colostomy: '',
    history_of_heart_disease: '',
    history_of_high_blood_pressure: '',
    over_45_and_family_history_of_heart_attack: '',
    history_of_bleeding_or_other_blood_disorders: '',
    history_of_diabetes: '',
    history_of_seizures_blackouts_or_fainting: '',
    history_of_back_arm_or_leg_problems: '',
    history_of_fear_of_closed_or_open_spaces: '',
    none_agency_disclosure: '',
    liabiality_release: '',
    bermuda_terms_conditions: '',
    media_for_promotion: '',
    type: data?.type || 'dsd',
    // last_logged_date: '',
    agree_all_the_terms: '',
    understand_refund_policy: '',
    from: data?.type || 'dsd',
  };
};

export const validateValuesMedical = (lang = 'en') => {
  return yup.object().shape({
    surgery_in_12_months_or_ongoing: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    current_ear_infection: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    is_pregnant: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    ear_disease_or_problem: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    ear_sinus_surgery_history: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    current_cold_congestion_sinusitis_bronchitis: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    respiratory_problems: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    pneumothorax_or_chest_surgery_history: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    asthma_or_history_of_emphysema: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    medication_of_impairment_physical_or_mental: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    mental_or_psychological_problems: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_colostomy: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_heart_disease: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_high_blood_pressure: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    over_45_and_family_history_of_heart_attack: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_bleeding_or_other_blood_disorders: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_diabetes: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_seizures_blackouts_or_fainting: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_back_arm_or_leg_problems: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    history_of_fear_of_closed_or_open_spaces: yup
      .string()
      .oneOf(['false'], answeredYesText(lang))
      .required(requiredText(lang)),
    none_agency_disclosure: yup
      .boolean()
      .oneOf([true], agreedText(lang))
      .required(requiredText(lang)),
    liabiality_release: yup
      .boolean()
      .oneOf([true], agreedText(lang))
      .required(requiredText(lang)),
    bermuda_terms_conditions: yup
      .boolean()
      .oneOf([true], agreedText(lang))
      .required(requiredText(lang)),
    media_for_promotion: yup
      .boolean()
      .oneOf([true], agreedText(lang))
      .required(requiredText(lang)),
    // last_logged_date: yup.date().when('type', {
    //   is: 'dsd-boat',
    //   then: yup.date().required(requiredText(lang)),
    //   otherwise: yup.date(),
    // }),
    agree_all_the_terms: yup.boolean().when('type', {
      is: (value) => value === 'dsd-boat' || value === 'dsd-boat-tourism',
      then: yup
        .boolean()
        .oneOf([true], agreedText(lang))
        .required(requiredText(lang)),
      otherwise: yup.boolean(),
    }),
    understand_refund_policy: yup.boolean().when('type', {
      is: (value) => value === 'dsd-boat' || value === 'dsd-boat-tourism',
      then: yup
        .boolean()
        .oneOf([true], agreedText(lang))
        .required(requiredText(lang)),
      otherwise: yup.boolean(),
    }),
  });
};

export const medicalQuestions = (lang = 'en') => {
  return lang === 'en'
    ? [
        {
          label:
            'Do you have any surgery within the last 12 months, OR do you have any ongoing problems related to your past surgery?',
          name: 'surgery_in_12_months_or_ongoing',
        },
        {
          label: 'Do you currently have an ear infection?',
          name: 'current_ear_infection',
        },
        {
          label: 'Are you or could you be pregnant?',
          name: 'is_pregnant',
        },
        {
          label:
            'Do you have a history of ear disease, hearing loss or problems with balance?',
          name: 'ear_disease_or_problem',
        },
        {
          label: 'Do you have a history of ear or sinus surgery?',
          name: 'ear_sinus_surgery_history',
        },
        {
          label:
            'Are you currently suffering from a cold, congestion, sinusitis or bronchitis?',
          name: 'current_cold_congestion_sinusitis_bronchitis',
        },
        {
          label:
            'Do you have a history of respiratory problems, severe attacks of hayfever or allergies, or lung disease?',
          name: 'respiratory_problems',
        },
        {
          label:
            'Have you had a collapsed lung (pneumothorax) or history of chest surgery?',
          name: 'pneumothorax_or_chest_surgery_history',
        },
        {
          label:
            'Do you have active asthma or history of emphysema or tuberculosis?',
          name: 'asthma_or_history_of_emphysema',
        },
        {
          label:
            'Are you currently taking medication that carries a warning about any impairment of your physical or mental abilities?',
          name: 'medication_of_impairment_physical_or_mental',
        },
        {
          label:
            'Do you have behavioral health, mental or psychological problems or a nervous system disorder?',
          name: 'mental_or_psychological_problems',
        },
        {
          label: 'Do you have a history of colostomy?',
          name: 'history_of_colostomy',
        },
        {
          label:
            'Do you have a history of heart disease or heart attack, heart surgery or blood vessel surgery?',
          name: 'history_of_heart_disease',
        },
        {
          label:
            'Do you have a history of high blood pressure, angina, or take medication to control blood pressure?',
          name: 'history_of_high_blood_pressure',
        },
        {
          label:
            'Are you over 45 and have a family history of heart attack or stroke?',
          name: 'over_45_and_family_history_of_heart_attack',
        },
        {
          label: 'Do you have a history of bleeding or other blood disorders?',
          name: 'history_of_bleeding_or_other_blood_disorders',
        },
        {
          label: 'Do you have a history of diabetes?',
          name: 'history_of_diabetes',
        },
        {
          label:
            'Do you have a history of seizures, blackouts or fainting, convulsions or epilepsy or take medications to prevent them?',
          name: 'history_of_seizures_blackouts_or_fainting',
        },
        {
          label:
            'Do you have a history of back, arm or leg problems following an injury, fracture or surgery?',
          name: 'history_of_back_arm_or_leg_problems',
        },
        {
          label:
            'Do you have a history of fear of closed or open spaces or panic attacks (claustrophobia or agoraphobia)?',
          name: 'history_of_fear_of_closed_or_open_spaces',
        },
      ]
    : [
        {
          label:
            'هل خضعت لأي عملية جراحية خلال الـ 12 شهرًا الماضية، أو هل لديك أي مشكلات مستمرة متعلقة بجراحتك السابقة؟',
          name: 'surgery_in_12_months_or_ongoing',
        },
        {
          label: 'هل لديك عدوى في الأذن حاليًا؟',
          name: 'current_ear_infection',
        },
        {
          label: 'هل أنت حامل أو من الممكن أن تكوني حامل؟',
          name: 'is_pregnant',
        },
        {
          label: 'هل لديك تاريخ مرض الأذن، فقدان السمع أو مشاكل في التوازن؟',
          name: 'ear_disease_or_problem',
        },
        {
          label: 'هل لديك تاريخ جراحة الأذن أو الجيوب الأنفية؟',
          name: 'ear_sinus_surgery_history',
        },
        {
          label:
            'هل تعاني حاليًا من الزكام، الاحتقان، التهاب الجيوب الأنفية أو التهاب القصبات؟',
          name: 'current_cold_congestion_sinusitis_bronchitis',
        },
        {
          label:
            'هل لديك تاريخ مشاكل التنفس، هجمات شديدة من حمى القش أو الحساسية، أو أمراض الرئة؟',
          name: 'respiratory_problems',
        },
        {
          label: 'هل كان لديك رئة منهارة (انهيار الرئة) أو تاريخ جراحة الصدر؟',
          name: 'pneumothorax_or_chest_surgery_history',
        },
        {
          label: 'هل لديك ربو نشط أو تاريخ مرض الانفصال الهوائي أو السل؟',
          name: 'asthma_or_history_of_emphysema',
        },
        {
          label:
            'هل تتناول حاليًا دواء يحمل تحذيرًا بشأن أي إعاقة لقدراتك الجسدية أو العقلية؟',
          name: 'medication_of_impairment_physical_or_mental',
        },
        {
          label:
            'هل لديك مشاكل صحية سلوكية، عقلية أو نفسية أو اضطراب في الجهاز العصبي؟ ',
          name: 'mental_or_psychological_problems',
        },
        {
          label: 'هل لديك تاريخ استخدام الكولوستومي؟ ',
          name: 'history_of_colostomy',
        },
        {
          label:
            'هل لديك تاريخ مرض القلب أو أزمة قلبية، جراحة القلب أو جراحة الأوعية الدموية؟ ',
          name: 'history_of_heart_disease',
        },
        {
          label:
            'هل لديك تاريخ ضغط الدم المرتفع، الذبحة الصدرية، أو تتناول الدواء للتحكم في ضغط الدم؟',
          name: 'history_of_high_blood_pressure',
        },
        {
          label:
            'هل أنت أكبر من 45 سنة ولديك تاريخ عائلي للأزمة القلبية أو السكتة الدماغية؟',
          name: 'over_45_and_family_history_of_heart_attack',
        },
        {
          label: 'هل لديك تاريخ نزيف أو اضطرابات دم أخرى؟',
          name: 'history_of_bleeding_or_other_blood_disorders',
        },
        {
          label: 'هل لديك تاريخ الإصابة بالسكري؟',
          name: 'history_of_diabetes',
        },
        {
          label:
            'هل لديك تاريخ الإغماء، الإغماء، التشنجات أو الصرع أو تتناول الأدوية لمنعها؟ ',
          name: 'history_of_seizures_blackouts_or_fainting',
        },
        {
          label:
            'هل لديك تاريخ مشاكل الظهر، الذراع أو الساق بعد الإصابة، الكسر أو الجراحة؟ ',
          name: 'history_of_back_arm_or_leg_problems',
        },
        {
          label:
            'هل لديك تاريخ الخوف من الأماكن المغلقة أو المفتوحة أو هجمات الذعر (رهبة الأماكن المغلقة أو رهبة الأماكن المفتوحة)؟',
          name: 'history_of_fear_of_closed_or_open_spaces',
        },
      ];
};

export const agreements = (lang) => {
  return lang === 'en'
    ? [
        {
          label:
            'By checking this box, i agree to Non-Agency Disclosure and Acknowledgment Agreement',
          name: 'none_agency_disclosure',
          content: (
            <div>
              <p className="mb-2 text-xs">
                Non-Agency Disclosure and Acknowledgment Agreement
              </p>

              <p className="text-xs">
                I understand and agree that PADI Members (“Members”), including
                Bermuda Diving Center and/or any individual PADI Instructors and
                DiveMasters associated with the program in which I am
                participating, are licensed to use various PADI Trademarks and
                to conduct PADI training, but are not agents, employees or
                franchisees of PADI Americas, Inc, or its parent, subsidiary and
                affiliated corporations (“PADI”). I further understand that
                Member business activities are independent, and are neither
                owned nor operated by PADI, and that while PADI establishes the
                standards for PADI diver training programs, it is not
                responsible for, nor does it have the right to control, the
                operation of the Members’ business activities and the day-to-day
                conduct of PADI programs and supervision of divers by the
                Members or their associated staff. I further understand and
                agree on behalf of myself, my heirs and my estate that in the
                event of an injury or death during this activity, neither I nor
                my estate shall seek to hold PADI liable for the actions,
                inactions or negligence of Bermuda Diving Center and/or the
                instructors and DiveMasters associated with the activity.
              </p>
            </div>
          ),
        },
        {
          label:
            'By checking this box, i agree to Liability Release and Assumption of Risk Agreement',
          name: 'liabiality_release',
          content: (
            <div>
              <p className="text-xs">
                I, hereby affirm that I am aware that skin and scuba diving have
                inherent risks which may result in serious injury or death. I
                understand that diving with compressed air involves certain
                inherent risks; decompression sickness, embolism, or other
                hyperbaric injuries can occur that require treatment in a
                recompression chamber. I further understand that this program
                may be conducted at a site that is remote, either by time or
                distance or both, such as a recompression chamber. I still
                choose to proceed with this program in spite of the absence of a
                recompression chamber or medical facility in proximity to the
                dive site. The information I have provided about my medical
                history on the Medical Questionnaire is accurate to the best of
                my knowledge. I agree to accept responsibility for omissions
                regarding my failure to disclose any existing or past health
                conditions. I understand and agree that neither the dive
                professionals conducting this program, Bermuda Diving Center nor
                the facility through which this program is offered, nor PADI
                Americas, Inc., nor its affiliate or subsidiary corporations,
                nor any of their respective employees, officers, agents or
                assigns (hereinafter referred to as “Released Parties”) may be
                held liable or responsible in any way for any injury, death or
                other damages to me, my family, estate, heirs or assigns that
                may occur as a result of my participation in this program or as
                a result of the negligence of the Released Parties, whether
                passive or active. In consideration of being allowed to
                participate in this program, I hereby personally assume all
                risks for any harm, injury or damage, whether foreseen or
                unforeseen, that may befall me while participating in this
                program, including but not limited to the knowledge development,
                confined water and/or open water activities. I further release
                and hold harmless the Discover Scuba Diving program and the
                Released Parties from any claim or lawsuit by me, my family,
                estate, heirs or assigns, arising out of my participation in
                this program. I further understand that skin diving and scuba
                diving are physically strenuous activities and that I will be
                exerting myself during this program and that if I am injured as
                a result of heart attack, panic, hyperventilation, etc., that I
                expressly assume the risk of said injuries and that I will not
                hold the Released Parties responsible for the same. I further
                state that I am of lawful age and legally competent to sign this
                Liability Release and Assumption of Risk Agreement, or that I
                have acquired the written consent of my parent or guardian. I
                understand that the terms herein are contractual and not a mere
                recital and that I have signed this Agreement of my own free act
                and with the knowledge that I hereby agree to waive my legal
                rights. I further agree that if any provision of this Agreement
                is found to be unenforceable or invalid, that provision shall be
                severed from this Agreement. The remainder of this Agreement
                will then be construed as though the unenforceable provision had
                never been contained herein. I understand and agree that I am
                not only giving up my right to sue the Released Parties but also
                any rights my heirs, assigns or beneficiaries may have to sue
                the Released Parties resulting from my death. I further
                represent that I have the authority to do so and that my heirs,
                assigns and beneficiaries will be estopped from claiming
                otherwise because of my representations to the Released Parties.
              </p>
              <p className="mt-2 text-xs">
                I, BY THIS INSTRUMENT, DO EXEMPT AND RELEASE THE DIVE
                PROFESSIONALS CONDUCTING THIS PROGRAM, THE FACILITY THROUGH
                WHICH THE PROGRAM IS CONDUCTED, AND PADI AMERICAS, INC., AND ALL
                RELATED ENTITIES AND RELEASED PARTIES AS DEFINED ABOVE FROM ALL
                LIABILITY OR RESPONSIBILITY WHATSOEVER FOR PERSONAL INJURY,
                PROPERTY DAMAGE OR WRONGFUL DEATH, HOWEVER, CAUSED, INCLUDING
                BUT NOT LIMITED TO THE NEGLIGENCE OF THE RELEASED PARTIES,
                WHETHER PASSIVE OR ACTIVE. I HAVE FULLY INFORMED MYSELF OF THE
                CONTENTS OF THIS LIABILITY RELEASE AND ASSUMPTION OF RISK
                AGREEMENT AND NON-AGENCY DISCLOSURE ACKNOWLEDGMENT AGREEMENT BY
                READING BOTH BEFORE SIGNING BELOW ON BEHALF OF MYSELF AND MY
                HEIRS AND AFFIRMING THE MEDICAL QUESTIONNAIRE IS ACCURATE.
              </p>
            </div>
          ),
        },
        {
          label:
            'By checking this box, i agree to Bermuda DC Terms and Conditions',
          name: 'bermuda_terms_conditions',
          content: (
            <div>
              <ul className="flex flex-col gap-1 ml-2 list-disc">
                <li className="text-xs">
                  BOOKING POLICY: A COMPLETED BOOKING FORM AND DEPOSIT IS
                  REQUIRED TO CONFIRM ANY BOOKING AND THAT NO BOOKING IS
                  CONFIRMED UNTIL BERMUDA DIVING CENTER HAS CONFIRMED THE
                  BOOKING.
                </li>
                <li className="text-xs">
                  CANCELLATION POLICY: DUE TO THE EXCLUSIVE SERVICE THAT WE
                  PROVIDE TO OUR CLIENTS, ALL CANCELLATIONS AND/OR RESERVATIONS
                  CHANGES CAN HARM OUR BUSINESS. ALL OTHER CANCELLATIONS AND/OR
                  RESERVATION CHANGES MADE LESS THAN 48 HOURS PRIOR TO THE
                  CONFIRMED DATE AND TIME OF THE BOOKING FOR ANY REASON
                  WHATSOEVER, WILL RESULT IN THE LOSS OF THE DEPOSIT IN FULL. WE
                  DO THANK YOU FOR YOUR UNDERSTANDING.
                </li>
                <li className="text-xs">
                  BOOKINGS POLICY: BOOKINGS WILL NOT BE REFUNDABLE IN CASE OF A
                  NO SHOW ON EXACT TIMESLOT. BOOKINGS ARE NOT REFUNDABLE IF THE
                  PARTICIPANT DOES NOT MEET THE REQUIREMENTS AS ACKNOWLEDGED AT
                  THE TIME OF BOOKING. BOOKINGS WILL BE CONSIDERED A NO SHOW IF
                  THE CUSTOMER(S) FAIL TO SHOW UP ON THEIR BOOKED TIME SLOT. IN
                  CASE YOU ARE UNABLE TO JOIN YOUR BOOKING DUE TO YOUR OWN
                  MISCONDUCT (RESCHEDULING YOUR BOOKING WITHOUT A MINIMUM OF 48
                  HOURS NOTICE, FAILURE TO SHOW UP ON TIME, BEING UNDER THE
                  INFLUENCE OF ALCOHOL OR DRUGS BEFORE YOUR DIVE OR NOT
                  FOLLOWING OTHER INSTRUCTIONS AND REQUIREMENTS) YOU WILL NOT BE
                  ENTITLED TO GET REFUND.
                </li>
                <li className="text-xs">
                  DIVING AS A CERTIFIED DIVER: ALL CERTIFIED DIVERS MUST SHOW
                  PROOF OF CERTIFICATION AND TO BE SCUBA DIVED NOT MORE THAN 6
                  MONTHS AGO. THIS IS REQUIRED TO DIVE AS A CERTIFIED DIVER, IF
                  YOU FORGET TO BRING IT WITH YOU, WE WILL DO OUR BEST TO LOOK
                  YOU UP ONLINE (PADI), HOWEVER, FAILURE OF ABOVE REQUIRMENTS
                  WILL RESULT IN NOT BEING ABLE TO DIVE AS A CERTIFIED DIVER AND
                  FORFEITURE OF THE DEPOSIT.
                </li>
                <li className="text-xs">
                  PADI INSTRUCTION: YOU WILL BE REQUIRED TO COMPLETE A MEDICAL
                  AND LIABILITY RELEASE IN ORDER TO COMPLETE ANY PADI COURSES,
                  SHOULD YOU HAVE ANY MEDICAL ISSUES OR CONCERNS ON ELIGIBILITY,
                  PLEASE INQUIRE IF THIS WILL AFFECT YOU DIVING PRIOR TO BOOKING
                  ANY SERVICES.
                </li>
                <li className="text-xs">
                  ONCE PADI INSTRUCTION HAS BEGAN: DUE TO ALLOCATION OF
                  INSTRUCTORS, SHOULD YOU FAIL TO SHOW UP FOR AN APPOINTMENT OR
                  REQUEST A CHANGE OF DATE AND/OR TIME LESS THAN 48 HRS PRIOR TO
                  THE CONFIRMED DATE AND/OR TIME FOR ANY PART OF YOUR PADI
                  INSTRUCTION, WE RESERVE THE RIGHT TO CHARGED AN ADDITIONAL 200
                  AED RESCHEDULING FEE PER PERSON ADDITIONALLY TO THE COST OF
                  THE SESSION, FOR US TO RESCHEDULE YOU. ONCE THE DIVER GEAR UP
                  AND/OR ENTERED WATER AND CANCELLED ANYTIME FOR ANY REASON IT
                  WILL COUNT AS A COMPLETED DIVE.
                </li>
                <li className="text-xs">
                  USE OF CAMERAS: IT IS BOTH A PADI AND RSTC (RECREATIONAL SCUBA
                  TRAINING COUNCIL) STANDARD NOT TO ALLOW STUDENTS CONDUCTING A
                  PADI DISCOVER SCUBA (TRYDIVE), PADI SCUBA DIVER OR PADI OPEN
                  WATER COURSE TO USE ANY FORM OF CAMERA EQUIPMENT INCLUDING
                  HANDS FREE CAMERAS LIKE “GOPRO” WHILE DIVING AS YOUR SAFETY IS
                  THE PRIMARY CONCERN. CERTIFIED DIVERS HOWEVER MAY USE CAMERA
                  EQUIPMENT IF THEY DESIRE AT ANY TIME. ON THE RARE OCCASION
                  THAT CAMERA EQUIPMENT USED DURING A VIDEO-RECORDED EXPERIENCE
                  MALFUNCTIONS OR THERE IS A TECHNICAL GLITCH THAT IS BEYOND OUR
                  CONTROL, THE CUSTOMER IS ONLY ELIGIBLE FOR A REFUND OF ANY
                  EXTRA MONEY PAID SPECIFICALLY FOR THE VIDEO EXPERIENCE. VIDEO
                  EXPERIENCES INCLUDED IN THE BOOKING PRICE ARE NOT ELIGIBLE FOR
                  REFUND.
                </li>
                <li className="text-xs">
                  PERSON NOT ELIGIBLE: AS YOU COMFORT AND SAFETY IS PARAMOUNT,
                  PREGNANT WOMEN ARE NOT PERMITTED TO SCUBA DIVE, WE ALSO
                  RESERVE THE RIGHT TO NOT ALLOW ANY PERSONS UNDER THE INFLUENCE
                  OF DRUGS OR ALCOHOL. WE THANK YOU FOR UNDERSTANDING.
                </li>
                <li className="text-xs">
                  FORECAST: DEPTH AND VISIBILITY OF THE WATER ARE SUBJECTED TO
                  NATURAL WEATHER CONDITION. REFUND WILL NOT BE ELIGABLE.
                </li>
                <li className="text-xs">
                  IN CASE OF RED BEACH SAFETY FLAG THE DIVE WILL BE RESCHEDULE
                  FOR THE NEXT AVAILABLE SLOT/DATE. REFUND WILL NOT BE ELIGABLE.
                </li>
                <li className="text-xs">
                  AS THERE IS LIMITED SPACE, ONLY REGISTERED PARTICIPANTS DIVERS
                  CAN ATTEND, ALONG PERSON IS NOT ALLOWED.
                </li>
                <li className="text-xs">
                  LIABILITY RELEASE: NEITHER THE DIVE PROFESSIONALS CONDUCTING
                  THIS PROGRAM, NOR THE FACILITY THROUGH WHICH THIS PROGRAM IS
                  OFFERED, NOR BERMUDA DIVING CENTER, NOR PADI AMERICAS, INC.,
                  NOR ITS AFFILIATE OR SUBSIDIARY CORPORATIONS, NOR ANY OF THEIR
                  RESPECTIVE EMPLOYEES, OFFICERS, AGENTS OR ASSIGNS (HEREINAFTER
                  REFERRED TO AS “RELEASED PARTIES”) MAY BE HELD LIABLE OR
                  RESPONSIBLE IN ANY WAY FOR ANY INJURY, DEATH OR OTHER DAMAGES
                  IN ANY SPORT ACTIVITY (PADDLE BOARDING, SNORKELING,
                  FLYBOARDING, SCUBA DIVING, KITE SURFING) TO ME, MY FAMILY,
                  ESTATE, HEIRS OR ASSIGNS THAT MAY OCCUR AS A RESULT OF MY
                  PARTICIPATION IN THIS PROGRAM OR AS A RESULT OF THE NEGLIGENCE
                  OF THE RELEASED PARTIES, WHETHER PASSIVE OR ACTIVE.
                </li>
                <li className="text-xs">
                  PARTICIPANTS SHALL BEAR THE ENTIRE RISK OF LOSS, THEFT,
                  DESTRUCTION OF OR DAMAGE TO THE EQUIPMENT OR ANY ITEM THEREOF
                  (HEREIN &apos;LOSS OR DAMAGE&apos;) FROM ANY CAUSE WHATSOEVER.
                </li>
                <li className="text-xs">
                  MANAGEMENT WILL NOT ACCEPT RESPONSIBILITY FOR THE LOSS OR
                  DAMAGE TO ANY PERSONAL BELONGINGS LEFT UNATTENDED IN OR OUT OF
                  THE DIVE CENTER AND DIVE SITE.
                </li>
                <li className="text-xs">
                  PRICING: ALL PRICES ARE AS PER WEBSITE.
                </li>
              </ul>
            </div>
          ),
        },
        {
          label:
            'By checking this box, I agree to any or all images and video recordings being taken at the facility for security or promotional purposes.',
          name: 'media_for_promotion',
          content: (
            <div>
              <p className="text-xs">
                This may include imagery of yourself and any other member of
                your group including minors. You understand and explicitly agree
                that photographs or video footage may appear on social media
                platforms including but not limited to Facebook, YouTube,
                Instagram, Twitter and/or Snapchat. You consent on behalf of
                yourself and any members of your party including but not limited
                to dependents and minors in your care to the use of all such
                footage in the manner described above and agree that the purpose
                for using such photos and/or video footage is for advertising,
                marketing and promotional purposes only and is not intended to
                insult, defame or slander any person.
              </p>
            </div>
          ),
        },
      ]
    : [
        {
          label:
            'بوضع علامة في هذا المربع، أوافق على اتفاقية إفصاح غير وكالة والاعتراف',
          name: 'none_agency_disclosure',
          content: (
            <div>
              <p className="mb-2 text-xs">اتفاقية إفصاح غير وكالة والاعتراف</p>

              <p className="text-xs">
                {`أفهم وأوافق على أن أعضاء PADI ("الأعضاء")، بما في ذلك مركز غوص برمودا و/أو أي مدربين فرديين من PADI و DiveMasters المرتبطين بالبرنامج الذي أشارك فيه، مرخصين لاستخدام علامات PADI التجارية المختلفة وإجراء التدريب من PADI، ولكنهم ليسوا وكلاء أو موظفين أو مستفيدين من PADI Americas, Inc، أو شركاتها الأم، الفرعية والتابعة ("PADI"). وأفهم أيضًا أن أنشطة الأعضاء التجارية مستقلة، ولا تملك ولا تديرها PADI، وبينما تحدد PADI معايير برامج تدريب الغواصين من PADI، إلا أنها غير مسؤولة عن، ولا تملك الحق في التحكم في، تشغيل أنشطة الأعضاء التجارية وسلوك البرامج اليومي من PADI وإشراف الغواصين من قِبل الأعضاء أو الموظفين المرتبطين بهم. وأفهم وأوافق أيضًا نيابة عن نفسي وورثتي وممتلكاتي أنه في حالة الإصابة أو الوفاة خلال هذا النشاط، لا أستطيع أنا ولا ممتلكاتي محاسبة PADI على أفعال أو إهمال مركز غوص برمودا و/أو المدربين و DiveMasters المرتبطين بالنشاط.
`}
              </p>
            </div>
          ),
        },
        {
          label:
            'بوضع علامة في هذا المربع، أوافق على إفراج عن المسؤولية واتفاقية تحمل المخاطر',
          name: 'liabiality_release',
          content: (
            <div>
              <p className="text-xs">
                {`أنا، بموجب هذا الأداة، أؤكد أنني على دراية بأن الغوص تحت الماء والغوص الجلدي لهما مخاطر جوهرية قد تؤدي إلى إصابة خطيرة أو وفاة. أفهم أن الغوص مع الهواء المضغوط ينطوي على مخاطر جوهرية؛ يمكن أن تحدث مرض الانضغاط، الانسداد الهوائي، أو إصابات هايبربارية أخرى تتطلب العلاج في غرفة الضغط. أفهم أيضًا أن هذا البرنامج قد يُجرى في موقع نائي، سواء من حيث الزمن أو المسافة أو كلاهما، من مثل غرفة الضغط. أختار متابعة هذا البرنامج على الرغم من عدم وجود غرفة ضغط أو منشأة طبية بالقرب من موقع الغوص. المعلومات التي قدمتها حول تاريخي الطبي في الاستبيان الطبي دقيقة على حد علمي. أوافق على تحمل المسؤولية عن الإغفال بخصوص عدم الكشف عن أي ظروف صحية موجودة أو ماضية. أفهم وأوافق على أنه لا يمكن محاسبة المحترفين الغواصين الذين يجرون هذا البرنامج، ولا مركز غوص برمودا، ولا المنشأة التي يتم تقديم هذا البرنامج من خلالها، ولا PADI Americas, Inc.، ولا شركاتها التابعة أو الفرعية، ولا أي من موظفيها أو موظفيها أو وكلائها أو المعينين (ويشار إليهم هنا بـ "الأطراف المفرجة") مسؤولين أو مسؤولين بأي شكل من الأشكال عن أي إصابة أو وفاة أو أضرار أخرى لي، أو عائلتي، أو ممتلكاتي، أو ورثتي أو معيني الذين قد يحدثون نتيجة مشاركتي في هذا البرنامج أو نتيجة إهمال الأطراف المفرجة، سواء كانت سلبية أو نشطة. وبالنظر للسماح لي بالمشاركة في هذا البرنامج، أتحمل شخصيًا جميع المخاطر لأي ضرر، إصابة أو ضرر، سواء كان متوقعًا أو غير متوقع، قد يحل بي أثناء المشاركة في هذا البرنامج، بما في ذلك ولكن لا تقتصر على تطوير المعرفة، والمياه المحصورة و/أو الأنشطة المفتوحة بالمياه.`}
              </p>
            </div>
          ),
        },
        {
          label:
            'من خلال التحقق من هذا المربع، أوافق على شروط وأحكام مركز الغوص في برمودا.',
          name: 'bermuda_terms_conditions',
          content: (
            <div>
              <ul className="flex flex-col gap-1 ml-2 list-disc">
                <li className="text-xs">
                  سياسة الحجز: يتطلب تقديم نموذج الحجز المكتمل ودفع مبلغ التأمين
                  لتأكيد أي حجز، وأنه لا يتم تأكيد أي حجز حتى يقوم مركز الغوص في
                  برمودا بتأكيد الحجز.
                </li>
                <li className="text-xs">
                  سياسة الإلغاء: نظرًا للخدمة الحصرية التي نقدمها لعملائنا، يمكن
                  أن تؤدي جميع عمليات الإلغاء و/أو تغييرات الحجوزات إلى الإضرار
                  بأعمالنا. جميع عمليات الإلغاء و/أو تغييرات الحجز الأخرى التي
                  تتم قبل 48 ساعة فقط من تاريخ ووقت التأكيد للحجز بأي سبب من
                  الأسباب، ستؤدي إلى فقدان المبلغ المدفوع بالكامل. نشكركم على
                  تفهمكم.
                </li>
                <li className="text-xs">
                  سياسة الحجوزات: لا يمكن استرداد مبالغ الحجز في حالة عدم الحضور
                  في الوقت المحدد. لا يمكن استرداد مبالغ الحجز إذا لم يتوافق
                  المشارك مع المتطلبات كما تم الاعتراف بها في وقت الحجز. ستعتبر
                  الحجوزات عدم حضور إذا تخلف العميل (أو العملاء) عن الحضور في
                  وقت الحجز المحجوز. في حال كنت غير قادر على الانضمام إلى حجزك
                  بسبب سوء تصرفك الخاص (إعادة جدولة حجزك دون إشعار قبل 48 ساعة
                  على الأقل، عدم الحضور في الوقت المحدد، تأثرك بالكحول أو
                  المخدرات قبل الغوص، أو عدم اتباع التعليمات والمتطلبات الأخرى)
                  فلن تكون مستحقًا لاسترداد المبلغ.
                </li>
                <li className="text-xs">
                  الغوص كغواص معتمد: يجب على جميع الغواصين المعتمدين أن يقدموا
                  دليلًا على شهادتهم وأن يكون آخر غوص لهم لا يزيد عن 6 أشهر.
                  يُطلب ذلك للغوص كغواص معتمد، إذا نسيت إحضاره معك، سنبذل قصارى
                  جهدنا للبحث عن معلوماتك عبر الإنترنت (PADI)، ومع ذلك، فإن عدم
                  استيفاء المتطلبات المذكورة أعلاه سيؤدي إلى عدم القدرة على
                  الغوص كغواص معتمد وفقدان المبلغ المدفوع مسبقًا.
                </li>
                <li className="text-xs">
                  تعليم PADI: سيُطلب منك إكمال استبيان طبي واتفاقية إطلاق
                  المسؤولية لإكمال أي دورات PADI، إذا كانت لديك أية مشكلات طبية
                  أو مخاوف بخصوص الأهلية، يرجى الاستفسار إذا كان ذلك سيؤثر على
                  إمكانية الغوص قبل حجز أي خدمات.
                </li>
                <li className="text-xs">
                  بمجرد بدء التعليم الخاص بـ PADI: نظرًا لتخصيص المدربين، إذا
                  فشلت في الحضور في موعد مسبق أو طلبت تغيير التاريخ و/أو الوقت
                  قبل أقل من 48 ساعة من تاريخ و/أو وقت التأكيد لأي جزء من تعليمك
                  مع PADI، نحتفظ بالحق في فرض رسوم إعادة جدولة إضافية قيمتها 200
                  درهم إماراتي لكل شخص بالإضافة إلى تكلفة الجلسة، لنقوم بإعادة
                  جدولتك. بمجرد أن يقوم الغواص بتجهيز نفسه و/أو دخول الماء وتم
                  إلغاء الغوص في أي وقت لأي سبب كان سيتم احتسابه كغوص مكتمل.
                </li>
                <li className="text-xs">
                  {`استخدام الكاميرات: من المعتاد وفقًا لمعايير PADI و RSTC (مجلس تدريب الغوص الترفيهي) ألا يُسمح للطلاب الذين يقومون بدورة PADI Discover Scuba (Trydive) أو PADI Scuba Diver أو PADI Open Water باستخدام أي نوع من معدات الكاميرا، بما في ذلك الكاميرات الخالية من اليدين مثل "جوبرو" أثناء الغوص، حيث أن سلامتكم هي الاهتمام الأساسي. بالنسبة للغواصين المعتمدين، يمكنهم استخدام معدات الكاميرا في أي وقت إذا رغبوا في ذلك. في حالة الحالات النادرة التي يحدث فيها عطل في معدات الكاميرا المستخدمة خلال تجربة تسجيل الفيديو أو يحدث خلل تقني خارج عن سيطرتنا، فإن العميل مؤهل فقط لاسترداد أي مبلغ إضافي دفع خصيصًا لتجربة الفيديو. تجارب الفيديو المدرجة في سعر الحجز غير مؤهلة للاسترداد.`}
                </li>
                <li className="text-xs">
                  الأشخاص غير المؤهلين: نظرًا لأهمية راحتك وسلامتك، لا يُسمح
                  للنساء الحوامل بممارسة الغوص بالزعانف، كما نحتفظ بالحق أيضًا
                  في عدم السماح بممارسة الغوص لأي شخص تحت تأثير المخدرات أو
                  الكحول. نشكركم على تفهمكم.
                </li>
                <li className="text-xs">
                  التوقعات: عمق المياه والرؤية تتوقفان على ظروف الطقس الطبيعية.
                  لن يتم التأهل للاسترداد.
                </li>
                <li className="text-xs">
                  في حالة رفع علم السلامة الأحمر على الشاطئ، سيتم إعادة جدولة
                  الغوص للفترة/التاريخ المتاحة التالية. لن يتم التأهل للاسترداد.
                </li>
                <li className="text-xs">
                  نظرًا لتوافر مساحة محدودة، يُسمح فقط للغواصين المسجلين
                  بالحضور، ولا يُسمح بحضور شخص إضافي.
                </li>
                <li className="text-xs">
                  {`اتفاقية إطلاق المسؤولية: لا يمكن مطالبة أي من المحترفين في الغوص الذين يُنفذون هذا البرنامج، أو المنشأة التي يُقدَم بها هذا البرنامج، أو مركز غوص برمودا، أو PADI Americas, Inc.، أو أي من شركاتها التابعة أو الفرعية، أو أي من موظفيها، أو مسؤوليها، أو وكلائها (والذين سيُشار إليهم فيما بعد باسم "الأطراف المعنية") بأي طريقة من الطرق عن أي إصابة أو وفاة أو أضرار أخرى في أي نشاط رياضي (مثل ركوب الألواح الشراعية، والغطس بالتنقل، ورياضة الطيران على الماء، والغوص بالزعانف، ورياضة ركوب الأمواج بالطاقة الهوائية) لي، أو لعائلتي، أو لممتلكاتي، أو لورثتي، أو وكلائي الذين قد يحدثون نتيجة لمشاركتي في هذا البرنامج أو نتيجة لإهمال الأطراف المعنية، سواء كان هذا الإهمال سلبيًا أم إيجابيًا.`}
                </li>
                <li className="text-xs">
                  {`يتحمل المشاركون كامل مخاطر الفقدان، أو السرقة، أو التدمير، أو الضرر بالمعدات أو أي عنصر منها (والمعروف هنا باسم 'الفقدان أو الضرر') نتيجة لأي سبب كان.`}
                </li>
                <li className="text-xs">
                  إدارة المركز غير مسؤولة عن فقدان أو ضرر أي ممتلكات شخصية تُركت
                  دون مراقبة داخل أو خارج مركز الغوص وموقع الغوص.
                </li>
                <li className="text-xs">
                  الأسعار: جميع الأسعار حسب ما هو موجود على الموقع الإلكتروني.
                </li>
              </ul>
            </div>
          ),
        },
        {
          label:
            'بالتحقق من هذه الخانة، أوافق على التصوير بالصور أو بالفيديو أثناء التسجيل في المنشأة لأغراض الأمان أو الترويج.',
          name: 'media_for_promotion',
          content: (
            <div>
              <p className="text-xs">
                قد يشمل ذلك صورًا لك ولأي عضو آخر في مجموعتك بما في ذلك القصّر.
                تفهم وتوافق صراحة على أنه قد يتم عرض الصور أو لقطات الفيديو على
                منصات وسائل التواصل الاجتماعي بما في ذلك ولكن لا يقتصر على
                Facebook وYouTube وInstagram وTwitter و/أو Snapchat. تقدم
                موافقتك نيابة عن نفسك وعن أي من أعضاء مجموعتك بما في ذلك القصر
                والأشخاص المعتمدين عليك بأن تُستخدم جميع هذه اللقطات بالطريقة
                الموجودة أعلاه وتوافق على أن الغرض من استخدام هذه الصور و/أو
                لقطات الفيديو هو الإعلان والتسويق وأغراض الترويج فقط وليس لغرض
                إهانة أو تشهير أو تشهير أي شخص.
              </p>
            </div>
          ),
        },
      ];
};

export const getHeading = (router) => {
  const { query } = router;
  const { pathname } = router;

  if (query.name) {
    return query.name;
  } else {
    if (pathname.includes('dsd-boat-tourism')) {
      return 'DSD Boat Trip';
    } else if (pathname.includes('dsd-tourism')) {
      return 'Try Scuba Diving';
    }
  }
};
