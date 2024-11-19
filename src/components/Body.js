import React from "react";

const Body = () => {
    return (
        <section>
            <h1 className="text-6xl font-bold flex justify-center mt-10 font-font1">Welcome.</h1>
            <div className="grid grid-col-12 mt-20">
                <h2 className="text-4xl font-bold flex col-span-2 col-start-10 font-poiret">Projetos</h2>
                <ul className="text-xl font-semibold col-span-2 col-start-10 font-poiret list-disc mt-6">
                    <li>Mulher Plena</li>
                    <li>UniChoice</li>
                </ul>
            </div>
            
        </section>
    );
};

export default Body;