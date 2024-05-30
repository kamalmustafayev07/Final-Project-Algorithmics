const StarRating = ({ rating }) => {
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    return (
        <div className="text-[0px] inline-block relative">
            <div className="inline-block relative text-[24px] text-gray-400 whitespace-nowrap before:content-['★★★★★'] font-montserrat">
                <div className="absolute top-0 left-0 whitespace-nowrap overflow-hidden text-primary before:content-['★★★★★'] font-montserrat" style={{ width: starPercentageRounded }}></div>
            </div>
        </div>
    );
};

export default StarRating;
