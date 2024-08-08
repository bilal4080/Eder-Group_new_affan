// components/page.js
import React from "react";

const page = () => {
    return (
        <div className=" max-w-4xl mx-auto bg-white s rounded-lg pt-32">
            <h1 className="text-2xl font-bold mb-4 data-translate">Imprint</h1>

            <h2 className="text-xl font-semibold mt-4 data-translate">Legal Provider Identification:</h2>
            <p data-translate>EDER UG</p>
            <p data-translate>represented by the Managing Directors Mr. Muhammad Affan Rana</p>
            <p data-translate>Hindenburgstraße 14, 86356,</p>
            <p data-translate>Neusäß,</p>
            <p data-translate>Deutschland</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Contact
            </h2>
            <p data-translate>Tel.: +49 (0)1777 44 1002</p>
            <p data-translate>
                Email:{" "}
                <a href="mailto:kontakt@the-eder.de" className="text-blue-500">
                    kontakt@the-eder.de
                </a>
            </p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                VAT ID
            </h2>
            {/* <p data-translate>VAT ID No.: DE 8</p> */}

            <h2 data-translate className="text-xl font-semibold mt-4">
                Commercial Register
            </h2>
            <p data-translate>registered in the commercial register of the district court of Stuttgart</p>
            <p data-translate>Commercial Register Number HRB 792948</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Data Protection Officer
            </h2>
            <p data-translate>Data Protection Officer: Mr. Muhammad Affan Rana</p>

            <h2 data-translateclassName="text-xl font-semibold mt-4">Copyright</h2>
            <p data-translate>Layout and programming are protected by copyright.</p>
        </div>
    );
};

export default page;
