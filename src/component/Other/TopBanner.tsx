import "../../styles/headsection.css";
const TopBanner = (props: any) => {
    return (
            <div
                className="headSection1 "
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${props.image})`
                }}
            >
                <p
                    id="heading"
                    className="text-2xl sm:text-3xl !font-bold md:text-5xl lg:text-5xl min-[1900px]:text-6xl"
                >
                    {props.heading}
                </p>
                <p
                    className="text-[13px] md:text-base xl:text-lg min-[1900px]:text-2xl !font-bold"
                    style={{ marginTop: '15px'}}
                >
                    {props.para}
                </p>
            </div>

    );
};

export default TopBanner;