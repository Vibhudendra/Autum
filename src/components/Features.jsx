import { useRef, useState } from "react";
import { TiLocation, TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {

  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

    setTransformStyle(newTransform);
  }

  const handleMouseLeave = () => {
    setTransformStyle("");
  }

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full rounded-lg">
      <video
        src={src}
        loop muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base md:max-w-96">{description}</p>
          )}
        </div>
      </div>
      {title}
    </div>
  )
}


const Features = () => {



  return (
    <section className='bg-black pb-52'>
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className='font-circular-web text-lg text-blue-50'>
            Into the Layer of Depth
          </p>
          <p className='max-w-md font-robert-regular text-sm text-blue-50 opacity-50'>
            Immerse yourself in a world where you can see a vibrant array of stories all converging in one place
          </p>

          {/* Bento Card 1 */}
          <BentoTilt className="border-hsla relative mt-3 mb-7 h-96 w-full overflow-hidden rounded-lg md:h-[65vh]">
            <BentoCard
              src='/videos/feature-1.mp4'
              title={<>RADIA<b>N</b>T</>}
              description="A Cross-platform app, that turns games into rewarding adventure"
            //isComingSoon
            />
          </BentoTilt>

          {/* Bento Card 2 */}
          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="/videos/feature-2.mp4"
                title={<>AUTU<b>M</b>N </>}
                description='An anime Insipred Collection - Primed for expansion'
              />
            </BentoTilt>

            {/* Bento Card 3 */}
            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                src='/videos/feature-3.mp4'
                title={<>N<b>E</b>XUS</>}
                description='A gamified social hub, adding new dimension to social interactioon'
              />
            </BentoTilt>

            {/* Bento Card 3 */}
            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
              <BentoCard
                src='/videos/feature-4.mp4'
                title={<>A<b>Z</b>UL</>}
                description='A cross world AI agent , Elevating gameplay to be more smooth and engaging'
              />
            </BentoTilt>

            {/* Bento Card 4 */}
            <div className="bento-tilt_2">
              <BentoTilt className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64">M<b>o</b>re co<b>m</b>ing soo<b>n</b></h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </BentoTilt>
            </div>

            {/* Bento Card 5 */}
            <BentoTilt className="bento-tilt_2">
              <video
                src="/videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>


        </div>
      </div>

    </section>
  )
}

export default Features