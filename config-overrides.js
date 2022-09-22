const { override, useBabelRc } = require("customize-cra");
// thu vien customize-cra
// "customize-cra": "^1.0.0",
// Thu vien de gan cac custumize
// "react-app-rewired": "^2.2.1"

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
