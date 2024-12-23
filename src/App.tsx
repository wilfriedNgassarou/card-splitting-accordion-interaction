import { useState } from "react";
import { DropDown } from "./components/dropdown";
import { LayersSVG } from "./components/svgs/layers-svg";
import { PaperPlane } from "./components/svgs/paper-plane-svg";
import { TouchPressSVG } from "./components/svgs/touch-press";
import { SpeedoMeterSVG } from "./components/svgs/speedometer-svg";
import { TargetSVG } from "./components/svgs/target-svg";
import { Credits } from "./components/credits";

function App() {
  const items = [
    {
      icon: <TargetSVG size={22} />,
      title: 'What is Interaction Design',
      description: 'Designing how users interact with digital interfaces with intuitive experiences.'
    },
    {
      icon: <LayersSVG size={22} />,
      title: 'Principles & Patterns',
      description: 'Fundamental guidelines and repeated solutions that ensure consistency and usability in design.'
    },
    {
      icon: <TouchPressSVG size={22} />,
      title: 'Usability & Accessibility',
      description: 'Focusing on making digital designs easy to use and accessible for everyone, including those with disabilities.'
    },
    {
      icon: <PaperPlane size={22} />,
      title: 'Prototyping & Testing',
      description: 'Creating interactive models of digital designs to test and validate functionality, user flows, and overall usability before development.'
    },
    {
      icon: <SpeedoMeterSVG size={22} />,
      title: 'UX Optimisation',
      description: 'Improving the overall user experience by enhancing usability and satisfaction.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  
  return (
    <section className="min-h-[500px] lg:h-dvh lg:overflow-hidden w-full flex justify-center items-center">
      <Credits />
      <section className="flex flex-col">
        {
          items.map((item, index, array) => {

            return (
              <DropDown
                key={index}
                index={index}
                isFirstIndex={ index == 0 }
                isLastIndex={ (array.length - 1) == index }
                isActive={ activeIndex == index}
                isPreviousActive={activeIndex == ( index - 1 )}
                isNextActive={ activeIndex == ( index + 1 ) }
                item={item}
                setActiveIndex={setActiveIndex} 
              />
            )
          })
        }
      </section>
    </section>
  )
}

export default App
