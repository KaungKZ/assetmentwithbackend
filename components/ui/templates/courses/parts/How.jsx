/* eslint-disable @next/next/no-img-element */
import ListItem from '../../../internals/parts/ListItem';

const How = ({ heading, description, steps }) => {
  return (
    <>
      <h2 className="text-2xl lg:text-[30px]">{heading}</h2>
      {description && (
        <div className="flex flex-col my-6 font-thin gap-y-4">
          {description.map((tag) => tag)}
        </div>
      )}

      <div className="flex flex-col justify-center gap-8 mt-10 md:flex-row">
        {steps.one && (
          <div className="flex-1 max-w-[385px]">
            <div className="w-full overflow-hidden rounded">
              <img
                src={steps.one.imageSrc}
                alt={steps.one.imageAlt}
                width={500}
                height={500}
                className="h-full duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <p className="mb-2 text-base font-normal tracking-wider text-gray-500 uppercase font-noto">
                {steps.one.tagline}
              </p>
              <h3 className="text-lg font-bold">
                <span className="px-[9px] py-1 text-white text-sm rounded-full bg-bermuda-200 mr-2">
                  1
                </span>
                {steps.one.heading}
              </h3>

              <div className="flex flex-col mt-5 font-thin text-gray-500 gap-y-4">
                {steps.one.paragraphs && steps.one.paragraphs.map((p) => p)}

                {steps.one.list && (
                  <ul className="list">
                    {steps.one.list.map((item, index) => (
                      <ListItem
                        key={index}
                        name={item.name}
                        value={item.value}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 max-w-[385px]">
          <div className="w-full overflow-hidden rounded">
            <img
              src={steps.two.imageSrc}
              alt={steps.two.imageAlt}
              width={500}
              height={500}
              className="h-full duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-5">
            <p className="mb-2 text-base font-normal tracking-wider text-gray-500 uppercase font-noto">
              {steps.two.tagline}
            </p>
            <h3 className="text-lg font-bold">
              <span className="px-[8px] py-1 mr-2 text-sm text-white rounded-full bg-bermuda-200">
                {steps.one ? 2 : 1}
              </span>
              {steps.two.heading}
            </h3>

            <div className="flex flex-col mt-5 font-thin text-gray-500 gap-y-4">
              {steps.two.paragraphs && steps.two.paragraphs.map((p) => p)}

              {steps.two.list && (
                <ul className="list">
                  {steps.two.list.map((item, index) => (
                    <ListItem key={index} name={item.name} value={item.value} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-[385px]">
          <div className="w-full overflow-hidden rounded">
            <img
              src={steps.three.imageSrc}
              alt={steps.three.imageAlt}
              width={500}
              height={500}
              className="h-full duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-5">
            <p className="mb-2 text-base font-normal tracking-wider text-gray-500 uppercase font-noto">
              {steps.three.tagline}
            </p>
            <h3 className="text-lg font-bold">
              <span className="px-2 py-1 mr-2 text-sm text-white rounded-full bg-bermuda-200">
                {steps.one ? 3 : 2}
              </span>
              {steps.three.heading}
            </h3>

            <div className="flex flex-col mt-5 font-thin text-gray-500 gap-y-4">
              {steps.three.paragraphs && steps.three.paragraphs.map((p) => p)}

              {steps.three.list && (
                <ul className="list">
                  {steps.three.list.map((item, index) => (
                    <ListItem key={index} name={item.name} value={item.value} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
