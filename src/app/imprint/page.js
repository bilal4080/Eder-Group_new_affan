// components/page.js
import React from "react";

const page = () => {
    return (
        <div className=" max-w-4xl mx-auto bg-white s rounded-lg pt-32">
            <h1 className="text-2xl font-bold mb-4 data-translate">Imprint</h1>

            <h2 className="text-xl font-semibold mt-4 data-translate">Legal Provider Identification:</h2>
            <p data-translate>EDER - Steel GmbH</p>
            <p data-translate>
                represented by the Managing Directors Mr. Richard Stoll, Mrs. Regina Stoll, Mr. Ronald Binder
            </p>
            <p data-translate>Alois - Senefelder - Allee 1</p>
            <p data-translate>86153 Augsburg</p>
            <p data-translate>Germany</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Contact
            </h2>
            <p data-translate>Tel.: +49 (0) 821 - 809974 - 0</p>
            <p data-translate>
                Email:{" "}
                <a href="mailto:anfrage@srs-stahl.de" className="text-blue-500">
                    anfrage@srs-stahl.de
                </a>
            </p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                VAT ID
            </h2>
            <p data-translate>VAT ID No.: DE 813902859</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Commercial Register
            </h2>
            <p data-translate>registered in the commercial register of the district court of Augsburg</p>
            <p data-translate>Commercial Register Number HRB 20362</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Data Protection Officer
            </h2>
            <p data-translate>Data Protection Officer: Mrs. Isabell Stoll</p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                FairCommerce
            </h2>
            <p data-translate>We have been a member of the "FairCommerce" initiative since 18.04.2018.</p>
            <p>
                For more information, please visit{" "}
                <a href="http://www.fair-commerce.de" className="text-blue-500">
                    www.fair-commerce.de
                </a>
                .
            </p>

            <h2 data-translate className="text-xl font-semibold mt-4">
                Photographer
            </h2>
            <p>
                Photographer: Ingo Dumreicher /{" "}
                <a href="http://www.id-fotos.de" className="text-blue-500">
                    www.id-fotos.de
                </a>
            </p>
            <p data-translate>Photo NE-Metals from the program:</p>
            <p data-translate>© iStock.com / lucentius</p>

            <h2 data-translateclassName="text-xl font-semibold mt-4">Copyright</h2>
            <p data-translate>Layout and programming are protected by copyright.</p>
        </div>
    );
};

export default page;
