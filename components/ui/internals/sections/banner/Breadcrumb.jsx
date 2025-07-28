import Link from 'next/link';

const Breadcrumb = ({ home = true, lv1T, lv1L, lv2T, lv2L, lv3T, lv3L }) => {
  return (
    <>
      {home && (
        <Link href="/" className="text-[#e9e9e9] text-base">
          Home /{' '}
        </Link>
      )}
      <span className="text-[#e9e9e9] text-base">{lv1T && !lv2T && lv1T}</span>
      {lv1T && lv2T && (
        <Link href={lv1L} className="text-[#e9e9e9] text-base">
          {lv1T}
        </Link>
      )}
      <span className="text-[#e9e9e9] text-base">{lv2T && !lv2L && lv2T}</span>
      {lv2T && lv2L && (
        <Link href={lv2L} className="text-[#e9e9e9] text-base">
          {lv2T}
        </Link>
      )}
      <span className="text-[#e9e9e9] text-base">{lv3T && !lv3L && lv3T}</span>
      {lv3T && lv3L && (
        <Link href={lv3L} className="text-[#e9e9e9] text-base">
          {lv3T}
        </Link>
      )}
    </>
  );
};

export default Breadcrumb;
