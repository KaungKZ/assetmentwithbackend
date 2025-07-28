const PadiStatement = ({ lang }) => {
  const isEng = lang === 'en';

  return (
    <div dir={isEng ? 'ltr' : 'rtl'}>
      <div>
        <h2 className="text-sm">
          {isEng
            ? 'PADI Discover Scuba Diving Statement'
            : 'بيان مشارك PADI Discover Scuba® Diving'}
        </h2>
        <div className="overflow-scroll leading-4.5 text-gray-500 h-[200px] border border-gray-500 rounded p-3 text-xs mt-2">
          {isEng
            ? `Read the following paragraphs carefully. This statement, which
          includes a Medical Questionnaire, a Liability Release and Assumption
          of Risk Agreement (Statement of Risks and Liability), Non-Agency
          Disclosure and Acknowledgment and the Discover Scuba Diving Knowledge
          and Safety Review, informs you of some potential risks involved in
          scuba diving and of the conduct required of you during the PADI
          Discover Scuba Diving program. If you are a minor, your parent or
          guardian must read this Guide and sign on the back panel. You will
          also need to learn important safety rules regarding breathing and
          equalization while scuba diving from the PADI Professional. Scuba
          diving and the use of scuba equipment without proper supervision or
          instruction can result in serious injury or death. You must be
          instructed in its use under the direct supervision of a qualified
          instructor`
            : `اقرأ الفقرات التالية بعناية. هذا البيان، الذي يشمل استبيانا طبيا، إفراجا عن المسؤولية واتفاقية تحمل المخاطر (بيان المخاطر والمسؤولية)، إفصاح غير وكالة والاعتراف واستعراض المعرفة والسلامة لاكتشاف الغوص، يُبلغك ببعض المخاطر المحتملة المرتبطة بالغوص وسلوك المطلوب منك خلال برنامج PADI Discover Scuba Diving. إذا كنت قاصرًا، يجب على والدك أو وصيك قراءة هذا الدليل والتوقيع على اللوحة الخلفية. ستحتاج أيضًا إلى تعلم قواعد السلامة المهمة بخصوص التنفس والتكافؤ أثناء الغوص من المحترف PADI. يمكن أن يؤدي الغوص واستخدام معدات الغوص بدون إشراف أو تعليم مناسب إلى إصابة خطيرة أو وفاة. يجب تعليمك في استخدامه تحت إشراف مباشر لمدرب مؤهل.
            `}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-sm">
          {isEng ? 'PADI Medical Questionnaire' : 'استبيان طبي PADI'}
        </h2>
        <div className="overflow-scroll leading-4.5 text-gray-500 h-[200px] border border-gray-500 rounded p-3 text-xs mt-2">
          {isEng
            ? `Scuba diving is an exciting and demanding activity. To scuba dive you
          must not be extremely overweight or out of condition. Diving can be
          strenuous under certain conditions. Your respiratory and circulatory
          systems must be in good health. All body air spaces must be normal and
          healthy. A person with heart trouble, a current cold or congestion,
          epilepsy, asthma, a severe medical problem, or who is under the
          influence of alcohol or drugs, should not dive. If taking medication,
          consult your doctor before participating in this program. The purpose
          of the Medical Questionnaire is to find out if you should be examined
          by a physician before participating in recreational scuba diving. A
          positive response to a question does not necessarily disqualify you
          from diving. A positive response means that there is a preexisting
          condition that may affect your safety while diving and you must seek
          the advice of a physician. Please answer the following questions on
          your past and present medical history with a YES or NO. If you are not
          sure, answer YES. If any of these items apply to you, we must request
          that you consult with a physician prior to participating in scuba
          diving. Your PADI Professional will supply you with a PADI Medical
          Statement and Guidelines for Recreational Scuba Diver’s Physical
          Examination to take to a physician. The purpose of this Medical
          Questionnaire is to find out if you should be examined by your doctor
          before participating in diving activity. A positive response to a
          question does not necessarily disqualify you from diving. A positive
          response means that there is a preexisting condition that may affect
          your safety while diving and you must seek the advice of your
          physician prior to engaging in dive activities.`
            : `الغوص هو نشاط مثير ومطلوب. لممارسة الغوص يجب ألا تكون بدينًا بشكل شديد أو خارج الحالة. يمكن أن يكون الغوص مجهدًا تحت بعض الظروف. يجب أن تكون أنظمتك التنفسية والدورية في صحة جيدة. يجب أن تكون جميع فراغات الهواء في الجسم طبيعية وصحية. لا يجب أن يغوص شخص لديه مشكلة قلبية، زكام حالي أو احتقان، صرع، ربو، مشكلة طبية شديدة، أو هو تحت تأثير الكحول أو المخدرات. إذا كنت تتناول الدواء، استشر طبيبك قبل المشاركة في هذا البرنامج. الغرض من الاستبيان الطبي هو معرفة ما إذا كان يجب فحصك من قِبل الطبيب قبل المشاركة في الغوص الترفيهي. لا يعني الرد الإيجابي على سؤال بالضرورة أن تكون غير مؤهل للغوص. يعني الرد الإيجابي أن هناك حالة موجودة مسبقًا قد تؤثر على سلامتك أثناء الغوص ويجب أن تطلب نصيحة طبيبك. يرجى الإجابة على الأسئلة التالية حول تاريخك الطبي الماضي والحالي بنعم أو لا. إذا لم تكن متأكدًا، أجب بنعم. إذا كان أي من هذه العناصر ينطبق عليك، يجب أن نطلب منك التشاور مع الطبيب قبل المشاركة في الغوص. سيزودك محترف PADI ببيان طبي من PADI وإرشادات للفحص الطبي للغواص الترفيهي لتأخذها إلى الطبيب. الغرض من هذا الاستبيان الطبي هو معرفة ما إذا كان يجب فحصك من قبل الطبيب قبل المشاركة في نشاط الغوص. لا يعني الرد الإيجابي على سؤال بالضرورة أن تكون غير مؤهل للغوص. يعني الرد الإيجابي أن هناك حالة موجودة مسبقًا قد تؤثر على سلامتك أثناء الغوص ويجب أن تطلب نصيحة طبيبك قبل الانخراط في أنشطة الغوص.
            `}
        </div>
      </div>
    </div>
  );
};

export default PadiStatement;
