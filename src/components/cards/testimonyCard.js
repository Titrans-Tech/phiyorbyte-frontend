import { VerifiedIcon } from "../icons";

export const TestimonyCard = () => {
  return (
    <section className="border max-w-sm border-[#0000001A] rounded-[20px] px-3 py-5 ">
      <img className="w-20" src="/assets/star-rating.png" alt="" />
      <div className="flex items-center gap-1">
        <h3 className="font-bold text-lg">Sarah M.</h3>
        <VerifiedIcon />
      </div>
      <p className="text-base font-normal">
        &apos;I&apos;m blown away by the quality and style of the clothes I received from
        Phiyorbyte. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded
        my expectations.&apos;
      </p>
    </section>
  );
};
