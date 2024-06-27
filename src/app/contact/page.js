"use client";
import React, {useState} from "react";
import axios from "axios";

const Kontaktformular = () => {
    const [email, setEmail] = useState("");
    const [betreff, setBetreff] = useState("");
    const [nachricht, setNachricht] = useState("");
    const [fehler, setFehler] = useState({});
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Einfache Validierung
        let fehler = {};
        if (!email) {
            fehler.email = "E-Mail ist erforderlich";
        }
        if (!betreff) {
            fehler.betreff = "Betreff ist erforderlich";
        }
        if (!nachricht) {
            fehler.nachricht = "Nachricht ist erforderlich";
        }

        if (Object.keys(fehler).length === 0) {
            try {
                const response = await axios.post("/api/send_email", {
                    email,
                    betreff,
                    nachricht,
                });

                if (response.status === 200) {
                    setEmail("");
                    setBetreff("");
                    setNachricht("");
                    setStatus("erfolg");
                } else {
                    console.error("Unerwartete Antwort:", response);
                    setStatus("fehler");
                }
            } catch (error) {
                console.error("Fehler beim Senden der E-Mail:", error);
                setStatus("fehler");
            }
        } else {
            setFehler(fehler);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 pt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Kontaktieren Sie uns
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Haben Sie ein technisches Problem? Möchten Sie Feedback zu einer Beta-Funktion geben? Benötigen Sie
                    Details zu unserem Geschäftsplan? Lassen Sie es uns wissen.
                </p>
                {status === "erfolg" && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md mb-4">
                        E-Mail erfolgreich gesendet!
                    </div>
                )}
                {status === "fehler" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
                        Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Ihre E-Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                fehler.email ? "border-red-500" : ""
                            }`}
                            placeholder="affan@eder.de"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {fehler.email && <p className="text-red-500 text-xs mt-1">{fehler.email}</p>}
                    </div>
                    <div>
                        <label
                            htmlFor="betreff"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Betreff
                        </label>
                        <input
                            type="text"
                            id="betreff"
                            className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                                fehler.betreff ? "border-red-500" : ""
                            }`}
                            placeholder="Lassen Sie uns wissen, wie wir Ihnen helfen können"
                            value={betreff}
                            onChange={(e) => setBetreff(e.target.value)}
                            required
                        />
                        {fehler.betreff && <p className="text-red-500 text-xs mt-1">{fehler.betreff}</p>}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="nachricht"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Ihre Nachricht
                        </label>
                        <textarea
                            id="nachricht"
                            rows="6"
                            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                fehler.nachricht ? "border-red-500" : ""
                            }`}
                            placeholder="Hinterlassen Sie einen Kommentar..."
                            value={nachricht}
                            onChange={(e) => setNachricht(e.target.value)}
                            required
                        ></textarea>
                        {fehler.nachricht && <p className="text-red-500 text-xs mt-1">{fehler.nachricht}</p>}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm bg-black font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Nachricht senden
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Kontaktformular;
