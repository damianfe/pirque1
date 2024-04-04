import { useActiveSectionContext } from '@/context/active-section-context';
import { AnimationDefinition, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useInterSection = (section: string, animation: AnimationDefinition) => {
    const control = useAnimation();
    const elementRef = useRef(null);
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    control.start(animation);
                    if (section !== "") {
                        setActiveSection(section);
                    }
                }
            },
            {
                threshold: 0.75,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [control, animation, section, setActiveSection]);

    return { elementRef, control };
};

export default useInterSection;