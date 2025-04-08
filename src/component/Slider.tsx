import {useState, useEffect, useRef} from 'react'
import company from '../models/Company'
import {motion, AnimatePresence} from 'framer-motion'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import '../styles/slider.css'
import {Link} from "react-router-dom";


export default function Slider() {
    const [index, setIndex] = useState<number>(0)
    const [state, setState] = useState<boolean>(true)

    const appRunning = useRef(false)
    let timerRef = useRef<number | undefined>(undefined)

    const updateIndex = (increment: boolean) => {
        setState(false)
        setIndex(pre => {
            let number = increment ? pre + 1 : pre - 1

            if (number < 0 || number >= company.banner.length) {
                number = (number < 0 ? number + company.banner.length : number) % company.banner.length
            }

            const sliderElement = document.getElementById('image-list-slider');
            const bannerElement = document.getElementById(`banner${number}`);

            if (sliderElement && bannerElement) {
                const bannerOffsetLeft = bannerElement.offsetLeft;
                sliderElement.scrollTo({
                    left: bannerOffsetLeft,
                    behavior: 'smooth',
                });
            }
            return number
        })


        clearInterval(timerRef.current)
        triggerTimer()
        setTimeout(() => setState(true), 600)
    }

    const triggerTimer = () => {
        timerRef.current = setInterval(() => updateIndex(true), 5000)
    }

    useEffect(() => {
        if (appRunning.current) return;
        appRunning.current = true
        triggerTimer()
    }, [])


    return (
        <div className='slider h-[61vh] md:h-[91vh]' id='slider'>
            <div className="background-blur"></div>
            <div className="image-list-slider" id='image-list-slider'>
                {
                    company.banner.map((element, thisIndex) => {
                        return (
                            <div className="image-container" key={thisIndex}>
                                <motion.img
                                    initial={{scale: 1}}
                                    animate={{
                                        scale: index === thisIndex ? 1.5 : 1,
                                        transition: {duration: index === thisIndex ? 25 : 0.2}
                                    }}
                                    src={element.imageLink} alt="image not loading" key={thisIndex}
                                    id={`banner${thisIndex}`}/>
                            </div>
                        )
                    })

                }

            </div>

            <div className="container slider-content relative" style={{height: '100%'}}>

                <div className="center-line">
                    <div className="arrow bg-green-900/50" onClick={() => updateIndex(false)}><ArrowLeftOutlined
                        style={{fontSize: '24px'}}/></div>

                    <div className="wrapper">
                        <AnimatePresence>
                            {state &&
                                <motion.div
                                    initial={{opacity: 0, y: 100}}
                                    exit={{opacity: 0, y: -100}}
                                    animate={{opacity: 1, y: 0}}
                                    className="container flex-col items-center">
                                    <h1 className="font-bold text-center title max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl min-2xl:text-6xl mb-5 ">{company.banner[index].heading}</h1>
                                    <h3 className=" description text-center max-[350px]:text-[10px] text-[13px] md:text-lg min-2xl:text-2xl">{company.banner[index].description}</h3>
                                    <div>
                                        <Link to="/aboutus">
                                            <button
                                                className="font-bold border-1 rounded mx-1 px-4 py-2 md:mx-3 sm:px-7 sm:py-3 text-center bg-[var(--color-primary)] m-8 max-w-[300px] max-sm:text-xs text-sm md:text-base min-2xl:text-lg">
                                                Abot US
                                            </button>
                                        </Link>
                                        <Link to="/contactus">
                                            <button
                                                className="font-bold border-1 rounded mx-1 px-4 py-2 md:mx-3 sm:px-7 sm:py-3 text-center bg-[var(--color-secondary)] m-8 max-w-[300px] max-sm:text-xs text-sm md:text-base min-2xl:text-lg">
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>}
                        </AnimatePresence>


                    </div>

                    <div className="arrow bg-green-900/50" onClick={() => updateIndex(true)}><ArrowRightOutlined
                        style={{fontSize: '24px'}}/></div>

                </div>


                <div className="navigation-indicators">

                    {
                        [...Array(company.banner.length)].map((_, thisIndex) => {
                            return (<div className={`${index === thisIndex ? '!bg-orange-300' : ''} indicators`}
                                         key={thisIndex}></div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
