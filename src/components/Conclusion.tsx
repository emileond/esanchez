import {RiLineChartLine} from "react-icons/ri";

const Conclusion = ({
                        title = "Closing thoughts\n",
                        children,
                    }) => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">

                <div className="flex flex-col mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 text-primary rounded-xl p-3 shadow-sm">
                            <RiLineChartLine className="text-3xl" aria-hidden="true"/>
                        </div>
                        <h2 className="text-4xl font-semibold text-base-content text-center">
                            {title}
                        </h2>
                    </div>
                </div>

                <div className="flex gap-10 items-center">
                    {children}

                </div>
            </div>
        </section>
    );
};

export default Conclusion;
