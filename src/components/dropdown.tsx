import { AnimatePresence, motion } from "framer-motion"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { ArrowSVG } from "./svgs/arrow-svg";

interface Props {
  index: number,
  item: { icon: ReactNode, title: string, description: string },
  isFirstIndex: boolean,
  isLastIndex: boolean,
  isActive: boolean,
  isPreviousActive: boolean,
  isNextActive: boolean,
  setActiveIndex: Dispatch<SetStateAction<number | null>>
}

export function DropDown({ 
  index, 
  item,
  setActiveIndex,
  isActive,
  isFirstIndex,
  isLastIndex,
  isNextActive,
  isPreviousActive 
}: Props) {
  
  const defaultRadius = 16;
  const defaultBorderWidth = 1 ;

  const margin = 12;

  let borderTopLeftRadius = 0 ;
  let borderTopRightRadius = 0 ;
  let borderBottomLeftRadius = 0 ;
  let borderBottomRightRadius = 0 ;

  let borderTopWidth = 0;
  let borderBottomWidth = 0;
      

  if(isFirstIndex) {

    borderTopWidth = defaultBorderWidth ;

    borderTopLeftRadius = borderTopRightRadius = defaultRadius;
    
    if(isActive || isNextActive) {
      borderBottomWidth = defaultBorderWidth;

      borderBottomRightRadius = borderBottomLeftRadius = defaultRadius;
    }

  } else if (isLastIndex) {
    borderBottomWidth = defaultBorderWidth ;

    borderBottomLeftRadius = borderBottomRightRadius = defaultRadius;

    if(isActive || isPreviousActive) {
      borderTopWidth = defaultBorderWidth;

      borderTopLeftRadius = borderTopRightRadius = defaultRadius
    }
  
  } else {
    
    if(isActive || isPreviousActive) {
      borderTopWidth = defaultBorderWidth;

      borderTopLeftRadius = borderTopRightRadius = defaultRadius
    }
    
    if(isActive || isNextActive) {
      borderBottomWidth = defaultBorderWidth ;
      
      borderBottomLeftRadius = borderBottomRightRadius = defaultRadius  
    }
  }

  return (
    <motion.div
      layout
      onClick={() => setActiveIndex( isActive ? null : index)}
      initial={{
        marginTop: isFirstIndex ? 0 : isActive ? margin : 0,
        marginBottom: isLastIndex ? 0 : isActive ? margin : 0,
        borderTopLeftRadius, 
        borderTopRightRadius, 
        borderBottomLeftRadius, 
        borderBottomRightRadius, 
      }}
      animate={{
        marginTop: isFirstIndex ? 0 : isActive ? margin : 0,
        marginBottom: isLastIndex ? 0 : isActive ? margin : 0,
        borderTopLeftRadius, 
        borderTopRightRadius, 
        borderBottomLeftRadius, 
        borderBottomRightRadius
      }}
      transition={{ duration: .8, type: 'spring', bounce: 0.5 }}
      style={{ 
        borderTopWidth,
        borderBottomWidth,
        borderLeftWidth: defaultBorderWidth,
        borderRightWidth: defaultBorderWidth
      }}
      className="w-80 border-gray-400 overflow-hidden"
    >
      <motion.div 
        layout
        initial={{ padding: 3 }}
        animate={{ padding: isActive ? 0 : 3 }}
        transition={{ duration: .15, type: 'tween', ease: 'easeInOut' }}
        className="h-full w-full"
      >
        <div 
          className={` 
            ${isActive ? 'bg-gray-400/5' : 'hover:bg-gray-400/5 bg-transparent'} 
            h-full duration-150 cursor-default rounded-xl p-2
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.span layout="position">
                {item.icon}
              </motion.span>
              <motion.span 
                layout="position"
                className="font-medium"
              >
                {item.title}
              </motion.span>
            </div>
            <motion.span
              layout
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: .2 }}
            >
              <ArrowSVG size={16} />
            </motion.span>
          </div>
          <AnimatePresence mode="popLayout">
            {
              isActive && (
                <motion.div
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }} 
                  exit={{ opacity: 0, transition: { duration: .15 } }}
                  className="mt-2 text-sm mr-4"
                >
                  {
                    item.description
                  }
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}