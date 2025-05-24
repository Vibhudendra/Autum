import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {

    const frameRef = useRef('null');

    const handleMouseLeave = () => {

        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut",
        });
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 300,
            ease: "power1.inOut",
        });
    };

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className="flex size-full flex-col items-center py-10 pb-4">
                <p className='font-general text-sm uppercase md:text-[10px]'>The Multiversal Madness</p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title='Welc<b>o</b>me to <br/> the Hid<b>d</b>en Real<b>m</b>'
                        sectionId="#story"
                        AdditionalClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src='/img/entrance.webp'
                                    className='object-contain'
                                    alt='entrance'
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p
                            className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                            Where Realms converge and stories mingle, <br/>Discover its secrets and shape your fate <br/> amidst chaos
                        </p>
                        <Button id='realm-button' title='Discover' AdditionalClasses='mt-5' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story