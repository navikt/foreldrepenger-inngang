const Environment = () => {
    return {
        SOK_FORELDREPENGER_URL: window.appSettings.SOK_FORELDREPENGER_URL,
        SOK_FORELDREPENGER_PAPIR_URL: window.appSettings.SOK_FORELDREPENGER_PAPIR_URL,
        SOK_ENGANGSSTONAD_URL: window.appSettings.SOK_ENGANGSSTONAD_URL,
        SOK_ENGANGSSTONAD_PAPIR_URL: window.appSettings.SOK_ENGANGSSTONAD_PAPIR_URL,
        ENDRE_SOKNAD_FORELDREPENGER_URL: window.appSettings.ENDRE_SOKNAD_FORELDREPENGER_URL
    };
};

export default Environment();
