module.exports = {
  content : [ "./src/**/*.{html,ts}" ],
  mode : "jit",
  important : true,
  corePlugins : {
    preflight : false,
  },
  purge : [
    {
      enabled : true,
      content : [ "./src/**/*.{html,ts}" ],
    },
  ],
  darkMode : false, // or 'media' or 'class'
  theme : {
    extend : {},
  },
  variants : {
    extend : {},
  },
  plugins : [],
};
